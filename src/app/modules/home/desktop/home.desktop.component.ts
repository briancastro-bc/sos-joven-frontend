import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailTemplate } from '@app/common/interfaces/email.interface';
import { EmailService } from '@app/common/services/email.service';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home.desktop.component.html',
  styleUrls: ['./home.desktop.component.scss']
})
export class HomeDesktopComponent<T> {
  email:EmailService<T> = inject(EmailService)
  
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl('')
  })

  sendEmail(value: EmailTemplate) : void {    
    this.email.send(value).subscribe((res) => console.log(res)) 
  } 
}
