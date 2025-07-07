import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LibraryTableComponent} from "./components/libraries-table/library-table.component";

const routes: Routes = [
  {
    path: '', component:
    DashboardComponent,
    canActivate: [
    ],
    children: [
      {path: '', redirectTo: '/libraries', pathMatch: 'full'},
      {path: 'libraries', component: LibraryTableComponent},
      {path: '**', redirectTo: '/libraries', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
