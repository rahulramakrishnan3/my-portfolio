import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type ContactFormGroup = FormGroup<{
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}>;

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm implements OnInit {
  myForm: ContactFormGroup;
  toast: boolean | undefined;
  isLoading = false;
  errorToast: boolean | undefined;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email, Validators.maxLength(50)],
      }),
      message: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(500)],
      }),
    });
  }

  ngOnInit(): void {
    // kept intentionally minimal; no console noise in production.
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const payload = this.myForm.getRawValue() as Record<string, unknown>;

    emailjs
      .send(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        payload,
        { publicKey: environment.emailJsPublicKey }
      )
      .then((response) => {
        this.isLoading = false;
        this.toast = response.status === 200;
        setTimeout(() => (this.toast = false), 5000);
        this.myForm.reset();
      })
      .catch((error) => {
        this.isLoading = false;
        console.error('EmailJS Error:', error);
        this.errorToast = true;
        setTimeout(() => (this.errorToast = false), 5000);
      });
  }
}
