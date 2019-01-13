import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigListComponent } from './config-list/config-list.component';
import { ConfigFormComponent } from './config-form/config-form.component';
import { HeaderComponent } from './header/header.component';
import { ConfigItemComponent } from './config-list/config-item/config-item.component';
import { StartComponent } from './start/start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfigListComponent,
    ConfigFormComponent,
    HeaderComponent,
    ConfigItemComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
