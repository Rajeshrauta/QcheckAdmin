import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimateComponent } from './create-estimate.component';

const routes: Routes = [{ path: '', component: CreateEstimateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEstimateRoutingModule { }
