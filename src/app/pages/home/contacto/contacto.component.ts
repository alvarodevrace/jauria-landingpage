import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';
import { contactDetails, createWhatsAppUrl, leadPrograms } from '../../../shared/content/landing-content';

interface LeadForm {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  programa: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit {
  private supabase!: SupabaseClient;
  private sanitizer = inject(DomSanitizer);
  readonly contact = contactDetails;
  readonly whatsappUrl = createWhatsAppUrl();
  readonly respuestaEsperada = contactDetails.responseExpectation;
  readonly safeMapEmbedUrl: SafeResourceUrl;

  form: LeadForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    programa: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  readonly programas = leadPrograms;

  constructor() {
    this.safeMapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.contact.mapEmbedUrl);
  }

  ngOnInit(): void {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    try {
      const { error } = await this.supabase
        .from('leads')
        .insert([{
          nombre: this.form.nombre,
          email: this.form.email,
          telefono: this.form.telefono,
          mensaje: this.form.mensaje,
          programa: this.form.programa,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      this.submitSuccess = true;
      this.form = { nombre: '', email: '', telefono: '', mensaje: '', programa: '' };

      setTimeout(() => {
        this.submitSuccess = false;
      }, 6000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al enviar el formulario. Intenta de nuevo.';
      this.submitError = message;
    } finally {
      this.isSubmitting = false;
    }
  }
}
