import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

export interface PortfolioData {
  profile: { name: string; role: string; tagline: string };
  socialLinks: { github: string; instagram: string; linkedin: string };
  navItems: { label: string; route: string; exact: boolean }[];
  aboutCards: {
    id: number;
    title: string;
    icon: string;
    description: string;
    list: string[];
  }[];
  projects: { title: string; description: string; link: string; btnLabel: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private http = inject(HttpClient);

  // Expose parsed JSON configurations as a readonly signal.
  // It begins as undefined and populates asynchronously on instantiation.
  public portfolioData = signal<PortfolioData | undefined>(undefined);

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<PortfolioData>('data.json').subscribe({
      next: (data) => {
        this.portfolioData.set(data);
      },
      error: (err) => {
        console.error('Failed to load portfolio dynamic configurations:', err);
      },
    });
  }
}
