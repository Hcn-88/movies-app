import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet as RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ToggleModeComponent } from './components/toggle-mode/toggle-mode.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomePageComponent, MovieDetailsComponent, ToggleModeComponent, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
};
