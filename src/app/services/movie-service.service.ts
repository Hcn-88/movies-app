import { Injectable } from '@angular/core';
import { Film } from '../../../Film';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  movies = [
    {
      id: 1,
      imagePath: "../../assets/images/Tenet.png",
      title: "Tenet",
      description: "Armed with only one word, Tenet, and fighting   for the survival of the entire world, a protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      rating: "7.8",
      duration: "2h 30min",
      genre: "Action, Sci-Fi",
      releaseDate: "3 September 2020",
      trailerUrl: "https://www.youtube.com/embed/LdOM0x0XDMo",
    },
    {
      id: 2,
      imagePath: "../../assets/images/Spider-Man.png",
      title: "Spider-Man: Into the Spider-Verse",
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      rating: "8.4",
      duration: "1h 57min",
      genre: "Action, Animation, Adventure",
      releaseDate: "14 December 2018",
      trailerUrl: "https://www.youtube.com/embed/tg52up16eq0",
    },
    {
      id: 3,
      imagePath: "../../assets/images/Knives-Out.png",
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      rating: "7.9",
      duration: "2h 10min",
      genre: "Comedy, Crime, Drama",
      releaseDate: "27 November 2019",
      trailerUrl: "https://www.youtube.com/embed/qGqiHJTsRkQ",
    },
    {
      id: 4,
      imagePath: "../../assets/images/Guardians-of-The-Galaxy.png",
      title: "Guardians of the Galaxy",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      rating: "8.0",
      duration: "2h 1min",
      genre: "Action, Adventure, Comedy",
      releaseDate: "1 August 2014",
      trailerUrl: "https://www.youtube.com/embed/d96cjJhvlMA",
    },
    {
      id: 5,
      imagePath: "../../assets/images/Avengers.png",
      title: "Avengers: Age of Ultron",
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: "7.3",
      duration: "2h 21min",
      genre: "Action, Adventure, Sci-Fi",
      releaseDate: "1 May 2015",
      trailerUrl: "https://www.youtube.com/embed/tmeOjFno6Do",
    },
  ];

  selectedMovie: Film;

  getMovieDetails(movieId: number) {
    const movie = this.movies.find(movie => movie.id === movieId);
    this.selectedMovie = movie;
  }

  constructor() { }
}
