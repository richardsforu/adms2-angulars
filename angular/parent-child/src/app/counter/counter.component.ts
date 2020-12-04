import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  totalHits=0;

  @Input() // data / properties  comes from parent
  btnLable:string;

  @Output() // data / properties goes back to parent
  parentMsg=new EventEmitter();

  countHits(){
    this.totalHits+=1;    
    this.parentMsg.emit(Number.parseInt(this.btnLable));
  }

  ngOnInit(): void {
  }

}
