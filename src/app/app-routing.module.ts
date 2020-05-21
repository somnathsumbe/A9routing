import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  { path:'', redirectTo: 'dashbord', pathMatch: "full" },
  { path: "dashbord", component: DashbordComponent },
  { path: "about", component: AboutComponent },
  { path: "about/:id", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
