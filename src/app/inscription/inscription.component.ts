import { Component, OnInit } from '@angular/core';
import { InscriptionServiceService } from '../services/inscription-service.service';
import { Inscription } from '../classes/inscription';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptions: Observable<Inscription[]>;


  constructor(private inscriptionService: InscriptionServiceService) { }



  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.inscriptions = this.inscriptionService.getInscriptionsList();
  }

}
