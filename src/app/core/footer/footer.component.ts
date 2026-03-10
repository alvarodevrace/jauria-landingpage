import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  readonly whatsappUrl = 'https://wa.me/593983936154';
  readonly instagramUrl = 'https://www.instagram.com/jauriastrengthandfitness/';
  readonly instagramHandle = '@jauriastrengthandfitness';
  readonly responseCopy = 'Respuesta rápida en horario del box';

  navLinks = [
    { label: 'Programas', href: '#programas' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Membresías', href: '#membresias' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Contacto', href: '#contacto' }
  ];

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
