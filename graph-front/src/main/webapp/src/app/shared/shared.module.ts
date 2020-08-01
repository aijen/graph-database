import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";
import {AngularMaterialModule} from "../angular-material.module";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FlexLayoutModule
  ]

})
export class SharedModule { }
