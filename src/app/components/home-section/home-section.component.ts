import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
})
export class HomeSectionComponent {}
