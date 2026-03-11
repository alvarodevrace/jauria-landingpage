import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactDetails, createWhatsAppUrl, navLinks } from '../../shared/content/landing-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly contact = contactDetails;
  readonly whatsappUrl = createWhatsAppUrl();
  readonly navLinks = navLinks;

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
