import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NAV_ITEMS } from '../../core/constants';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.html',
  styleUrls: ['./dialog-box.scss'],
  imports: [CommonModule, RouterLinkActive, RouterLinkWithHref],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogBox {
  @Output() closeModal = new EventEmitter<void>();
  @Input() isOpen = false;
  navItems = NAV_ITEMS;

  closeDialog() {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
