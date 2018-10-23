import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {KToolsModule} from '../../src/k-tools/k-tools/k-tools.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    KToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
