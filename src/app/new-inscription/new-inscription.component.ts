import { Component, OnInit } from '@angular/core';
import { Inscription } from '../classes/inscription';
import { InscriptionServiceService } from '../services/inscription-service.service';


@Component({
  selector: 'app-new-inscription',
  templateUrl: './new-inscription.component.html',
  styleUrls: ['./new-inscription.component.scss']
})
export class NewInscriptionComponent  implements OnInit {


  inscription: Inscription  = new Inscription();
  submitted = false;

  constructor(private inscriptionService: InscriptionServiceService) { }




  newInscription(): void {
    this.submitted = false;
    this.inscription = new Inscription();
  }

  save() {
    this.inscriptionService.createInscription(this.inscription)
      .subscribe(data => console.log(data), error => console.log(error));
    this.inscription = new Inscription();
  }

  ngOnInit() {
      
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
