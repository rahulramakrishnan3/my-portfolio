import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/portfolio.service';

@Component({
  selector: 'app-built-with',
  imports: [RouterLink],
  templateUrl: './built-with.html',
  styleUrl: './built-with.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiltWith {
  private portfolioService = inject(PortfolioService);
  portfolioData = this.portfolioService.portfolioData;
}
