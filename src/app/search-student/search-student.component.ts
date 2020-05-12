import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { StudentServiceService } from '../services/student-service.service';
 
@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent  implements OnInit {
 
  dni: number;
  students: Student[];
 
  constructor(private dataService: StudentServiceService) { }
 
  ngOnInit() {
    this.dni = 0;
  }
 
  private searchStudents() {
    this.dataService.getStudentsByDni(this.dni)
      .subscribe(students => this.students = students);
  }
 
  onSubmit() {
    this.searchStudents();
  }
}