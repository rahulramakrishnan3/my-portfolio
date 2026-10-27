import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ProjectCardData {
  title: string;
  description: string;
  link: string;
  btnLabel: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  @Input({ required: true }) data!: ProjectCardData;
  protected description = false;

  toggleDescription(): void {
    this.description = !this.description;
  }

  get summaryText(): string {
    const text = this.data?.description ?? '';
    if (this.description || text.length <= 110) {
      return text;
    }
    return `${text.slice(0, 110)}...`;
  }
}
