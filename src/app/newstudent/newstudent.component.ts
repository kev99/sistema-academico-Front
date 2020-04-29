import { Component, OnInit } from '@angular/core';
 
import { Student } from '../classes/student';
import { StudentServiceService } from '../services/student-service.service';


@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent  implements OnInit {
 
  student: Student = new Student();
  submitted = false;
 
  constructor(private studentService: StudentServiceService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.student = new Student();
  }
 
  save() {
    this.studentService.createCustomer(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}