import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailTemplate } from '@app/common/interfaces/email.interface';
import { EmailService } from '@app/common/services/email.service';
import { environment } from '@environment/environment.prod';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home.desktop.component.html',
  styleUrls: ['./home.desktop.component.scss']
})
export class HomeDesktopComponent {
  public formMessage = ''
  public formContact: FormGroup
  public isLoading!: boolean
  public isSend: boolean = false
  public siteKey!: string;

  constructor(
    private readonly emailService: EmailService,
    private formBuilder: FormBuilder,
  ) {
    
    this.siteKey = environment.recaptcha.siteKey
    this.formContact = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
      message: ['', [Validators.required]],
      captcha: ['', Validators.required]
    })
  }

  sendEmail(value: EmailTemplate): void {
    this.isLoading = true
    this.formContact.valid ?
      this.emailService.send(value)
        .pipe(
          finalize(() => {
            this.isLoading = false
            this.isSend = true
          })
        )
        .subscribe()
      :
      null
  }
}
