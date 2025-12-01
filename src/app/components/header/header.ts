import { Component, EventEmitter, Output } from '@angular/core';
import { DialogBox } from '../dialog-box/dialog-box';

@Component({
  selector: 'app-header',
  imports: [DialogBox],
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
