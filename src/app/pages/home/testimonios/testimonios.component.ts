import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonio, testimonios } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent {
  readonly testimonios: Testimonio[] = testimonios.slice(0, 3);
}
