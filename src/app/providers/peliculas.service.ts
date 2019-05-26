import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = 'deb8a2d3c555ac4629c4e6078fa56176';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  private urlImages: string = 'http://image.tmdb.org/t/p/w300';

  constructor( private http: HttpClient ) { }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?short_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url ).pipe(map( res => res));
  }

  buscarPelicula( texto: string ) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&short_by=popularity.desc&api_key${ this.apikey }&language=es`;

    return this.http.get( url ).pipe( map( res => res ));
  }

}
