import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { StudentComponent } from "./student/student.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentragistrationComponent } from "./studentragistration/studentragistration.component";
import { StudentcontactdetailsComponent } from "./studentcontactdetails/studentcontactdetails.component";
import { StudentparantdetailsComponent } from "./studentparantdetails/studentparantdetails.component";
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';

const routes: Routes = [
  { path: "", redirectTo: "dashbord", pathMatch: "full" },
  { path: "dashbord", component: DashbordComponent },
  { path: "about", component: AboutComponent },
  { path: "about/:id", component: AboutComponent },
  { path: "contact", component: ContactComponent },



  // -- 2class********* bad practice*********************
  // { path: "student", component: StudentComponent },
  // { path: "student/studentdetails", component: StudentDetailsComponent },
  // { path: "student/studentragistration", component: StudentragistrationComponent },

  //childranroot
  {
    path: "student",
    children: [
      { path: "", component: StudentComponent, pathMatch: "full" },
      {
        path: "details",
        children: [
          { path: "", component: StudentDetailsComponent, pathMatch: "full" },
          { path: "contact", component: StudentcontactdetailsComponent },
          { path: "parant", component: StudentparantdetailsComponent },
        ],
      },
      { path: "ragistration", component: StudentragistrationComponent },
    ],
  },

  { path: "book", component: BookComponent },
  { path: "book/bookdetails/:id", component: BookdetailsComponent },
  { path: "book/bookdetails/:id/:price", component: BookdetailsComponent },

  // { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
