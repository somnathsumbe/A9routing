import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentragistrationComponent } from './studentragistration/studentragistration.component';
import { StudentcontactdetailsComponent } from './studentcontactdetails/studentcontactdetails.component';
import { StudentparantdetailsComponent } from './studentparantdetails/studentparantdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
    StudentComponent,
    StudentDetailsComponent,
    StudentragistrationComponent,
    StudentcontactdetailsComponent,
    StudentparantdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
