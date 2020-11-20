import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Personne } from '../../model/personne';
import {CvService} from '../../service/cv-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(
    private todoService: TodoService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
  }
  catchSelectedPersonne(forwardedPersonneId: number) {
    this.selectedPersonne = this.cvService.getPersonne(forwardedPersonneId);
    console.log(forwardedPersonneId);
    this.todoService.logger();
  }

}
