import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIconModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {

}
