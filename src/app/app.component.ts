import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet as RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomePageComponent, MovieDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
}
