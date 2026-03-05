import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DialogBox } from '../dialog-box/dialog-box';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { PortfolioService } from '../../core/portfolio.service';

import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  imports: [DialogBox, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private portfolioService = inject(PortfolioService);
  public themeService = inject(ThemeService);
  
  portfolioData = this.portfolioService.portfolioData;
  isDarkMode = this.themeService.isDarkMode;

  @Output() openModal = new EventEmitter<boolean>();
  isModalOpen = false;

  openDialog() {
    this.isModalOpen = true;
    this.openModal.emit();
  }
  closeDialogModal() {
    this.isModalOpen = false;
  }
}
