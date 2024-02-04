import { Injectable } from '@angular/core';
import { Film } from '../../../Film';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  watchlistMovies:Film[] = this.getLocalStorage();

  constructor() {};

  setLocalStorage(key: string, value: Film[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getLocalStorage(): Film[] {
    // To prevent errors when running the application in environments where localStorage is not available
    if (typeof localStorage !== 'undefined') {
      const localStorageData = localStorage.getItem('watchlist');
      return localStorageData ? JSON.parse(localStorageData) : [];
    } else {
      console.error('localStorage is not available.');
      return [];
    };
  };

  addToWatchlist(movie: Film): void {
    if (movie && movie.id) {
      const existingMovieIndex = this.watchlistMovies.findIndex(m => m && m.id === movie.id);
      if (existingMovieIndex !== -1) {
          this.watchlistMovies[existingMovieIndex] = movie;
      } else {
          this.watchlistMovies.push(movie);
      };
      this.setLocalStorage('watchlist', this.watchlistMovies);
    } else {
        console.error('Invalid movie object or missing id property.');
    };
  };

  removeFromWatchlist(id: number) {
    this.watchlistMovies = this.watchlistMovies.filter(movie => movie && movie.id !== id);
    this.setLocalStorage('watchlist', this.watchlistMovies);
  };
  
  checkMovieExists(movie: Film): boolean {
    return this.watchlistMovies.some((m) => m && m.id === movie?.id);
  };

};