import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{
		path: 'std100m', loadChildren: () => import('./std100m/std100m.module').then(m => m.Std100mModule)
	},
	{
		path: 'applicant', loadChildren: () => import('./applicant/applicant.module').then(m => m.ApplicantModule)
	}
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
