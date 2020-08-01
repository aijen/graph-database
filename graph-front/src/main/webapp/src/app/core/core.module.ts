import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebService} from "./service/web.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [WebService]
})
export class CoreModule {
}
