import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [
    new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
    new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
    new Personne(3, 'Fayache', 'Said', 'student', '                 ', 123456, 22),
  ];
  constructor() { }
  getPersonnes()
  {
    return this.personnes;
  }
  getPersonne(id: number): Personne
  {
    return this.personnes.filter(p => p.id === id)[0];
  }
}
