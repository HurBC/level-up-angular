import { Component } from '@angular/core';
import { HomeService } from '../../services/home-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected cards: {
    id: number;
    title: string;
    desc: string;
  }[] = [];

  constructor(private homeService: HomeService) {
    this.cards = this.homeService.getCards();
  }
}
