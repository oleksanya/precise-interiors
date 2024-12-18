import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProcessSliderComponent } from "../../components/process-slider/process-slider.component";
import { SliderContent } from '../../interfaces/slider-content';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-working-process-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProcessSliderComponent, MatIconModule, RouterModule],
  templateUrl: './working-process-page.component.html',
  styleUrl: './working-process-page.component.css'
})
export class WorkingProcessPageComponent {

  sliderData: SliderContent[] =
  [ 
    {
      title: "Internal Partitioning and Ceilings",
      description: "Internal and ceiling package (labour supply only)",
      slides: [
        { id: 1, image: "./working-process/INTERNAL AND CEILINGS/internal_1.jpg", alt: "Internal Partitioning Slide 1" },
        { id: 2, image: "./working-process/INTERNAL AND CEILINGS/internal_2.jpg", alt: "Internal Partitioning Slide 2" },
        { id: 3, image: "./working-process/INTERNAL AND CEILINGS/internal_3.jpg", alt: "Internal Partitioning Slide 3" },
        { id: 4, image: "./working-process/INTERNAL AND CEILINGS/internal_4.jpg", alt: "Internal Partitioning Slide 4" },
        { id: 5, image: "./working-process/INTERNAL AND CEILINGS/internal_5.jpg", alt: "Internal Partitioning Slide 5" },
        { id: 6, image: "./working-process/INTERNAL AND CEILINGS/internal_6.jpg", alt: "Internal Partitioning Slide 6" },
        { id: 7, image: "./working-process/INTERNAL AND CEILINGS/internal_7.jpg", alt: "Internal Partitioning Slide 7" },
        { id: 8, image: "./working-process/INTERNAL AND CEILINGS/internal_8.jpg", alt: "Internal Partitioning Slide 8" },
        { id: 9, image: "./working-process/INTERNAL AND CEILINGS/internal_9.jpg", alt: "Internal Partitioning Slide 9" },
        { id: 10, image: "./working-process/INTERNAL AND CEILINGS/internal_10.jpg", alt: "Internal Partitioning Slide 10" },
        { id: 11, image: "./working-process/INTERNAL AND CEILINGS/internal_11.jpg", alt: "Internal Partitioning Slide 11" },
        { id: 12, image: "./working-process/INTERNAL AND CEILINGS/internal_12.jpg", alt: "Internal Partitioning Slide 12" },
        { id: 12, image: "./working-process/INTERNAL AND CEILINGS/internal_13.jpg", alt: "Internal Partitioning Slide 13" },
      ],
    },
    {
      title: "SFS (Steel Framing System)",
      description: "SFS (labour supply only) package for our client Ace Partitions and Ceilings Ltd, Top Wighay, Nottingham",
      slides: [
        { id: 1, image: "./working-process/SFS/SFS_1.jpg", alt: "Steel Framing System Slide 1" },
        { id: 2, image: "./working-process/SFS/SFS_2.jpg", alt: "Steel Framing System Slide 2" },
        { id: 3, image: "./working-process/SFS/SFS_3.jpg", alt: "Steel Framing System Slide 3" },
        { id: 4, image: "./working-process/SFS/SFS_4.jpg", alt: "Steel Framing System Slide 4" },
        { id: 5, image: "./working-process/SFS/SFS_5.jpg", alt: "Steel Framing System Slide 5" },
        { id: 6, image: "./working-process/SFS/SFS_6.jpg", alt: "Steel Framing System Slide 6" },
        { id: 7, image: "./working-process/SFS/SFS_7.jpg", alt: "Steel Framing System Slide 7" },
      ],
    },
    {
      title: "Refurbishment",
      description: `Internal design, drywall installation, utilities, electrical wiring and heating systems (underfloor heating), plastering, flooring, painting and decorating.  
        The project complited to the clients satisfaction, meeting all design and sustainability goals and adhered to the projected timeline and budget.`,
      slides: [
        { id: 1, image: "./working-process/REFURBISHMENT/refurbishment_1.jpg", alt: "Refurbishment Slide 1" },
        { id: 2, image: "./working-process/REFURBISHMENT/refurbishment_2.jpg", alt: "Refurbishment Slide 2" },
        { id: 3, image: "./working-process/REFURBISHMENT/refurbishment_3.jpg", alt: "Refurbishment Slide 3" },
        { id: 4, image: "./working-process/REFURBISHMENT/refurbishment_4.jpg", alt: "Refurbishment Slide 4" },
        { id: 5, image: "./working-process/REFURBISHMENT/refurbishment_5.jpg", alt: "Refurbishment Slide 5" },
        { id: 6, image: "./working-process/REFURBISHMENT/refurbishment_6.jpg", alt: "Refurbishment Slide 6" },
      ],
    },
  ];
}
