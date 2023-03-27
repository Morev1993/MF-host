import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    MainComponent,
    ChildComponent
  ],
  exports: [MainComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
