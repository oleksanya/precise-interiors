import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Injectable } from '@angular/core';
import { GetInTouchForm } from '../interfaces/get-in-touch-form';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private PUBLIC_KEY = 't-tR-zJp4NsNumJ6X';
  private TEMPLATE_ID = 'template_xblk3bj';
  private SERVICE_ID = 'service_4be0y32';

  sendEmail(templateParams: GetInTouchForm): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    );
  }
}
