import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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
  adultformview = false;

  constructor(private studentService: StudentServiceService) {
   }
 
  ngOnInit() {
  }
 
  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }
 
  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  public ageFromDateOfBirthday( dateOfBirthday: any): number {
    console.log(moment().diff(dateOfBirthday, 'years'));
    return moment().diff(dateOfBirthday, 'years');
  }

  openadultform() {
    let  studentage =  this.ageFromDateOfBirthday(this.student.fecha_nacimiento);
    if (studentage < 18) {
      this.adultformview=true;
    }  if (studentage > 18) {
        this.adultformview=false;
      }
  }
   
}