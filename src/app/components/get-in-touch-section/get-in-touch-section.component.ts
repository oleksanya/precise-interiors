import { Component } from '@angular/core';
import { GetInTouchFormComponent } from '../get-in-touch-form/get-in-touch-form.component';

@Component({
  selector: 'app-get-in-touch-section',
  standalone: true,
  imports: [GetInTouchFormComponent],
  templateUrl: './get-in-touch-section.component.html',
  styleUrl: './get-in-touch-section.component.css',
})
export class GetInTouchSectionComponent {}
