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
    SearchStudentComponent
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
