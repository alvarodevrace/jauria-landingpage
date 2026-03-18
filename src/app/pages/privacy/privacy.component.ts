import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactDetails } from '../../shared/content/landing-content';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  readonly whatsapp = contactDetails.whatsappDisplay;
  readonly instagram = contactDetails.instagramHandle;
}
