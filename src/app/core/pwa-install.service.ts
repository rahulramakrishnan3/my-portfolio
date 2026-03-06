import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// The browser provides this event but it's not in the standard TypeScript lib yet
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISSED_KEY = 'pwa-install-dismissed';

@Injectable({
  providedIn: 'root',
})
export class PwaInstallService {
  private platformId = inject(PLATFORM_ID);
  private deferredPrompt = signal<BeforeInstallPromptEvent | null>(null);

  /** True when the browser's install criteria are met and user hasn't dismissed */
  readonly canInstall = computed(
    () => this.deferredPrompt() !== null && !this.wasDismissed()
  );

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt.set(e as BeforeInstallPromptEvent);
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt.set(null);
    });
  }

  async install(): Promise<void> {
    const prompt = this.deferredPrompt();
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') {
      this.deferredPrompt.set(null);
    }
  }

  dismiss(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(DISMISSED_KEY, '1');
    }
    this.deferredPrompt.set(null);
  }

  private wasDismissed(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return localStorage.getItem(DISMISSED_KEY) === '1';
  }
}
