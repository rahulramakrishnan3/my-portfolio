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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl(''),
      message: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    console.log('Contact Form Component Initialized');
  }
  onSubmit() {
    console.log('Form submitted', this.myForm.value);
  }
}
