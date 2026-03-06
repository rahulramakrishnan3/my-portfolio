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

  /** Returns Tailwind classes for each floating skill chip. */
  chipClass(index: number, highlighted: boolean): string {
    const base =
      'absolute px-3 py-1.5 rounded-full shadow-lg text-xs font-bold ' +
      'bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/20';
    const color = highlighted
      ? 'text-(--primary-color)'
      : 'text-gray-700 dark:text-gray-300';
    return `${base} ${color}`;
  }

  /** Returns inline position + animation styles for each floating skill chip. */
  chipStyle(index: number): string {
    const positions = [
      'top: -0.75rem; right: -0.5rem; animation: floatBob 3s ease-in-out infinite;',
      'bottom: 1.5rem; left: -0.5rem; animation: floatBob 4s ease-in-out infinite; animation-delay: 0.8s;',
      'top: 50%; right: 0; animation: floatBob 3.5s ease-in-out infinite; animation-delay: 0.4s;',
    ];
    return positions[index] ?? positions[0];
  }
}
