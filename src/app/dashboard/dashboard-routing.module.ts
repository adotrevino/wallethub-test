import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { MainFrameComponent } from './main-frame/main-frame.component';

const routes: Routes = [
    { path: '', component: MainFrameComponent, children:[
    { path: '', redirectTo: 'transactions', pathMatch: 'full'},
    { path: 'transactions', component: TransactionsComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
