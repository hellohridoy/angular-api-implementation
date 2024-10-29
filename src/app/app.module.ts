import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {UniversityComponent} from "./components/university/university.component";
import {TeacherComponent} from "./components/teacher/teacher.component";
import {StudentComponent} from "./components/student/student.component";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UniversityComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    ContactComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
