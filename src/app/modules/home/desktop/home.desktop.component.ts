import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailTemplate } from '@app/common/interfaces/email.interface';
import { EmailService } from '@app/common/services/email.service';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home.desktop.component.html',
  styleUrls: ['./home.desktop.component.scss']
})
export class HomeDesktopComponent<T> {
  private email: EmailService<T> = inject(EmailService)
  public formMessage = ''

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    phone: new FormControl('', Validators.compose([Validators.required])),
    message: new FormControl('', Validators.compose([Validators.required]))
  })

  sendEmail(value: EmailTemplate): void {
    this.email.send(value).subscribe((res) => {      
      this.formMessage = 'Correo enviado exitosamente'
    })

  }
}
