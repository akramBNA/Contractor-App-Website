import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-who-are-we',
  imports: [CommonModule],
  templateUrl: './who-are-we.component.html',
  styleUrl: './who-are-we.component.css',
})
export class WhoAreWeComponent {
  loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Simulates a 2s data fetch
  }
}
