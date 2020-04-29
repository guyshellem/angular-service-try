import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  configUrl = './assets/config.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getConfig() {
    return this.http.get(this.configUrl, this.httpOptions);
  }

}