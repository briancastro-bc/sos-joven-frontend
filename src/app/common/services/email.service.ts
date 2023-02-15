import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailInterface, EmailTemplate } from '../interfaces/email.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService<T> {
  private http:HttpClient = inject(HttpClient)

  data:EmailInterface = {
    service_id: 'service_cqvej3p',
    template_id: 'template_p172lru',
    user_id: '2vb1TBKXVqPJXYMGn',
    template_params: {}
  };

  send(formData:EmailTemplate) : Observable<T>  {
    this.data.template_params = formData 
    return this.http.post<T>('https://api.emailjs.com/api/v1.0/email/send', this.data)
  }
}
