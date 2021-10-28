import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { welcomeComponent } from './welcome/welcome.component';
import { HallComponent } from './hall/hall.component';




@NgModule({
  declarations: [
    welcomeComponent,
    HallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
