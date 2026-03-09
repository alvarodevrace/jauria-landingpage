import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Programa {
  title: string;
  description: string;
  image: string;
  tag: string;
}

@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.scss'
})
export class ProgramasComponent {
  programas: Programa[] = [
    {
      title: 'CrossFit WOD',
      description: 'Entrenamiento funcional de alta intensidad. Cada día un workout diferente que desafía tus límites.',
      image: 'assets/images/2024-02-28.jpg',
      tag: 'Todo nivel'
    },
    {
      title: 'Open Gym',
      description: 'Tiempo libre en el box para trabajar tu fuerza, movilidad o practicar movimientos técnicos.',
      image: 'assets/images/unnamed8.jpg',
      tag: 'Flexible'
    },
    {
      title: 'Barbell Club',
      description: 'Programa especializado en halterofilia olímpica. Snatch, clean & jerk y técnica de barra.',
      image: 'assets/images/2024-02-283.jpg',
      tag: 'Técnico'
    },
    {
      title: 'CrossFit Kids',
      description: 'Movimientos funcionales adaptados para niños y adolescentes. Deporte, diversión y valores.',
      image: 'assets/images/2024-02-281.jpg',
      tag: 'Niños'
    },
    {
      title: 'Competición',
      description: 'Prepárate para los Open de CrossFit y competencias locales. Entrenamiento específico de alto rendimiento.',
      image: 'assets/images/unnamed3.jpg',
      tag: 'Avanzado'
    },
    {
      title: 'Fundamentos',
      description: 'Programa de introducción al CrossFit. Aprende los movimientos básicos con seguridad y eficacia.',
      image: 'assets/images/2024-02-285.jpg',
      tag: 'Principiante'
    }
  ];
}
