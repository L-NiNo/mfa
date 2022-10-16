import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ModFedComponent} from './mod-fed.component';


const routes: Routes = [{path: '', component: ModFedComponent}];

@NgModule({
  declarations: [ModFedComponent],
  exports: [ModFedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModFedModule { }
