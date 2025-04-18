import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-who-are-we',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-are-we.component.html',
  styleUrl: './who-are-we.component.css',
})
export class WhoAreWeComponent implements OnInit {
  loading = true;

  ngOnInit() {
    const img = new Image();
    img.src = 'assets/soheba_logo.png';
    img.onload = () => {
      this.loading = false;
    };
  }
}
