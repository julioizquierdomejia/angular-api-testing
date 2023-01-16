import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-testing';

  public pokemons: Array<any> = [];

  constructor(private pokedex:PokedexService){

    this.pokedex.getPokemon().subscribe((res:any) => {
      console.log(res);
      this.pokemons = res;
    })




    /*
    for(let i = 1; i <= 150; i++){

      this.pokedex.getPokemon(String(i)).subscribe((res:any) => {
        console.log(res);
        this.pokemons = res;
      })


    }
    */
    
  }

}
