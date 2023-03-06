import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';

import { environment } from '@environment/environment';
import { LoaderService } from '@shared/services';
import { EmailService } from '@common/services';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact.mobile.component.html',
  styleUrls: ['./contact.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactMobileComponent implements OnInit, OnDestroy {

  @ViewChild('captchaEl') captchaEl!: ReCaptcha2Component;

  formContact: FormGroup;

  readonly siteKey: string;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly emailService: EmailService,
    private readonly loaderService: LoaderService,
  ) {
    this.formContact = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
      message: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
    });

    this.siteKey = environment.recaptcha.siteKey
  }

  ngOnInit(): void {
    // Do something
  }

  send(): void {
    this.loaderService.show('progressbar');

    if (!this.formContact.valid) return;

    if (!this.formContact.value) return;

    const dataToSend = { ...this.formContact.value, };

    this.emailService.send(dataToSend)
      .pipe(first())
      .subscribe(_ => {
        this.clearContactForm();
        this.loaderService.hide()
      });
  }

  ngOnDestroy(): void {
    // Do something
  }

  get name(): UntypedFormControl {
    return this.formContact.get('name') as UntypedFormControl;
  }

  get email(): UntypedFormControl {
    return this.formContact.get('email') as UntypedFormControl;
  }

  get phone(): UntypedFormControl {
    return this.formContact.get('phone') as UntypedFormControl;
  }

  get message(): UntypedFormControl {
    return this.formContact.get('message') as UntypedFormControl;
  }

  get captcha(): UntypedFormControl {
    return this.formContact.get('captcha') as UntypedFormControl;
  }

  private clearContactForm(): void {
    this.formContact.clearValidators();
    this.formContact.clearAsyncValidators();

    this.formContact.reset();
    this.captchaEl.resetCaptcha();
  }

}
