import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private cards = [
    { id: 1, title: 'Angular', desc: 'Framework cuático' },
    { id: 2, title: 'Signals', desc: 'Reactividad moderna' },
    { id: 3, title: 'Standalone', desc: 'El futuro' }
  ];

  getCards() {
    return this.cards;
  }
}
