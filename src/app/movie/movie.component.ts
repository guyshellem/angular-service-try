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

  mockInput: Movie = {
    name: "some movieeeeeeeeeee"
  }

  constructor(private requests: MovieService) {
    
  }

  ngOnInit() {
    //this.showMovies();
    this.movies = []
  }

  showMovies() {
    this.requests.getMovies().subscribe(movies => this.movies = movies['movies']);
  }

  addMovies(name: string) {
    this.requests.postMovie({ name: name } as Movie).subscribe(res => this.movies.push(res['movie']));
  }

}