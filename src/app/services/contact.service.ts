import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Injectable } from '@angular/core';
import { GetInTouchForm } from '../interfaces/get-in-touch-form';
import { JobApplication } from '../interfaces/job-application';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private PUBLIC_KEY = 't-tR-zJp4NsNumJ6X';
  private TEMPLATE_ID = 'template_xblk3bj';//contact-form
  private SERVICE_ID = 'service_4be0y32';

  private TEMPLATE_ID_Job = 'template_550ingz';//job-form

  sendEmail(templateParams: GetInTouchForm): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    );
  }

  sendEmailJobApplication(templateParams: JobApplication ): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID_Job,
      templateParams,
      this.PUBLIC_KEY
    )
  }
}
