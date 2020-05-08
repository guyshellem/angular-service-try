import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Movie } from './movie/movie.component'

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  private configUrl = 'https://www.mocky.io/v2/5eac7f29330000bf0cdfe4e0';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.configUrl, this.httpOptions)
    .pipe(
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  public postMovie(movie: Movie): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.configUrl, movie, this.httpOptions)
    .pipe(
        catchError(this.handleError<Movie[]>('addMovie', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
  }}
}