import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';

const routes: Routes = [
  { path: '', component: LoginformComponent},
  { path: 'register', component: RegisterformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  onClick(){

    console.log("Login Successfully!")
   
  }
}
