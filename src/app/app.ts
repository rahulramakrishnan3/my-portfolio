import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarNav } from './components/sidebar-nav/sidebar-nav';
import { InstallBanner } from './components/install-banner/install-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarNav, InstallBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
