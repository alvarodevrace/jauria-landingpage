import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClassSlot {
  time: string;
  type: 'WOD' | 'Open Gym' | 'Barbell';
  coach?: string;
}

interface DaySchedule {
  day: string;
  short: string;
  classes: ClassSlot[];
}

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.scss'
})
export class HorariosComponent {
  filters: Array<'WOD' | 'Open Gym' | 'Barbell' | 'todos'> = ['todos', 'WOD', 'Open Gym', 'Barbell'];
  activeFilter: 'WOD' | 'Open Gym' | 'Barbell' | 'todos' = 'todos';

  schedule: DaySchedule[] = [
    {
      day: 'Lunes', short: 'LUN',
      classes: [
        { time: '06:00', type: 'WOD', coach: 'Miguel' },
        { time: '07:00', type: 'WOD', coach: 'Sara' },
        { time: '08:00', type: 'WOD', coach: 'Miguel' },
        { time: '12:00', type: 'Open Gym' },
        { time: '17:00', type: 'WOD', coach: 'Carlos' },
        { time: '18:00', type: 'WOD', coach: 'Sara' },
        { time: '19:00', type: 'WOD', coach: 'Carlos' },
        { time: '20:00', type: 'Barbell', coach: 'Miguel' }
      ]
    },
    {
      day: 'Martes', short: 'MAR',
      classes: [
        { time: '06:00', type: 'WOD', coach: 'Sara' },
        { time: '07:00', type: 'WOD', coach: 'Carlos' },
        { time: '08:00', type: 'WOD', coach: 'Sara' },
        { time: '12:00', type: 'Open Gym' },
        { time: '17:00', type: 'WOD', coach: 'Miguel' },
        { time: '18:00', type: 'WOD', coach: 'Carlos' },
        { time: '19:00', type: 'WOD', coach: 'Miguel' }
      ]
    },
    {
      day: 'Miércoles', short: 'MIÉ',
      classes: [
        { time: '06:00', type: 'WOD', coach: 'Carlos' },
        { time: '07:00', type: 'WOD', coach: 'Miguel' },
        { time: '08:00', type: 'WOD', coach: 'Carlos' },
        { time: '12:00', type: 'Open Gym' },
        { time: '17:00', type: 'WOD', coach: 'Sara' },
        { time: '18:00', type: 'WOD', coach: 'Miguel' },
        { time: '19:00', type: 'WOD', coach: 'Sara' },
        { time: '20:00', type: 'Barbell', coach: 'Carlos' }
      ]
    },
    {
      day: 'Jueves', short: 'JUE',
      classes: [
        { time: '06:00', type: 'WOD', coach: 'Miguel' },
        { time: '07:00', type: 'WOD', coach: 'Sara' },
        { time: '08:00', type: 'WOD', coach: 'Miguel' },
        { time: '12:00', type: 'Open Gym' },
        { time: '17:00', type: 'WOD', coach: 'Carlos' },
        { time: '18:00', type: 'WOD', coach: 'Sara' },
        { time: '19:00', type: 'WOD', coach: 'Carlos' }
      ]
    },
    {
      day: 'Viernes', short: 'VIE',
      classes: [
        { time: '06:00', type: 'WOD', coach: 'Sara' },
        { time: '07:00', type: 'WOD', coach: 'Carlos' },
        { time: '08:00', type: 'WOD', coach: 'Sara' },
        { time: '12:00', type: 'Open Gym' },
        { time: '17:00', type: 'WOD', coach: 'Miguel' },
        { time: '18:00', type: 'WOD', coach: 'Carlos' },
        { time: '19:00', type: 'WOD', coach: 'Miguel' },
        { time: '20:00', type: 'Barbell', coach: 'Sara' }
      ]
    },
    {
      day: 'Sábado', short: 'SÁB',
      classes: [
        { time: '07:00', type: 'WOD', coach: 'Miguel' },
        { time: '08:00', type: 'WOD', coach: 'Carlos' },
        { time: '09:00', type: 'WOD', coach: 'Sara' },
        { time: '10:00', type: 'Open Gym' },
        { time: '11:00', type: 'Barbell', coach: 'Miguel' }
      ]
    }
  ];

  setFilter(filter: 'WOD' | 'Open Gym' | 'Barbell' | 'todos'): void {
    this.activeFilter = filter;
  }

  getFilteredClasses(classes: ClassSlot[]): ClassSlot[] {
    if (this.activeFilter === 'todos') return classes;
    return classes.filter(c => c.type === this.activeFilter);
  }
}
