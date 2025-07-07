import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { LibraryTableComponent } from './components/libraries-table/library-table.component';
import {DashboardService} from "./services/dashboard.service";
import {GetPropertyPipe} from "./pipes/object.pipe";
import {HighlighterPipe} from "./pipes/highlighter.pipe";
import {KeysPipe} from "./pipes/keys.pipe";
import {NestedObjectDisplayComponent} from "./components/recursive-template/recursive-display.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ItemDetailComponent,
    GetPropertyPipe,
    HighlighterPipe,
    KeysPipe,
    NestedObjectDisplayComponent,
    LibraryTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService,
    HighlighterPipe,
    KeysPipe,
    GetPropertyPipe
  ]
})
export class DashboardModule { }
