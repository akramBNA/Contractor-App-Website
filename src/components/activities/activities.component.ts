import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  autoScrollInterval: any;

  cards = [
    {
      title: 'Travaux Publiques',
      image: 'assets/constructions.png',
      description: "Grands travaux d'infrastructure, routes, ponts et plus encore.",
    },
    {
      title: 'Transport Pétroliers',
      image: 'assets/Truck_tanker.png',
      description: 'Solutions de transport sûres pour les produits pétroliers.',
    },
    {
      title: 'Carrières',
      image: 'assets/quarry.png',
      description: 'Extraction et traitement des matériaux de construction.',
    },
  ];

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval);
  }

  startAutoScroll() {
    clearInterval(this.autoScrollInterval);
    this.autoScrollInterval = setInterval(() => this.nextCard(), 5000);
  }

  prevCard() {
    this.activeIndex =
      this.activeIndex === 0 ? this.cards.length - 1 : this.activeIndex - 1;
    this.startAutoScroll();
  }

  nextCard() {
    this.activeIndex =
      this.activeIndex === this.cards.length - 1 ? 0 : this.activeIndex + 1;
  }

  goToCard(index: number) {
    this.activeIndex = index;
    this.startAutoScroll();
  }
}