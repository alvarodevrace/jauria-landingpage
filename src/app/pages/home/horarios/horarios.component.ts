import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactDetails } from '../../../shared/content/landing-content';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.scss'
})
export class HorariosComponent {
  readonly instagramUrl = contactDetails.instagramUrl;
  readonly instagramHandle = contactDetails.instagramHandle;

  private readonly horarioBlocks: HorarioBlock[] = [
    {
      id: 'matutino',
      days: 'Lun–Vie',
      title: 'Bloque Matutino',
      range: '6:00 am – 10:00 am',
      description: 'Sesiones para arrancar el día con técnica, movilidad y WODs energéticos.',
      times: ['06:00', '07:00', '08:00', '09:00'],
      accent: 'warm',
      coaches: ['Tony Meza · Lun · Mar · Jue · Sáb', 'Jaz Chillagana · Mié · Vie'],
    },
    {
      id: 'vespertino',
      days: 'Lun–Vie',
      title: 'Bloque Vespertino',
      range: '4:00 pm – 9:00 pm',
      description: 'Intensidad controlada con énfasis en fuerza y acondicionamiento fino.',
      times: ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
      accent: 'cool',
      coaches: ['Tony Meza · Lun · Mar · Jue', 'Jaz Chillagana · Mié · Vie'],
    },
    {
      id: 'sabado',
      days: 'Sáb',
      title: 'Sábado & Skills',
      range: '8:00 am – 10:00 am',
      description: 'Entrenamientos concentrados para técnica, movilidad y sesiones de comunidad.',
      times: ['08:00', '09:00'],
      accent: 'neutral',
      coaches: ['Tony Meza · Sáb'],
    },
  ];

  get blocks() {
    return this.horarioBlocks;
  }
}

interface HorarioBlock {
  id: string;
  days: string;
  title: string;
  range: string;
  description: string;
  times: string[];
  coaches: string[];
  accent: 'warm' | 'cool' | 'neutral';
}
