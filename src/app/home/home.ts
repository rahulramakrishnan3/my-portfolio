import { Component } from '@angular/core';
import { ContactForm } from '../components/contact-form/contact-form';
import { About } from '../components/about/about';

@Component({
  selector: 'app-home',
  imports: [ContactForm, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  data = { title: 'home', name: 'Rahul KR', role: 'Software Developer' };
}
