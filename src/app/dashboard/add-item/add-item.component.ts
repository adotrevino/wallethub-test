import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() itemData = new EventEmitter();
  @Input() type:string;
  
  constructor() { }
  form = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });
  ngOnInit() {
  }

  onSubmit() {
    this.itemData.emit(this.form.value)
  }

}
