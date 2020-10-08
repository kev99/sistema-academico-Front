import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../classes/activity';
 
@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.scss']
})
export class ActivitiesDetailsComponent  implements OnInit {
 
  @Input() activity: Activity;
 
  constructor() { }
 
  ngOnInit() {

  }
 

}