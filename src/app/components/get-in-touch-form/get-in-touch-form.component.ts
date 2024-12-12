import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-get-in-touch-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-in-touch-form.component.html',
  styleUrl: './get-in-touch-form.component.css',
})
export class GetInTouchFormComponent {
  emailService = inject(ContactService);

  contactData = {
    firstName: '',
    lastName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    message: '',
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  onSubmit(form: NgForm) {
    //Is loading for future loading spin animation while form result is sending on email
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const templateParams = {
      firstName: this.contactData.firstName,
      lastName: this.contactData.lastName,
      company: this.contactData.company,
      position: this.contactData.position,
      email: this.contactData.email,
      phone: this.contactData.phone,
      message: this.contactData.message,
    };

    this.emailService
      .sendEmail(templateParams)
      .then(response => {
        this.isLoading = false;
        this.successMessage = 'Message sent successfully!';
        // console.log('SUCCESS!', response.status, response.text);
        alert(this.successMessage);
        form.reset();
      })
      .catch(error => {
        this.isLoading = false;
        this.errorMessage = 'Failed to send message. Please try again.';
        console.error('FAILED...', error);
        alert(this.errorMessage);
      });
  }
}
