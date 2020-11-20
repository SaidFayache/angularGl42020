import { Injectable } from '@angular/core';
import {Personne} from '../../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnesEmbauchees: Personne[] = [];

  constructor() { }

  embaucherPersonne(personne: Personne)
  {
    this.personnesEmbauchees.push(personne);
  }
  getPersonnesEmbauchees(): Personne[]
  {
    return this.personnesEmbauchees;
  }
}
