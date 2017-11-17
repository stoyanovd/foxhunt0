import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http:Http) {

  }

  searchMovies(movieName) {
    const url = 'http://localhost:8100/flask';
    // const url = 'https://foxhunt-server.herokuapp.com/';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
