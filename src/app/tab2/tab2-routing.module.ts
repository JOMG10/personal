import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) , CommonModule],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
