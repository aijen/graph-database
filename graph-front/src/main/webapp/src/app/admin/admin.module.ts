import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchedulesComponent} from "./schedules/schedules.component";
import {AngularMaterialModule} from "../angular-material.module";
import {UpdateComponent} from "./schedules/update/update.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SchedulesComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
  ],

})
export class AdminModule { }
