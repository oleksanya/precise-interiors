/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactService } from '../../services/contact.service';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-join-the-team-page',
  standalone: true,
  imports: [FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './join-the-team-page.component.html',
  styleUrl: './join-the-team-page.component.css',
})
export class JoinTheTeamPageComponent {
  contactService = inject(ContactService);

  applicationContactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobMessage: '',
  };

  onSubmit(form: NgForm): void {
    const templateParams = {
      firstName: this.applicationContactData.firstName,
      lastName: this.applicationContactData.lastName,
      email: this.applicationContactData.email,
      phone: this.applicationContactData.phone,
      jobMessage: this.applicationContactData.jobMessage,
    };

    this.contactService.sendEmailJobApplication(templateParams);

    alert('Your application has been submitted!');
    form.reset();
  }
}
