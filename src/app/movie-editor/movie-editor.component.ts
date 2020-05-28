import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../movie.service'
import { Movie } from '../movie/movie.component'

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['../movie/movie.component.css'],
  providers:  [ MovieService ]
})
export class MovieEditorComponent {
  movieForm = new FormGroup({
    name: new FormControl('', Validators.required),
    genre: new FormControl('')
  });

  constructor(private requests: MovieService) {}

//TODO: validate form
  addMovies() {
    this.requests.postMovie(this.movieForm.value as Movie).subscribe();
  }


}