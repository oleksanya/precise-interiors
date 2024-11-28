import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.css'
})
export class PrivacyPageComponent {

}
