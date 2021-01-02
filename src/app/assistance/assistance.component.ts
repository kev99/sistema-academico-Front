import { Component, OnInit } from '@angular/core';
import { AsistenceServiceService } from '../services/asistence-service.service';
import { Asistence } from '../classes/asistence';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {
  assistences: Observable<Asistence[]>;

  constructor(private assistenceservice : AsistenceServiceService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.assistences = this.assistenceservice.getAssistencesList();
  }
}
