import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../core/portfolio.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private portfolioService = inject(PortfolioService);
  
  // Expose the read-only signal to the template
  portfolioData = this.portfolioService.portfolioData;

  isPopoverOpen = signal(false);

  togglePopover(): void {
    this.isPopoverOpen = signal(!this.isPopoverOpen());
  }
}
