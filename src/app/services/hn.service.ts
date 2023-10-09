import { Injectable } from '@angular/core';
import { Story } from '../interfaces/story';

@Injectable({
  providedIn: 'root',
})
export class HnService {
  TOP_STORIES: string = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  SINGLE_STORY: string = 'https://hacker-news.firebaseio.com/v0/item/';

  constructor() {}

  async getTopStories(): Promise<number[]> {
    const data = await fetch(this.TOP_STORIES);
    return (await data.json()) ?? [];
  }

  async getStory(Id: number): Promise<Story> {
    const data = await fetch(this.SINGLE_STORY + Id + '.json');
    return (await data.json()) ?? {};
  }
}
