import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PovCalcComponent } from './components/pov-calc/pov-calc.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, PovCalcComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
