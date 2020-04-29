import { Component, OnInit, Input } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { Student } from '../classes/student';
import { StudentsComponent } from '../students/students.component';
 
 @Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
 
  @Input() student: Student;
 
  constructor(private studentService: StudentServiceService, private listComponent: StudentsComponent) { }
 
  ngOnInit() {

  }
 
  updateActive(isActive: boolean) {
    this.studentService.updateCustomer(this.student.id,
      { nombre: this.student.nombre, apellido: this.student.apellido, dni: this.student.dni,
        fecha_nacimiento: this.student.fecha_nacimiento, mail: this.student.mail,
        obra_social: this.student.obra_social, cert_medico: this.student.cert_medico,
        num_socio: this.student.num_socio, estado_cuota: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.student = data as Student;
        },
        error => console.log(error));
  }
 
  deleteCustomer() {
    this.studentService.deleteCustomer(this.student.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}