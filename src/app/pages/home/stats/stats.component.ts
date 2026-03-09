import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;

  stats: Stat[] = [
    { value: 200, suffix: '+', label: 'Atletas', current: 0 },
    { value: 5, suffix: '', label: 'Años de experiencia', current: 0 },
    { value: 20, suffix: '+', label: 'Clases por semana', current: 0 },
    { value: 4, suffix: '', label: 'Coaches certificados', current: 0 }
  ];

  private hasAnimated = false;
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }
      },
      { threshold: 0.4 }
    );
    if (this.statsSection?.nativeElement) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  private animateCounters(): void {
    this.stats.forEach((stat, index) => {
      const duration = 1800;
      const steps = 60;
      const stepValue = stat.value / steps;
      let step = 0;

      const delay = index * 120;
      setTimeout(() => {
        const interval = setInterval(() => {
          step++;
          stat.current = Math.min(Math.round(stepValue * step), stat.value);
          if (step >= steps) {
            clearInterval(interval);
            stat.current = stat.value;
          }
        }, duration / steps);
      }, delay);
    });
  }
}
