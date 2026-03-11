import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createWhatsAppUrl, heroJoinMessage, slides } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly slides = slides;
  readonly joinUrl = createWhatsAppUrl(heroJoinMessage);
  currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly INTERVAL_MS = 5000;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.INTERVAL_MS);
  }

  private stopAutoplay(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
