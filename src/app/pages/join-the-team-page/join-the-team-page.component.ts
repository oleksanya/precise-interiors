/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-join-the-team-page',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './join-the-team-page.component.html',
  styleUrl: './join-the-team-page.component.css'
})
export class JoinTheTeamPageComponent {
  applicationContactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const templateParams = {
        firstName: this.applicationContactData.firstName,
        lastName: this.applicationContactData.lastName,
        email: this.applicationContactData.email,
        phone: this.applicationContactData.phone,
        message: this.applicationContactData.message,
      };

      console.log('Form Submitted!', templateParams);
      alert('Your application has been submitted!');
      form.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }

}
