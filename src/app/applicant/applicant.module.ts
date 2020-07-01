import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


const routes: Routes = [
  {
    path: '',
    component: ApplicantComponent
  }
];

@NgModule({
  declarations: [
    ApplicantComponent
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
    DropDownsModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplicantModule { }
