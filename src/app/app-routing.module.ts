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



const routes: Routes = [

  { path:'home' , component: HomeComponent , canActivate: [AuthGuard] },
   { path:'' , component: UserComponent},
  { path:'newstudent' , component: NewstudentComponent},
  { path:'reportassistance' , component: ReportassistanceComponent },
  { path:'payreport' , component: PayreportComponent},
  { path:'assistance' , component: AssistanceComponent},
  { path:'login' , component: UserComponent},
  { path:'register' , component: RegisterComponent},
  { path:'students' , component: StudentsComponent},
  { path:'searchstudent' , component: SearchStudentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
