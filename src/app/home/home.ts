import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { InfoPopOver } from '../components/info-pop-over/info-pop-over';
import { APP_CONSTANTS } from '../core/constants';

@Component({
  selector: 'app-home',
  imports: [CommonModule, InfoPopOver],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  data = { title: 'home', name: 'Rahul KR', role: 'Software Developer' };
  portfolio = APP_CONSTANTS;

  isPopoverOpen = signal(false);

  togglePopover(): void {
    this.isPopoverOpen = signal(!this.isPopoverOpen());
  }
}
