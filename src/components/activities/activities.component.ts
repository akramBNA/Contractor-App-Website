import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activeIndex = 0;

  cards = [
    {
      title: 'Travaux Publiques',
      image: 'assets/constructions.png',
      description: "Grands travaux d'infrastructure, routes, ponts et plus encore."
    },
    {
      title: 'Transport Pétroliers',
      image: 'assets/Truck_tanker.png',
      description: 'Solutions de transport sûres pour les produits pétroliers.'
    },
    {
      title: 'Carrières',
      image: 'assets/quarry.png',
      description: 'Extraction et traitement des matériaux de construction.'
    }
  ];

  prevCard() {
    this.activeIndex = (this.activeIndex === 0) ? this.cards.length - 1 : this.activeIndex - 1;
  }

  nextCard() {
    this.activeIndex = (this.activeIndex === this.cards.length - 1) ? 0 : this.activeIndex + 1;
  }
}
