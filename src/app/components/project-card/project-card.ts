import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  @Input() data: any;
  description = false;
  openDescription() {
    this.description = true;
  }
  closeDescription() {
    this.description = false;
  }
}
