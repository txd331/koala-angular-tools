import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KPagerComponent} from '../components/k-pager/k-pager.component';
const components = [KPagerComponent];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class KToolsModule { }
