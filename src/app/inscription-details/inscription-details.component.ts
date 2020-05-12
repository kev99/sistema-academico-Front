import { Component, OnInit, Input } from '@angular/core';
import { InscriptionServiceService } from '../services/inscription-service.service';
import { InscriptionComponent } from '../inscription/inscription.component';
import { Inscription } from '../classes/inscription';

@Component({
  selector: 'app-inscription-details',
  templateUrl: './inscription-details.component.html',
  styleUrls: ['./inscription-details.component.scss']
})
export class InscriptionDetailsComponent implements OnInit {

  @Input() inscription: Inscription;

  constructor(private inscriptionService: InscriptionServiceService, private listComponent: InscriptionComponent) { }

  ngOnInit() {
  }

  deleteInscription() {
    this.inscriptionService.deleteInscription(this.inscription.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
