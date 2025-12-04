import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm implements OnInit {
  myForm: any = FormGroup;
  toast: boolean | undefined;
  isLoading: boolean | undefined;
  errorToast: boolean | undefined;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
    });
  }
  ngOnInit() {
    console.log('Contact Form Component Initialized');
  }
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    emailjs
      .send(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        { ...this.myForm.value },
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
