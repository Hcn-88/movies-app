import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { Film } from '../../../../Film';
import { MovieService } from '../../services/movie.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FlexLayoutModule, FlexLayoutServerModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movieData:Film[] = [];

  constructor(private data:MovieService, 
              private storage:StorageService) {};
  
  ngOnInit(): void {
    this.movieData = this.data.movies;
  };
  
  getMovieId(id:number) {
    this.data.getMovieDetails(id);
  };
  
  addMovie(movie: Film) {
    this.storage.addToWatchlist(movie);
  };

  removeMovie(id: number) {
    this.storage.removeFromWatchlist(id);
  };

  isInWatchlist(movie: Film): boolean {
    return this.storage.checkMovieExists(movie);
  };

  sortByTitle(movie1: Film, movie2: Film): number {
    return movie1.title.localeCompare(movie2.title);
  };

  sortByReleaseDate(movie1: Film, movie2: Film): number {
      const releaseDate1 = new Date(movie1.releaseDate);
      const releaseYear1 = releaseDate1.getFullYear();
      const releaseDate2 = new Date(movie2.releaseDate);
      const releaseYear2 = releaseDate2.getFullYear();
      return releaseYear1 - releaseYear2;
  };

  sortTitleOnClick() {
    this.movieData.sort(this.sortByTitle);
  };

  sortReleaseYearOnClick() {
    this.movieData.sort(this.sortByReleaseDate);
  };

};