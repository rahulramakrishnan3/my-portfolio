import { Component, EventEmitter, Output, ChangeDetectionStrategy, Input, inject } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { PortfolioService } from '../../core/portfolio.service';
import { LanguageService } from '../../core/language.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.html',
  styleUrls: ['./dialog-box.scss'],
  imports: [RouterLinkActive, RouterLinkWithHref],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogBox {
  @Output() closeModal = new EventEmitter<void>();
  @Input() isOpen = false;

  private portfolioService = inject(PortfolioService);
  public languageService = inject(LanguageService);
  portfolioData = this.portfolioService.portfolioData;

  closeDialog() {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
