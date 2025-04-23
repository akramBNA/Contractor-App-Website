import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  activeIndex = 0;
  isMobile = false;

  cards = [
    {
      title: 'Travaux Publiques',
      image: 'assets/constructions.png',
      description:
        "Grands travaux d'infrastructure, routes, ponts et plus encore.",
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
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  prevCard() {
    this.activeIndex =
      this.activeIndex === 0 ? this.cards.length - 1 : this.activeIndex - 1;
  }

  nextCard() {
    this.activeIndex =
      this.activeIndex === this.cards.length - 1 ? 0 : this.activeIndex + 1;
  }

  onScroll(container: HTMLElement) {
    const scrollLeft = container.scrollLeft;

    const cardCount = this.cards.length;
    const cardWidth = container.scrollWidth / cardCount;
    const index = Math.round(scrollLeft / cardWidth);
        if (index !== this.activeIndex) {
      this.activeIndex = index;
    }
  }
}
