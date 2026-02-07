import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
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
  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLElement>;

  activeIndex = 0;
  isMobile = false;
  autoScrollInterval: any;

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
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 1024;
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextCard(true);
    }, 5000);
  }

  resetAutoScroll() {
    clearInterval(this.autoScrollInterval);
    this.startAutoScroll();
  }

  prevCard(manual = false) {
    this.activeIndex =
      this.activeIndex === 0 ? this.cards.length - 1 : this.activeIndex - 1;

    this.scrollToActive();
    if (!manual) this.resetAutoScroll();
  }

  nextCard(manual = false) {
    this.activeIndex =
      this.activeIndex === this.cards.length - 1 ? 0 : this.activeIndex + 1;

    this.scrollToActive();
    if (!manual) this.resetAutoScroll();
  }

  scrollToActive() {
    if (!this.carousel) return;

    const container = this.carousel.nativeElement;
    const cardWidth = container.clientWidth;

    container.scrollTo({
      left: this.activeIndex * cardWidth,
      behavior: 'smooth',
    });
  }

  onScroll(container: HTMLElement) {
    const cardWidth = container.clientWidth;
    const index = Math.round(container.scrollLeft / cardWidth);

    if (index !== this.activeIndex) {
      this.activeIndex = index;
      this.resetAutoScroll();
    }
  }
}