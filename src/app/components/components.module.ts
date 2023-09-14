import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpyScreenComponent } from './empy-screen/empy-screen.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EmpyScreenComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[EmpyScreenComponent]
})
export class ComponentsModule { }
