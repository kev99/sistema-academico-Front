import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Activity } from '../classes/activity';
import { ActivityServiceService } from '../services/activity-service.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent  implements OnInit {
 
  activities: Observable<Activity[]>;
 
  constructor(private activityService: ActivityServiceService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 

 
  reloadData() {
    this.activities = this.activityService.getActivitiesList();
  }
}