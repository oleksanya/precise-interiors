import { Component } from '@angular/core';
import { ProjectHeaderComponent } from "../../components/project-header/project-header.component";
import { ProjectGalleryComponent } from "../../components/project-gallery/project-gallery.component";

@Component({
  selector: 'app-past-project-page',
  standalone: true,
  imports: [ProjectHeaderComponent, ProjectGalleryComponent],
  templateUrl: './past-project-page.component.html',
  styleUrl: './past-project-page.component.css'
})
export class PastProjectPageComponent {

}
