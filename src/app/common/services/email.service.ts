import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailInterface, EmailTemplate } from '../interfaces/email.interface';
import { keysEmailjsEnviroment } from '@environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class EmailService<T> {
  private http: HttpClient = inject(HttpClient)

  data: EmailInterface = {
    service_id: keysEmailjsEnviroment.service_id,
    template_id: keysEmailjsEnviroment.template_id,
    user_id: keysEmailjsEnviroment.user_id,
    template_params: {}
  };

  send(formData: EmailTemplate): Observable<T> {
    this.data.template_params = formData
    return this.http.post<T>('https://api.emailjs.com/api/v1.0/email/send', this.data)
  }
}
