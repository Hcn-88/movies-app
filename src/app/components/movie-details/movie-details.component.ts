import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Film } from '../../../../Film';
import { MovieService } from '../../services/movie.service';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FlexLayoutModule, FlexLayoutServerModule, MatIconModule, MatButtonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, AfterViewInit {

  @ViewChildren('span') spans: QueryList<ElementRef>;
  screenWidth: number;

  movieDetails: Film;
  safeUrl: SafeResourceUrl;
  youtubeUrl: string;

  constructor(private sanitizer:DomSanitizer,
              private data:MovieService, 
              private storage: StorageService,
              private renderer: Renderer2) {
                this.screenWidth = window.innerWidth;
              };
  
  ngOnInit(): void {
    if (this.data && this.data.selectedMovie) {
      this.movieDetails = this.data.selectedMovie;
      if (this.movieDetails.trailerUrl) {
        this.youtubeUrl = this.movieDetails.trailerUrl;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
      } else {
        console.log('trailerUrl is undefined in selectedMovie');
      };
    } else {
      console.log('selectedMovie is undefined in data');
    };
  };

  ngAfterViewInit(): void {
    this.removeSpans();
  };

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    // To update the screenWidth property on window resize
    this.screenWidth = window.innerWidth;
    this.removeSpans();
  }

  removeSpans() {
    this.spans.forEach((span) => {
      if (this.screenWidth <= 960) {
        this.renderer.setStyle(span.nativeElement, 'display', 'none');
      } else {
        this.renderer.removeStyle(span.nativeElement, 'display');
      };
    });
  };

  addMovie(movie: Film) {
    this.storage.addToWatchlist(movie);
  };

  removeMovie(id: number) {
    this.storage.removeFromWatchlist(id)
  };

  isInWatchlist(movie: Film): boolean {
    return this.storage.checkMovieExists(movie);
  };

};