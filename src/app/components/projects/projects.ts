import { Component, inject } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private portfolioService = inject(PortfolioService);
  portfolioData = this.portfolioService.portfolioData;
}
