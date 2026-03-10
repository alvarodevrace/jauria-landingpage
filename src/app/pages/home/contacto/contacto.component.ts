import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';

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
  readonly whatsappUrl = 'https://wa.me/593983936154';
  readonly instagramUrl = 'https://www.instagram.com/jauriastrengthandfitness/';
  readonly instagramHandle = '@jauriastrengthandfitness';
  readonly respuestaEsperada = 'Respondemos en horario del box, normalmente el mismo dia.';

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

  programas = [
    'CrossFit WOD',
    'Open Gym',
    'Barbell Club',
    'CrossFit Kids',
    'Competición',
    'Fundamentos'
  ];

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
