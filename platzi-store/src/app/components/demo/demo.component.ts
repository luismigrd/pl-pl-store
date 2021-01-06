import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  power = 10;

  constructor() { }

  ngOnInit(): void {
  }
  addItem(itemNuevo: string): void{
    this.items.push(itemNuevo);
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }
  
}
