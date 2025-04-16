import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WhoAreWeComponent } from '../who-are-we/who-are-we.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-component',
  imports: [NavbarComponent, WhoAreWeComponent, FooterComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {

}
