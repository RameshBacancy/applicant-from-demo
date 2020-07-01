import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std100MComponent } from './std100m.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


const routes: Routes = [
  {
    path: '',
    component: Std100MComponent
  }
];

@NgModule({
  declarations: [
    Std100MComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropDownsModule,
    RouterModule.forChild(routes),
  ]
})
export class Std100mModule { }
