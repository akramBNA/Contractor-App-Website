import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WhoAreWeComponent } from '../who-are-we/who-are-we.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-main-component',
  imports: [NavbarComponent, WhoAreWeComponent, FooterComponent, ContactUsComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {

}
