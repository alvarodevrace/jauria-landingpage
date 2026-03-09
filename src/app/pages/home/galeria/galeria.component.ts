import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  images = [
    { src: 'assets/images/jauria.jpg', alt: 'Jauría CrossFit' },
    { src: 'assets/images/jauria2.jpg', alt: 'Jauría Training' },
    { src: 'assets/images/2024-02-26.jpg', alt: 'Entrenamiento CrossFit' },
    { src: 'assets/images/2024-02-28.jpg', alt: 'WOD CrossFit' },
    { src: 'assets/images/2024-02-281.jpg', alt: 'CrossFit Kids' },
    { src: 'assets/images/2024-02-283.jpg', alt: 'Barbell Club' },
    { src: 'assets/images/2024-02-284.jpg', alt: 'Entrenamiento funcional' },
    { src: 'assets/images/2024-02-285.jpg', alt: 'Fundamentos CrossFit' },
    { src: 'assets/images/images.jpg', alt: 'Jauría Box' },
    { src: 'assets/images/unnamed3.jpg', alt: 'Competición' },
    { src: 'assets/images/unnamed6.jpg', alt: 'Atletas Jauría' },
    { src: 'assets/images/unnamed7.jpg', alt: 'Open Gym' },
    { src: 'assets/images/unnamed8.jpg', alt: 'Entrenamiento' }
  ];

  lightboxImage: string | null = null;
  lightboxAlt = '';

  openLightbox(src: string, alt: string): void {
    this.lightboxImage = src;
    this.lightboxAlt = alt;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxImage = null;
    this.lightboxAlt = '';
    document.body.style.overflow = '';
  }

  onLightboxBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }
}
