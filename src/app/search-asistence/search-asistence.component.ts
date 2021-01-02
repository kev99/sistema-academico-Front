import { Component, OnInit } from '@angular/core';
import { AsistenceServiceService } from '../services/asistence-service.service';
import { Asistence } from '../classes/asistence';
import { Student } from '../classes/student';

@Component({
  selector: 'app-search-asistence',
  templateUrl: './search-asistence.component.html',
  styleUrls: ['./search-asistence.component.scss']
})
export class SearchAsistenceComponent implements OnInit {
  id_alum: number;
  assistences: Asistence[];
  students: Student[];
  constructor(private dataservice: AsistenceServiceService) { }

  ngOnInit() {
    this.id_alum = 0;

  }
  private searchInscriptions() {
    this.dataservice.getAssistencesByStudentId(this.id_alum)
      .subscribe(assistences => this.assistences = assistences);
  }

  onSubmit() {
    this.searchInscriptions();
  }

}
