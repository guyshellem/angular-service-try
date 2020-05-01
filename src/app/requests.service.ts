import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  configUrl = '127.0.0.1:32000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Host': 'myapp.test' })
  };

  public getConfig() {
    return this.http.get(this.configUrl, this.httpOptions);
  }

}