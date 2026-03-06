import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { LanguageService } from './language.service';

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    tagline: string;
    resumeUrl?: string;
    profileImage: string;
    contactEmail: string;
    greeting: string;
    availabilityBadge: string;
    floatingSkills: { label: string; highlighted: boolean }[];
  };
  socialLinks: { github: string; instagram: string; linkedin: string };
  navItems: { label: string; route: string; exact?: boolean }[];
  aboutCards: {
    id: number;
    title: string;
    icon: string;
    description: string;
    list: string[];
  }[];
  projects: { title: string; description: string; link: string; btnLabel: string }[];
  builtWith: {
    route: string;
    headline: string;
    subtitle: string;
    githubUrl: string;
    categories: {
      title: string;
      icon: string;
      items: { name: string; detail: string }[];
    }[];
  };
  ui: {
    nav: {
      resume: string;
      lightMode: string;
      darkMode: string;
      light: string;
      dark: string;
      more: string;
      language: string;
      languageSwitchLabel: string;
    };
    home: {
      downloadCv: string;
      contactMe: string;
      howIBuiltThis: string;
    };
    about: {
      headline: string;
      subheadline: string;
    };
    projects: {
      heading: string;
    };
    contact: {
      headline: string;
      subheadline: string;
      subheadline2: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      nameError: string;
      emailError: string;
      messageError: string;
      errorPrefix: string;
      successTitle: string;
      successMsg: string;
      errorTitle: string;
      errorMsg: string;
    };
    builtWith: {
      backToHome: string;
      openSourceBadge: string;
      viewSource: string;
      footer: string;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private http = inject(HttpClient);
  private languageService = inject(LanguageService);

  public portfolioData = signal<PortfolioData | undefined>(undefined);

  constructor() {
    // Re-fetches the correct locale file whenever the language signal changes.
    effect(() => {
      const lang = this.languageService.currentLang();
      this.loadData(lang);
    });
  }

  private loadData(lang: string): void {
    this.http.get<PortfolioData>(`data.${lang}.json`).subscribe({
      next: (data) => this.portfolioData.set(data),
      error: (err) => console.error('Failed to load portfolio data:', err),
    });
  }
}
