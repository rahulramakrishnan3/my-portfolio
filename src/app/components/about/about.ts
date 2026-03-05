import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private portfolioService = inject(PortfolioService);
  portfolioData = this.portfolioService.portfolioData;
}
