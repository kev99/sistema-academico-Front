import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { StudentServiceService } from '../services/student-service.service';
 
@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent  implements OnInit {
 
  id: number;
  students: Student[];
 
  constructor(private dataService: StudentServiceService) { }
 
  ngOnInit() {
    this.id = 0;
  }
 
  private searchCustomers() {
    this.dataService.getCustomersById(this.id)
      .subscribe(students => this.students = students);
  }
 
  onSubmit() {
    this.searchCustomers();
  }
}