import { Component, OnInit } from '@angular/core';
import {Personne} from '../../../model/personne';
import {EmbaucheService} from '../../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }
  getPersonnesEmbauchees(): Personne[]
  {
    return this.embaucheService.getPersonnesEmbauchees();
  }
}
