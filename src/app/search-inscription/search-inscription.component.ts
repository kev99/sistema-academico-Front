import { Component, OnInit } from '@angular/core';
import { InscriptionServiceService } from '../services/inscription-service.service';
import { Inscription } from '../classes/inscription';
import { Student } from '../classes/student';

@Component({
  selector: 'app-search-inscription',
  templateUrl: './search-inscription.component.html',
  styleUrls: ['./search-inscription.component.scss']
})
export class SearchInscriptionComponent implements OnInit {


  id_alum: number;
  inscriptions: Inscription[];
  students: Student[];

  constructor(private dataService: InscriptionServiceService) { }

  ngOnInit() {
    this.id_alum = 0;
  }

  private searchInscriptions() {
    this.dataService.getInscriptionsByStudentId(this.id_alum)
      .subscribe(inscriptions => this.inscriptions = inscriptions);
  }
 
  onSubmit() {
    this.searchInscriptions();
  }

}
