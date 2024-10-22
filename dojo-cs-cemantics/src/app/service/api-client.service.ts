import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseWord} from "../model/responseWord.model";
import {GuessWord} from "../model/guessWord.model";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private httpClient = inject(HttpClient);

  public getSimilarity(guess: GuessWord): Observable<ResponseWord>{
    return this.httpClient.get<ResponseWord>(`https://nonouille-devdojo2-12.deno.dev/?word=${guess.value}`)
  }

  public getPokemonValue(guess: GuessWord): Observable<ResponseWord>{
    return this.httpClient.get<ResponseWord>(`https://pokeapi.co/api/v2/pokemon/${guess.value}`)
  }
}
