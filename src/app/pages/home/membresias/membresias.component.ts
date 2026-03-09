import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Membresia {
  name: string;
  price: number;
  period: string;
  billing: string;
  popular: boolean;
  benefits: string[];
  waText: string;
}

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.scss'
})
export class MembresiasComponent {
  membresias: Membresia[] = [
    {
      name: 'Mensual',
      price: 45,
      period: '/mes',
      billing: 'Facturación mensual',
      popular: false,
      benefits: [
        'Acceso ilimitado WOD',
        'Open Gym disponible',
        'Evaluación inicial',
        'App de seguimiento',
        'Comunidad Jauría'
      ],
      waText: 'Hola%2C%20me%20interesa%20la%20membres%C3%ADa%20Mensual%20de%20Jau%C3%ADa'
    },
    {
      name: 'Trimestral',
      price: 38,
      period: '/mes',
      billing: 'Facturación cada 3 meses · $114 total',
      popular: true,
      benefits: [
        'Acceso ilimitado WOD',
        'Open Gym disponible',
        'Evaluación inicial',
        'App de seguimiento',
        'Comunidad Jauría',
        'Acceso Barbell Club'
      ],
      waText: 'Hola%2C%20me%20interesa%20la%20membres%C3%ADa%20Trimestral%20de%20Jau%C3%ADa'
    },
    {
      name: 'Anual',
      price: 30,
      period: '/mes',
      billing: 'Facturación anual · $360 total',
      popular: false,
      benefits: [
        'Acceso ilimitado WOD',
        'Open Gym disponible',
        'Evaluación inicial',
        'App de seguimiento',
        'Comunidad Jauría',
        'Acceso Barbell Club',
        'Nutrición básica incluida'
      ],
      waText: 'Hola%2C%20me%20interesa%20la%20membres%C3%ADa%20Anual%20de%20Jau%C3%ADa'
    }
  ];
}
