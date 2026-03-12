import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeArea, createWhatsAppUrl, practiceAreas } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.scss'
})
export class ProgramasComponent {
  readonly practiceAreas: PracticeArea[] = practiceAreas;
  readonly atmosphereImages = [
    'assets/images/unnamed6.jpg',
    'assets/images/2024-02-28.jpg',
    'assets/images/unnamed8.jpg'
  ];

  getProgramUrl(title: string): string {
    return createWhatsAppUrl(`Hola, quiero saber cómo entrenan ${title} en Jauría`);
  }
}
