import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    LoginformComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
