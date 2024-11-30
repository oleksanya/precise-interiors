import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css',
})
export class ProjectGalleryComponent {
  isOpenDialog = false;
  selectedImage: string | null = null;

  projectImages: string[] = [
    './past-projects/project_1-1.jpg',
    './past-projects/project_1-2.jpg',
    './past-projects/project_1-3.jpg',
    './past-projects/project_2-1.jpg',
    './past-projects/project_2-2.jpg',
    './past-projects/project_2-3.jpg',
    './past-projects/project_2-4.jpg',
    './past-projects/project_3-1.jpg',
    './past-projects/project_3-2.jpg',
    './past-projects/project_3-3.jpg',
    './past-projects/project_3-4.jpg',
    './past-projects/project_3-5.jpg',
    './past-projects/project_3-6.jpg',
    './past-projects/project_3-7.jpg',
    './past-projects/project_3-8.jpg',
    './past-projects/project_3-9.jpg',
    './past-projects/project_3-10.jpg',
    './past-projects/project_3-11.jpg',
    './past-projects/project_3-12.jpg',
    './past-projects/project_3-13.jpg',
    './past-projects/project_3-14.jpg',
    './past-projects/project_4-1.jpg',
    './past-projects/project_4-2.jpg',
    './past-projects/project_4-3.jpg',
    './past-projects/project_5-1.jpg',
    './past-projects/project_5-2.jpg',
    './past-projects/project_5-3.jpg',
    './past-projects/project_5-4.jpg',
    './past-projects/project_5-5.jpg',
    './past-projects/project_5-6.jpg',
    './past-projects/project_5-7.jpg',
    './past-projects/project_5-8.jpg',
    './past-projects/project_5-9.jpg',
    './past-projects/project_5-10.jpg',
    './past-projects/project_5-11.jpg',
    './past-projects/project_5-12.jpg',
    './past-projects/project_5-13.jpg',
  ];

  openDialog(imageUrl: string) {
    this.isOpenDialog = true;
    this.selectedImage = imageUrl;
  }

  closeDialog(): void {
    this.isOpenDialog = false;
    this.selectedImage = null;
  }
}
