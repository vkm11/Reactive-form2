import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';

import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: 'login', component: LoginformComponent},
  { path: '', component: LoginformComponent},
  { path: 'register', component: RegisterformComponent},
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },

  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginformComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  // onClick(){

  //   console.log("Login Successfully!")
   
  // }
}
