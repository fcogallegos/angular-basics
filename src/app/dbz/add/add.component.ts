import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personage } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() new: Personage = {
    name: '',
    power: 0
  }

  @Output() onNewPersonage: EventEmitter<Personage> = new EventEmitter();

  add() {
    if( this.new.name.trim().length === 0 ) { return; }
    
    console.log( this.new );
    this.onNewPersonage.emit( this.new );

    this.new = {
      name: "",
      power: 0
    }
    
  }

}