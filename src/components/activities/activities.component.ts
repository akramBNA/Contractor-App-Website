import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLElement>;

  isMobile = false;
  autoScrollTimer: any;

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

  loopedCards: any[] = [];
  activeIndex = 1;

  ngOnInit() {
    this.checkScreenSize();
    this.buildLoopedCards();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.jumpToIndex(this.activeIndex);
      this.startAutoScroll();
    });
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollTimer);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 1024;
  }

  buildLoopedCards() {
    const first = this.cards[0];
    const last = this.cards[this.cards.length - 1];

    this.loopedCards = [last, ...this.cards, first];
  }

  startAutoScroll() {
    this.autoScrollTimer = setInterval(() => {
      this.next();
    }, 5000);
  }

  resetAutoScroll() {
    clearInterval(this.autoScrollTimer);
    this.startAutoScroll();
  }

  next(manual = false) {
    this.activeIndex++;
    this.scrollToIndex(true);
    if (!manual) this.resetAutoScroll();
  }

  prev(manual = false) {
    this.activeIndex--;
    this.scrollToIndex(true);
    if (!manual) this.resetAutoScroll();
  }

  scrollToIndex(animated: boolean) {
    const container = this.carousel.nativeElement;
    const width = container.clientWidth;

    container.scrollTo({
      left: this.activeIndex * width,
      behavior: animated ? 'smooth' : 'auto',
    });
  }

  jumpToIndex(index: number) {
    const container = this.carousel.nativeElement;
    const width = container.clientWidth;

    container.scrollTo({
      left: index * width,
      behavior: 'auto',
    });
  }

  onScroll(container: HTMLElement) {
    const width = container.clientWidth;
    const index = Math.round(container.scrollLeft / width);

    this.activeIndex = index;

    if (index === 0) {
      this.activeIndex = this.cards.length;
      this.jumpToIndex(this.activeIndex);
    }

    if (index === this.loopedCards.length - 1) {
      this.activeIndex = 1;
      this.jumpToIndex(this.activeIndex);
    }

    this.resetAutoScroll();
  }
}
