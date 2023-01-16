import { Component, OnInit } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api-testing';

  data:any[] = [];
  //datasource = new
  pokemons = [];

  constructor(private pokedex:PokedexService){}

  ngOnInit():void{
    this.getPokemons()
  }

  getPokemons(){

    let pokemonData;

    for(let i = 1; i < 150; i++){

      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData)
          console.log(res);
        },
        err => {
  
        }
      )

    }
    
  }
    

}
