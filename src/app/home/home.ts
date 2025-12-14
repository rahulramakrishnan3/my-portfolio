import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPopOver } from '../components/info-pop-over/info-pop-over';

@Component({
  selector: 'app-home',
  imports: [CommonModule, InfoPopOver],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  data = { title: 'home', name: 'Rahul KR', role: 'Software Developer' };

  isPopoverOpen = false;

  togglePopover(): void {
    this.isPopoverOpen = !this.isPopoverOpen;
  }
}
