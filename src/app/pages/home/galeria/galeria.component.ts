import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { galleryImages } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  readonly images = galleryImages;

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
