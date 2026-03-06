import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'ml';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly currentLang = signal<Language>('en');

  toggleLanguage(): void {
    this.currentLang.update((lang) => (lang === 'en' ? 'ml' : 'en'));
  }
}
