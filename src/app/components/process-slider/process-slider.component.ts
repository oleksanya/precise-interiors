
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { SliderContent } from '../../interfaces/slider-content';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-process-slider',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './process-slider.component.html',
  styleUrl: './process-slider.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProcessSliderComponent { 
  isOpenDialog = false;
  selectedImage: string | null = null;

  @Input() sliderData!: SliderContent[];


  openDialog(imageUrl: string) {
    this.isOpenDialog = true;
    this.selectedImage = imageUrl;
  }

  closeDialog(): void {
    this.isOpenDialog = false;
    this.selectedImage = null;
  }
}
