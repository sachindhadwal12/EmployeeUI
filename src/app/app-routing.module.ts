import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataComponent } from './components/data/data.component';
import { EmphistoryComponent } from './components/emphistory/emphistory.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'emphistory',component:EmphistoryComponent},
  {path:'history',component:HistoryComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'data',component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
