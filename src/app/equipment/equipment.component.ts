import { Component, OnInit } from '@angular/core';

type Item = {
  name: string,
  mass: number,
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   budgetRemaining: number = this.maximumAllowedMass;
   nearingMax: boolean = false;


   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item: Item): void {
    this.cargoHold.push(item);
    this.cargoMass += item.mass;
    if (this.cargoMass >= this.maximumAllowedMass - 200) {
      this.nearingMax = true;
    }
    this.budgetRemaining -= item.mass;
   }

   shouldDisable(item: Item): boolean {
    return this.cargoHold.length === this.maxItems || this.cargoMass + item.mass > this.maximumAllowedMass;
   }

   emptyHold(): void {
    this.cargoHold = [];
    this.cargoMass = 0;
    this.budgetRemaining = this.maximumAllowedMass;
    this.nearingMax = false;
   }
   
}
