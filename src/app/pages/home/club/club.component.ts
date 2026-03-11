import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { clubMessages } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss'
})
export class ClubComponent {
  readonly messages = clubMessages;
}
