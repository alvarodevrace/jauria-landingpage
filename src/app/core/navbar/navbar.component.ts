import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createWhatsAppUrl, heroJoinMessage, navLinks } from '../../shared/content/landing-content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMenuOpen = false;
  readonly navLinks = navLinks;
  readonly joinUrl = createWhatsAppUrl(heroJoinMessage);
  readonly lightLogo = 'assets/images/logo.png';
  readonly darkLogo = 'assets/images/logoNegro.png';
  private readonly isFirefox = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    this.isScrolled = window.scrollY > 50;
    document.documentElement.classList.toggle('browser-firefox', this.isFirefox);
  }

  ngOnDestroy(): void {
    document.documentElement.classList.remove('browser-firefox');
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollTo(href: string): void {
    this.closeMenu();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
