import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ClubComponent } from './club/club.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProgramasComponent } from './programas/programas.component';
import { WellnessComponent } from './wellness/wellness.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { HorariosComponent } from './horarios/horarios.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ClubComponent,
    GaleriaComponent,
    ProgramasComponent,
    WellnessComponent,
    MembresiasComponent,
    HorariosComponent,
    TestimoniosComponent,
    ContactoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
