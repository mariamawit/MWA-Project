import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <div class="orange">
    <h3>{{title}}</h3>
    <button (click)="getParentInput()">Get Parent Input</button>
    <div style="padding: 10px">
      <button (click)="decrease()">  -  </button>
      <label>{{value}}</label>
      <button (click)="increase()">  +  </button>
    </div>
    <p>Parent Input : {{paraCounter}}</p>
  </div>
`,
styles:['div.orange {border: solid 1px orange; margin: 5px}'],
encapsulation: ViewEncapsulation.Emulated
})
export class CounterComponent implements OnInit{
  value: number;
  title: string = "Counter Component";
  @Input() paraCounter;
  @Input() paraCounter2;
  @Output() counterChange = new EventEmitter();

  constructor() {
    this.value = 0;
   }

   ngOnInit() {
    console.log("component is loaded");
    }

  increase(){
    this.value = this.value + 1;
    return false;
  }

  decrease(){
    this.value = this.value - 1;
    return false;
  }

  getParentInput(){
    this.value = parseInt(this.paraCounter);
}

emitData(){
  this.counterChange.emit(this.value);
}



}
