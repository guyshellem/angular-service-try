import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

export interface Movie {
  name? :string;
  genre? :string;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:  [ MovieService ]
})
export class MovieComponent implements OnInit {

  movies: Movie[];
  movieOnDisplay: Movie;

  constructor(private requests: MovieService) {}

  ngOnInit() {
    //this.showMovies();
    this.movies = [];
  }

  showMovies() {
    this.requests.getMovies().subscribe(movies => this.movies = movies['movies']);
  }

  //TODO: moves to a new view
  showMovie(name: string) {
    this.requests.getMovie(name).subscribe(res => this.movieOnDisplay = res['movie']);
  }

  deleteMovie(name: string) {
    this.requests.deleteMovie(name).subscribe(res => this.showMovies());
  }

}