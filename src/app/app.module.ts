import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import{ MatIconModule } from '@angular/material/icon';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    LoginformComponent,
    HomeComponent,
    AboutComponent,
    JobsComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
