import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

// to use ngModule directives
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// to use material
import { MaterialModule } from './material/material.module';
// inputURL Component
import { InputUrlComponent } from './components/input-url/input-url.component';
import { TableDataSelectorComponent } from './components/table-data-selector/table-data-selector.component';
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUrlComponent,
    TableDataSelectorComponent,
    ActionMenuComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
