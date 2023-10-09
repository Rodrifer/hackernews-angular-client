import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story } from 'src/app/interfaces/story';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="points">
        {{ story.score }}
      </div>
      <div class="content">
        {{ story.title }}
        {{ story.url }}
        {{ story.by }}
      </div>
    </div>
  `,
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
  @Input() story!: Story;
}
