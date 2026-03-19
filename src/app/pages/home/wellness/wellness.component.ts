import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroJoinMessage, wellnessMetrics, createWhatsAppUrl } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wellness.component.html',
  styleUrl: './wellness.component.scss'
})
export class WellnessComponent {
  readonly metrics = wellnessMetrics;
  readonly whatsappUrl = createWhatsAppUrl(heroJoinMessage);
}
