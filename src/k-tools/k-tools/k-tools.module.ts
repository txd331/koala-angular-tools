import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KPagerCompoent} from "../componets/k-pager/k-pager.compoent";
const components = [KPagerCompoent];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class KToolsModule { }
