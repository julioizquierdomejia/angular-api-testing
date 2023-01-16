import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  //urlBase="https://pokeapi.co/api/v2/pokemon/";
  urlBase= "https://jsonplaceholder.typicode.com/albums";

  constructor(private http:HttpClient) { 
    console.log('Pokedex')
  }

  getPokemon(){
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json');

    //return this.http.get<any>(`${this.urlBase}${index}`, {headers:heades});
    return this.http.get(this.urlBase);
  }
}
