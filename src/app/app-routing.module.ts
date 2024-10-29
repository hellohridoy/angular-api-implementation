import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import {StudentComponent} from "./components/student/student.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {UniversityComponent} from "./components/university/university.component";
import {TeacherComponent} from "./components/teacher/teacher.component";
import {DepartmentComponent} from "./components/department/department.component";
import {UniversityInfoComponent} from "./university-info/university-info.component";
import {ViewUniversityComponent} from "./view-university/view-university.component";
import {UpdateUniversityInfoComponent} from "./update-university-info/update-university-info.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'university', children: [
      { path: 'add-university', component: UniversityComponent },
      { path: 'university-info', component: UniversityInfoComponent },
      { path: 'view', component: ViewUniversityComponent },
      { path: 'update', component: UpdateUniversityInfoComponent },
    ]
  },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'department', component: DepartmentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
