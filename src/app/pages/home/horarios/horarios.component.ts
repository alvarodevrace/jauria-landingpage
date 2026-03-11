import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassSlot, DaySchedule, contactDetails, schedule } from '../../../shared/content/landing-content';

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
  readonly schedule: DaySchedule[] = schedule;

  getDailySummary(day: DaySchedule): string {
    const start = day.classes[0]?.time;
    const end = day.classes[day.classes.length - 1]?.time;
    return start && end ? `${start} - ${end}` : 'Horario por confirmar';
  }

  getDailyTags(day: DaySchedule): string[] {
    return [...new Set(day.classes.map((item) => item.type))].slice(0, 3);
  }
}
