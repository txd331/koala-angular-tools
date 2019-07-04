import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {KoalaAngularToolsModule, KoalaAngularToolsService} from 'koala-angular-tools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KoalaAngularToolsModule
  ],
  providers: [KoalaAngularToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
