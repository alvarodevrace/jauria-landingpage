import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  navLinks = [
    { label: 'Programas', href: '#programas' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Membresías', href: '#membresias' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Contacto', href: '#contacto' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnDestroy(): void {}

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
