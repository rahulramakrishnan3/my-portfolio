import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  cards = [
    {
      title: 'MentorED Mobile Application',
      description:
        'Front-End Developer specializing in Angular with strong expertise in HTML, CSS, JavaScript, TypeScript and Ionic framework. Skilled in designing and integrating RESTful APIs and proficient in version control using Git and GitHub. Experienced in leveraging RxJS, NPM, Angular CLI, and Angular Material to build scalable, interactive, and responsive web applications. Demonstrates a solid understanding of Object-Oriented JavaScript and modern frontend development practices. Committed to continuous learning, performance optimization, and delivering high-quality, user-centric solutions that enhance business outcomes.',
      link: 'https://elevate-shikshagraha.shikshalokam.org/',
      btnLabel: 'Shikshagraha',
    },
    {
      title: 'MentorED Portal',
      description:
        'Front-End Developer specializing in Angular with strong expertise in HTML, CSS, JavaScript, and TypeScript. Skilled in designing and integrating RESTful APIs and proficient in version control using Git and GitHub. Experienced in leveraging RxJS, NPM, Angular CLI, and Angular Material to build scalable, interactive, and responsive web applications. Demonstrates a solid understanding of Object-Oriented JavaScript and modern frontend development practices. Committed to continuous learning, performance optimization, and delivering high-quality, user-centric solutions that enhance business outcomes.',
      link: 'https://github.com/rahulramakrishnan3/mentorED-Portal',
      btnLabel: 'Github',
    },
    {
      title: 'My Portfolio',
      description: 'This portfolio is build using angular 20 and Tailwind css',
      link: 'https://github.com/rahulramakrishnan3/my-portfolio',
      btnLabel: 'Portfolio',
    },
  ];
}
