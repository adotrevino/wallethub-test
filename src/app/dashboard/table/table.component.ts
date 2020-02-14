import { Component, OnInit, Input, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatTable} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() itemArray:Array<string>;
  @ViewChild('transactionTable', {static: true}) matTable:MatTable<any>;

  description: string;
  amount: number;
  displayedColumns: string[] = ['description', 'amount'];
  transactions = []

  constructor() { }

  ngOnInit() {
    this.transactions = this.itemArray;
  }
  ngOnChanges(changes:SimpleChanges) {

    if(!changes.itemArray.firstChange){
    this.transactions = this.itemArray;
    this.matTable.renderRows();  
    }
    
  }

}
