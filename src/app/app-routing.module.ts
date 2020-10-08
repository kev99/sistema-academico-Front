import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { ReportassistanceComponent } from './reportassistance/reportassistance.component';
import { PayreportComponent } from './payreport/payreport.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { AuthGuard } from './auth.guard';
import { SearchStudentComponent } from './search-student/search-student.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BaseComponent } from './base/base.component';
import { PaysComponent } from './pays/pays.component';
import { ActivityComponent } from './activity/activity.component';
import { AdultComponent } from './adult/adult.component';
import { NewPayComponent } from './new-pay/new-pay.component';
import { SearchPayComponent } from './search-pay/search-pay.component';
import { SearchAdultComponent } from './search-adult/search-adult.component';
import { SearchAsistenceComponent } from './search-asistence/search-asistence.component';
import { SearchInscriptionComponent } from './search-inscription/search-inscription.component';
import { NewInscriptionComponent } from './new-inscription/new-inscription.component';
import { NewAsistenceComponent } from './new-asistence/new-asistence.component';
import { NewActivityComponent } from './new-activity/new-activity.component';



const routes: Routes = [

  { path:'home' , component: HomeComponent , canActivate: [AuthGuard] },
   { path:'' , component: HomeComponent},
  { path:'reportassistance' , component: ReportassistanceComponent },
  { path:'payreport' , component: PayreportComponent},
  { path:'login' , component: UserComponent},
  { path:'register' , component: RegisterComponent},
  { path:'students' , component: StudentsComponent},
  { path:'inscriptions' , component: InscriptionComponent },
  { path:'assists' , component: AssistanceComponent },
  { path:'pays' , component: PaysComponent },
  { path:'activities' , component: ActivityComponent },
  { path:'adults' , component: AdultComponent},
  { path:'searchinscripcion' , component: SearchInscriptionComponent },
  { path:'searchpay' , component: SearchPayComponent },
  { path:'searchassistence' , component: SearchAsistenceComponent },
  { path:'searchadult' , component: SearchAdultComponent },
  { path:'searchinscription' , component: SearchInscriptionComponent },
  { path:'searchstudent' , component: SearchStudentComponent },
  { path:'newassistance' , component: NewAsistenceComponent},
  { path:'newstudent' , component: NewstudentComponent},
  { path:'newpay' , component: NewPayComponent },
  { path:'newinscription' , component: NewInscriptionComponent },
  { path:'newactivity' , component: NewActivityComponent },
  { path:'databaseinfo' , component: BaseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
