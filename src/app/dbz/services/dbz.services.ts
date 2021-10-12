import { Injectable } from "@angular/core";
import { Personage } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personages: Personage[] = [
        {
          name: "Goku",
          power: 15000
        },
        {
          name: "Vegeta",
          power: 9000
        }
      ];
    
    get personages(): Personage[] {
        return [...this._personages];
    }

    constructor() { }

    addPersonage( personage: Personage ) {
        this._personages.push( personage );
    }
}