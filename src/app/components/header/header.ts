import { Component, EventEmitter, Output } from '@angular/core';
import { DialogBox } from '../dialog-box/dialog-box';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [DialogBox, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
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
