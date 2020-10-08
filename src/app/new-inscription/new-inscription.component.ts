import { Component, OnInit } from '@angular/core';
 import { InscriptionServiceService } from '../services/inscription-service.service';
  import { FormGroup , FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-new-inscription',
  templateUrl: './new-inscription.component.html',
  styleUrls: ['./new-inscription.component.scss']
})
export class NewInscriptionComponent  implements OnInit {  
  submitted = false;
   InscriptionForm: FormGroup;

   createInscriptionForm ()  { 
    return  new  FormGroup ( { 
      alumno :  new  FormGroup ( { 
        id :  new  FormControl ( ) 
       } ) ,
       actividad :  new  FormGroup ( { 
        id_a :  new  FormControl ( ) 
       } ) , 
       fecha_ins :  new  FormControl ( ) , 
      
    } ) ; 
  }

//   InscriptionForm = new FormGroup({
//     alumno: new FormGroup({id : new FormControl('',Validators.required)
//   }),
//    actividad: new FormGroup({id_a: new FormControl('',Validators.required)
// }),
//    fecha : new FormControl('',Validators.required),
//   });
    

  constructor(private inscriptionService: InscriptionServiceService) { 


    this.InscriptionForm = this.createInscriptionForm();
  }

   

  newInscription(): void {
    this.submitted = false;
  }

  save() {
    console.log(this.InscriptionForm.value);
    this.inscriptionService.createInscription(this.InscriptionForm.value)
      .subscribe(
        response => console.log('Success' , response),
         error => console.error('Error', error));
   }
  ngOnInit() {
    this.InscriptionForm.patchValue({
      fecha_ins: this.formatDate(new Date()),
    });
    
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
  onSubmit() {
    this.submitted = true;
    
    console.log(this.InscriptionForm.value);
    this.save(); 
  }

}
