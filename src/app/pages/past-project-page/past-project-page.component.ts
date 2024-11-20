import { Component } from '@angular/core';
import { ProjectGalleryComponent } from "../../components/project-gallery/project-gallery.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-past-project-page',
  standalone: true,
  imports: [ProjectGalleryComponent, FooterComponent],
  templateUrl: './past-project-page.component.html',
  styleUrl: './past-project-page.component.css'
})
export class PastProjectPageComponent {

}
