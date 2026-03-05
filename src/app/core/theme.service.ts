import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Signal to hold the current theme state. Default to dark mode.
  public isDarkMode = signal<boolean>(true);

  constructor() {
    this.initTheme();
    // Use an effect to automatically sync the DOM and localStorage whenever the signal changes
    effect(() => {
      this.updateTheme(this.isDarkMode());
    });
  }

  private initTheme(): void {
    // Check local storage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      // No saved preference → default to dark mode
      this.isDarkMode.set(true);
    }
  }

  public toggleTheme(): void {
    this.isDarkMode.update((current) => !current);
  }

  private updateTheme(isDark: boolean): void {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
