import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailTemplate } from '@app/common/interfaces/email.interface';
import { EmailService } from '@app/common/services/email.service';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home.desktop.component.html',
  styleUrls: ['./home.desktop.component.scss']
})
export class HomeDesktopComponent {
  public formMessage = ''

  constructor(
    private readonly emailService: EmailService
  ) {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    phone: new FormControl('', Validators.compose([Validators.required])),
    message: new FormControl('', Validators.compose([Validators.required]))
  })

  sendEmail(value: EmailTemplate): void {
    this.emailService.send(value).subscribe((res) => {
      this.formMessage = 'Correo enviado exitosamente';
    });
  }
}
