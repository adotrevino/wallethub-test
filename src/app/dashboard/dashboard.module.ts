import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddItemComponent } from './add-item/add-item.component';

import { TableComponent } from './table/table.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatDialogModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CurrencyOnlyDirective } from '../currency-only.directive';

@NgModule({
  declarations: [
    TransactionsComponent,
    TableComponent,
    MainFrameComponent,
    AddItemComponent,
    CurrencyOnlyDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ChartsModule
  ],
  entryComponents: [AddItemComponent]
})

export class DashboardModule { }
