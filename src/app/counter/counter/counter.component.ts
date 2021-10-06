import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ this.title }}</h1>
        <h3>The base is:<strong> {{base}} </strong> </h3>
        
        <button (click)="accumulate(-base)">-{{base}}</button>
        <span>{{number}}</span>
        <button (click)="accumulate(base)">+{{base}}</button>
    `
})

export class CounterComponent {

  title: string = 'Counter App';
  number: number = 0;
  base: number = 10;

  accumulate( value: number ){
    this.number += value;
  }
}