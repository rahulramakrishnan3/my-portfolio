import { Component } from '@angular/core';
import { list } from 'postcss';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  cardDetails = [
    {
      title: 'What I can do',
      icon: 'svgs/what_i_can_do.svg',
      description: `I am proficient in front-end development using Angular. I create responsive and user-friendly web applications that provide seamless user experiences across devices.`,
      list: ['UI/UX', 'Web Development', 'Mobile Development', 'Api Integration'],
      id: 1,
    },
    {
      title: 'Tools I use',
      icon: 'svgs/buffer-color-svgrepo-com.svg',
      description: `I have a strong foundation in HTML, CSS, and JavaScript, along with experience in TypeScript. I am skilled in using modern frameworks and libraries to build dynamic and interactive web applications.`,
      list: ['Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Angular Material', 'Git'],
      id: 2,
    },
    {
      title: 'Development Practices',
      icon: 'svgs/color-palette-svgrepo-com.svg',
      description: `I follow best practices in web development, including version control with Git, agile methodologies. I prioritize code quality, performance optimization, and user-centric design in my workflow.`,
      list: ['Agile', 'Responsive Design', 'Performance Optimization'],
      id: 3,
    },
  ];
}
