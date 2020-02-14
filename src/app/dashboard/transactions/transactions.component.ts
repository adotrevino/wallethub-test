import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';
import { trigger, state, transition, style, animate } from '@angular/animations';

export interface Transaction {
  description: string;
  amount: number;
}
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [
    trigger('fade',[
      state('void', style({opacity: 0, transform: 'translateY(-50px)'})),
      transition(':enter', [
        animate(2000)
      ])
    ])
  ]
})
export class TransactionsComponent implements OnInit {


  displayedColumns: string[] = ['description', 'amount'];
  transactions: Transaction[] = [];
  totalIncome = [];
  totalExpenses = [];
  total:number = 0;

  /** Gets the total cost of all transactions. */
 
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  arraySum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  newItem(evt) {
    
    
    const dialogRef = this.dialog.open(AddItemComponent, {
      height: '400px',
      width: '600px',
    });
    const sub = dialogRef.componentInstance.itemData.subscribe((data) => {
      if(evt.target.textContent !== 'Add Income'){
        data.amount = data.amount * -1;
      }
      if( data.amount > 0 ) {
        this.totalIncome.push(data.amount);
   
       
      }else{
        this.totalExpenses.push(data.amount);
       
      }
      
      this.transactions.push(data);
      this.transactions = this.transactions.slice();
      //console.log(this.transactions)
      //
      dialogRef.close();
    })
    dialogRef.afterClosed().subscribe(() => {
      this.total = this.arraySum(this.totalIncome) + this.arraySum(this.totalExpenses);
     
    })
    
    
  }

}
