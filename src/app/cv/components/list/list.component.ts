import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import {CvService} from '../../service/cv-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes: Personne[] = [];
  @Output() forwardSelectedPersonneId = new EventEmitter();
  constructor( private cvService: CvService) {}
  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }
  forwardPersonneId(selectedPersonneId: number) {
    this.forwardSelectedPersonneId.emit(
      selectedPersonneId
    );
  }
}
