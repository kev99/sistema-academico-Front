import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AsistenceServiceService } from '../services/asistence-service.service';


@Component({
  selector: 'app-new-asistence',
  templateUrl: './new-asistence.component.html',
  styleUrls: ['./new-asistence.component.scss']
})
export class NewAsistenceComponent implements OnInit {
  AsistenceForm: FormGroup;
  submitted = false;

  createAsistenceFormForm ()  { 
   return  new  FormGroup ( { 
     alumno :  new  FormGroup ( { 
       id :  new  FormControl ( ) 
      } ) ,
      actividad :  new  FormGroup ( { 
       id_a :  new  FormControl ( ) 
      } ) , 
      fecha_asistencia :  new  FormControl ( ) , 
     
   } ) ; 
 }

  constructor(private AsistenceService : AsistenceServiceService) {

    this.AsistenceForm = this.createAsistenceFormForm();
   }
   newAssistence(): void {
    this.submitted = false;
    this.AsistenceForm.reset();
    this.AsistenceForm.patchValue({
      fecha_asistencia: this.formatDate(new Date()),
  })
  }

   save() {
    console.log(this.AsistenceForm.value);
    this.AsistenceService.createAssistence(this.AsistenceForm.value)
      .subscribe(
        response => console.log('Success' , response),
         error => console.error('Error', error));
   }


   onSubmit() {
    this.submitted = true;
    console.log(this.AsistenceForm.value);
    this.save();
     
  }
   private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  ngOnInit() {
    this.AsistenceForm.patchValue({
      fecha_asistencia: this.formatDate(new Date()),
  })}

}
