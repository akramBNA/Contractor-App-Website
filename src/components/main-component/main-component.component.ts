import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WhoAreWeComponent } from '../who-are-we/who-are-we.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { StatisticsComponent } from '../statistics/statistics.component';

import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles


@Component({
  selector: 'app-main-component',
  imports: [
    NavbarComponent,
    WhoAreWeComponent,
    FooterComponent,
    ContactUsComponent,
    StatisticsComponent
  ],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css',
})
export class MainComponentComponent {
  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Trigger animation only once
    });
  }
}
