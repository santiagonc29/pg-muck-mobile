import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
    itemName : 'Mercado',
    itemDate : '10/05/2022',
    itemPriority: 'high',
    itemCategory : 'Personal'
  },
    {
    itemName : 'Codificar',
    itemDate : '02/07/2022',
    itemPriority: 'middle',
    itemCategory : 'Trabajo'
  },
    {
    itemName : 'Ropa',
    itemDate : '05/13/2022',
    itemPriority: 'Low',
    itemCategory : 'Personal'
  }
];

  today: number = Date.now();
  constructor() {}

}