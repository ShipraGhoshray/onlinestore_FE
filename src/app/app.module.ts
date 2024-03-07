import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ NgModule ],
  imports: [BrowserModule, CommonModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
