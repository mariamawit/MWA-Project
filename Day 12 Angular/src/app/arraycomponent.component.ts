import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arraycomponent',
  template: `
    <h1> Array</h1>
    <div>
      <ul>
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class ArraycomponentComponent implements OnInit {
  @Input("elements") arrElement : string[];
  list : string[];

  constructor() { }

  ngOnInit() {
    this.list = this.arrElement;

  }

}
