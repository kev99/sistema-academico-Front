import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { ReportassistanceComponent } from './reportassistance/reportassistance.component';
import { PayreportComponent } from './payreport/payreport.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BaseComponent } from './base/base.component';
import { PaysComponent } from './pays/pays.component';
import { PayDetailsComponent } from './pay-details/pay-details.component';
import { AsistenceDetailsComponent } from './asistence-details/asistence-details.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { AdultDetailsComponent } from './adult-details/adult-details.component';
import { SearchAsistenceComponent } from './search-asistence/search-asistence.component';
import { SearchInscriptionComponent } from './search-inscription/search-inscription.component';
import { SearchPayComponent } from './search-pay/search-pay.component';
import { SearchAdultComponent } from './search-adult/search-adult.component';
import { InscriptionDetailsComponent } from './inscription-details/inscription-details.component';
import { AdultComponent } from './adult/adult.component';
import { ActivityComponent } from './activity/activity.component';
import { NewPayComponent } from './new-pay/new-pay.component';
import { NewInscriptionComponent } from './new-inscription/new-inscription.component';
import { NewAsistenceComponent } from './new-asistence/new-asistence.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewstudentComponent,
    ReportassistanceComponent,
    PayreportComponent,
    AssistanceComponent,
    UserComponent,
    RegisterComponent,
    NavbarComponent,
    StudentsComponent,
    StudentDetailsComponent,
    SearchStudentComponent,
    InscriptionComponent,
    BaseComponent,
    PaysComponent,
    PayDetailsComponent,
    AsistenceDetailsComponent,
    ActivityDetailsComponent,
    AdultDetailsComponent,
    SearchAsistenceComponent,
    SearchInscriptionComponent,
    SearchPayComponent,
    SearchAdultComponent,
    InscriptionDetailsComponent,
    AdultComponent,
    ActivityComponent,
    NewPayComponent,
    NewInscriptionComponent,
    NewAsistenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
