import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../core/portfolio.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private portfolioService = inject(PortfolioService);
  portfolioData = this.portfolioService.portfolioData;
}
