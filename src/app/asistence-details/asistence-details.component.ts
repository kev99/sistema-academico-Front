import { Component, OnInit , Input } from '@angular/core';
import { AsistenceServiceService } from '../services/asistence-service.service';
import { Asistence } from '../classes/asistence';
import { AssistanceComponent } from '../assistance/assistance.component';

 @Component({
  selector: 'app-asistence-details',
  templateUrl: './asistence-details.component.html',
  styleUrls: ['./asistence-details.component.scss']
})
export class AsistenceDetailsComponent implements OnInit {
  @Input() assistence: Asistence;
  

  constructor(private assistenceservice :AsistenceServiceService, private listComponent : AssistanceComponent) { }

  ngOnInit() {
  }

  deleteAssistence() {
    this.assistenceservice.deleteAssistence(this.assistence.id_asistencia)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
