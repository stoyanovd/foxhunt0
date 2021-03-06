import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../services/rest/movie-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  movies: Array<any>;

  constructor(public navCtrl: NavController, private movieService: MovieService) {

  }

  searchForMovie(event, key) {
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }

  // selectMovie(event, movie) {
  //   console.log(movie);
  //   this.navCtrl.push(InfoPage, {
  //     movie: movie
  //   });
  // }

}
