import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../models/message';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwillioService {
  private url = 'https://sms-twillio.herokuapp.com/';
  private httpOptions = {
    headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
  };
  constructor(private http: HttpClient) { }

  send(tell: string, msg: string): Observable<Message> {
    const body = `tell=${tell}&msg=${msg}`;
    return this.http.post<Message>(`${this.url}send`, body, this.httpOptions);
  }

  retrieve(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.url}retrieve`)
        .pipe(map(res => res.reverse().map(item => new Message(item))));
  }
}
