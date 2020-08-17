import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule} from "./angular-material.module";
import {AdminModule} from "./admin/admin.module";
import { StoreModule, MetaReducer, ActionReducer, State } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '@angular/flex-layout';


export const metaReducers: MetaReducer<any, any>[] = environment.production ? [] : [];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    AdminModule,
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot([]),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
