import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsService } from '../../../core/services/google-analytics.service';
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
  prefetchNextSlide = false;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private prefetchTimerId: number | null = null;
  private readonly INTERVAL_MS = 5000;
  private readonly analytics = inject(GoogleAnalyticsService);

  ngOnInit(): void {
    this.startAutoplay();
    this.scheduleNextSlidePrefetch();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.clearPrefetchTimer();
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

  private scheduleNextSlidePrefetch(): void {
    const requestIdle = window.requestIdleCallback?.bind(window);

    if (requestIdle) {
      requestIdle(() => {
        this.prefetchNextSlide = true;
      }, { timeout: 1500 });
      return;
    }

    this.prefetchTimerId = window.setTimeout(() => {
      this.prefetchNextSlide = true;
      this.prefetchTimerId = null;
    }, 1500);
  }

  private clearPrefetchTimer(): void {
    if (this.prefetchTimerId !== null) {
      clearTimeout(this.prefetchTimerId);
      this.prefetchTimerId = null;
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

  shouldLoadSlide(index: number): boolean {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    return index === this.currentIndex || (this.prefetchNextSlide && index === nextIndex);
  }

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  trackPrimaryCta(): void {
    this.analytics.trackFreeClassSignup('hero');
    this.analytics.trackWhatsAppClick('hero');
  }
}
