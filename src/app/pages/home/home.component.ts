import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnService } from '../../services/hn.service';
import { Story } from '../../interfaces/story';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { StoryComponent } from '../../components/story/story.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <mat-toolbar>
      <span>Hacker News</span>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened>
        <mat-list>
          <mat-list-item>Top Stories</mat-list-item>
          <mat-divider></mat-divider>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content
        ><div>
          <app-story
            [story]="story"
            *ngFor="let story of topStories"
          ></app-story></div
      ></mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    StoryComponent,
  ],
})
export class HomeComponent {
  topStoriesIDs: number[] = [];
  topStories: Story[] = [];
  hnService: HnService = inject(HnService);

  constructor() {
    this.hnService.getTopStories().then((items) => {
      this.topStoriesIDs = items.slice(0, 10);
      this.topStoriesIDs.map((item) =>
        this.hnService.getStory(item).then((story) => {
          this.topStories.push(story);
        })
      );
    });
  }
}
