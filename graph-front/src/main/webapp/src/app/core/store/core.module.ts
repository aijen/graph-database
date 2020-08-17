import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleStoreModule } from './schedule/schedule.modules';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ScheduleStoreModule
  ],
  providers: []
})
export class CoreModule {
}
