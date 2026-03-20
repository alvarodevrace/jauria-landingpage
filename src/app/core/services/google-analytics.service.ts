import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
  private readonly document = inject(DOCUMENT);
  private initialized = false;

  init(): void {
    if (this.initialized || !this.isEnabled()) return;
    this.initialized = true;

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.ga4MeasurementId}`;
    this.document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };

    window.gtag('js', new Date());
    window.gtag('config', environment.ga4MeasurementId, {
      anonymize_ip: true,
      page_path: this.currentPath(),
      page_title: this.document.title,
      page_location: window.location.href,
    });
  }

  trackPageView(path = this.currentPath()): void {
    if (!this.isEnabled() || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: this.document.title,
      page_location: window.location.href,
    });
  }

  trackWhatsAppClick(source: string): void {
    this.trackEvent('whatsapp_click', { source });
  }

  trackContactForm(programa?: string): void {
    this.trackEvent('generate_lead', {
      form_name: 'contacto_landing',
      program: programa || 'sin_programa',
    });
  }

  trackFreeClassSignup(source: string): void {
    this.trackEvent('select_promotion', {
      promotion_name: 'clase_de_prueba',
      source,
    });
  }

  private trackEvent(name: string, params: Record<string, unknown>): void {
    if (!this.isEnabled() || !window.gtag) return;
    window.gtag('event', name, params);
  }

  private isEnabled(): boolean {
    return environment.production && !!environment.ga4MeasurementId && typeof window !== 'undefined';
  }

  private currentPath(): string {
    return `${window.location.pathname}${window.location.search}`;
  }
}
