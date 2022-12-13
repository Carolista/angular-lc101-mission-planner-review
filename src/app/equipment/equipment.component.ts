import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [ 'Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(newItem: string, item: string) {
    if (!this.equipment.includes(newItem)) {
      let index = this.equipment.indexOf(item);
      this.equipment.splice(index, 1, newItem);
    }
    this.itemBeingEdited = null;
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  add(item: string) {
    if (!this.equipment.includes(item)) {
      this.equipment.push(item);
    }
  }

}
