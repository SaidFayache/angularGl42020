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
    if (this.personnesEmbauchees.filter(p => p.id === personne.id)[0])
    {
      alert('Personne deja présente dans la liste');
    }
    else {
      this.personnesEmbauchees.push(personne);
    }
  }
  getPersonnesEmbauchees(): Personne[]
  {
    return this.personnesEmbauchees;
  }
}
