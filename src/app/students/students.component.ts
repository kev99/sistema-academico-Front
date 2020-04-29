import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Student } from '../classes/student';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
 
  students: Observable<Student[]>;
 
  constructor(private studentService: StudentServiceService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  deleteCustomers() {
    this.studentService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.students = this.studentService.getCustomersList();
  }
}