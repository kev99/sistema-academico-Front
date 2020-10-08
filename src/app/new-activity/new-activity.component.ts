import { Component, OnInit } from '@angular/core';
 
import { Activity } from '../classes/activity';
import { ActivityServiceService } from '../services/activity-service.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})

export class NewActivityComponent   implements OnInit {
 
  activity: Activity = new Activity();
  submitted = false;
 
  constructor(private activityService: ActivityServiceService) { }
 
  ngOnInit() {
  }
 
  newActivity(): void {
    this.submitted = false;
    this.activity = new Activity();
  }
 
  save() {
    this.activityService.createActivity(this.activity)
      .subscribe(data => console.log(data), error => console.log(error));
    this.activity = new Activity();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}