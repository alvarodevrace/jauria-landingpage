import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonio {
  name: string;
  initials: string;
  role: string;
  text: string;
  color: string;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  testimonios: Testimonio[] = [
    {
      name: 'Andrés Mora',
      initials: 'AM',
      role: 'Atleta — 2 años',
      color: '#E03A2F',
      text: 'Jauría cambió mi vida. Llegué sin saber nada de CrossFit y ahora compito a nivel nacional. Los coaches son increíbles y la comunidad te impulsa a dar siempre más.'
    },
    {
      name: 'Paola Vásquez',
      initials: 'PV',
      role: 'Atleta — 1 año',
      color: '#2979FF',
      text: 'El mejor box de Quito sin duda. La programación es inteligente, los coaches te corrigen con detalle y el ambiente es único. Nunca pensé que me iba a enamorar del CrossFit así.'
    },
    {
      name: 'Roberto Chávez',
      initials: 'RC',
      role: 'Atleta — 3 años',
      color: '#FF9800',
      text: 'Llevo 3 años entrenando en Jauría y sigo mejorando. La comunidad que se ha formado aquí es algo especial. No es solo un gym, es tu segunda familia.'
    },
    {
      name: 'Valeria Torres',
      initials: 'VT',
      role: 'Atleta — 6 meses',
      color: '#4CAF50',
      text: 'Vine por el Barbell Club y me quedé por todo lo demás. Los WODs son duros pero los coaches siempre te ayudan a escalar los movimientos. 100% recomendado.'
    }
  ];

  currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngAfterViewInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4500);
  }

  private stopAutoplay(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonios.length) % this.testimonios.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonios.length;
  }
}
