import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.html',
  styleUrls: ['./dialog-box.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogBox {
  @Output() closeModal = new EventEmitter<void>();
  @Input() isOpen = false;

  closeDialog() {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
