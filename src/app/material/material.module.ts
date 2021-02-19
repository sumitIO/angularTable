import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


const MaterialComponets = [
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  imports: [MaterialComponets],
  exports:[MaterialComponets],
})
export class MaterialModule { }
