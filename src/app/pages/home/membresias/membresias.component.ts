import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Membresia, createWhatsAppUrl, membresias } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.scss'
})
export class MembresiasComponent {
  readonly membresias: Membresia[] = membresias;
  readonly contactUrl = createWhatsAppUrl();

  getMembershipUrl(message: string): string {
    return createWhatsAppUrl(message);
  }
}
