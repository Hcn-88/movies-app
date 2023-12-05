import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

import { Film } from '../../../../Film';
import { MovieServiceService } from '../../services/movie-service.service';
import { StorageServiceService } from './../../services/storage-service.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  movieData:Film[] = [];

  constructor(private data:MovieServiceService, 
              private storage:StorageServiceService) {
    this.data.movies.map((movie) => {
      this.movieData.push(movie)
    })
  }
  
  ngOnInit(): void {}
  
  getMovieId(id:number) {
    this.data.getMovieDetails(id);
  }
  
  addMovie(movie: Film) {
    this.storage.addToWatchlist(movie);
  }

  removeMovie(movieTitle: string) {
    this.storage.removeFromWatchlist(movieTitle)
  }

  isInWatchlist(movie: Film): boolean {
    return this.storage.checkMovieExists(movie);
  }

  sortByTitle(movie1: Film, movie2: Film): number {
    return movie1.title.localeCompare(movie2.title);
  }

  sortByReleaseDate(movie1: Film, movie2: Film): number {
      const releaseDate1 = new Date(movie1.releaseDate);
      const releaseYear1 = releaseDate1.getFullYear();
      const releaseDate2 = new Date(movie2.releaseDate);
      const releaseYear2 = releaseDate2.getFullYear();
      return releaseYear1 - releaseYear2;
  }

  sortTitleOnClick() {
    this.movieData.sort(this.sortByTitle);
  }

  sortReleaseYearOnClick() {
    this.movieData.sort(this.sortByReleaseDate);
  }

}
