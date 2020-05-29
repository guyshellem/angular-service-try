import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Movie } from './movie/movie.component'

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  private configUrl = "http://localhost:32000/apiv1/movies/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.configUrl, this.httpOptions)
    .pipe(
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  public getMovie(movieName: String): Observable<Movie> {
    return this.http.get<Movie>(this.configUrl + movieName, this.httpOptions)
    .pipe(
        catchError(this.handleError<Movie>('getMovie', {}))
      );
  }

  public postMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.configUrl, movie, this.httpOptions)
    .pipe(
        catchError(this.handleError<Movie>('addMovie', {}))
      );
  }

  public deleteMovie(movieName: String): Observable<Object> {
    return this.http.delete(this.configUrl + movieName, this.httpOptions);
  }

  public putMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.configUrl + movie.name, movie, this.httpOptions)
    .pipe(
        catchError(this.handleError<Movie>('getMovie', {}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
  }}
}