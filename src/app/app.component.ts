import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProjectsComponent } from '../components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'contactor-app';
}
