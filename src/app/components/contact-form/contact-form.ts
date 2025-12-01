import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm implements OnInit {
  myForm: any = FormGroup;

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
    console.log('Form submitted', this.myForm.value);
  }
}
