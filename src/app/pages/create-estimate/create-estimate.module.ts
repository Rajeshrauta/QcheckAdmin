import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEstimateRoutingModule } from './create-estimate-routing.module';
import { CreateEstimateComponent } from './create-estimate.component';
import { PopoverComponent } from './components/popover/popover.component';
import { FreeItemComponent } from './components/free-item/free-item.component';
import { TabViewComponent } from './pages/tab-view/tab-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CreateEstimateComponent,
    PopoverComponent,
    FreeItemComponent,
    TabViewComponent,
    HeadSectionComponent,
  ],
  imports: [CommonModule, CreateEstimateRoutingModule, ReactiveFormsModule, NgbModule],
})
export class CreateEstimateModule {}
