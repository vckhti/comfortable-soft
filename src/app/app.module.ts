import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {MessageDialogComponent} from "./core/components/message-dialog/message-dialog.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogService} from "primeng/dynamicdialog";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
  ],
  providers: [
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
