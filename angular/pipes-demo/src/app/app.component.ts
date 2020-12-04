import { Component } from '@angular/core';
import {EMPLOYEES} from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  price = 2500;
  doj = new Date();

  employees=EMPLOYEES;

  product = {
    id: 'P001',
    name: 'Laptop',
    price: 250000,
    description: 'Apple Macbook Pro'
  }
  title = 'pipes-demo';


  products=[
    {id:'P001',name:'Pen',price:7663,description:'red Pen'},
    {id:'P002',name:'Book',price:150,description:'red Pen'},
    {id:'P003',name:'Mobile',price:45000,description:'red Pen'},
    {id:'P004',name:'Laptop',price:7663,description:'red Pen'},
    {id:'P005',name:'Pendrive',price:7663,description:'red Pen'},
    {id:'P006',name:'Tab',price:7663,description:'red Pen'},
    {id:'P007',name:'Head Phones',price:7663,description:'red Pen'},
    {id:'P008',name:'ear Pods',price:7663,description:'red Pen'},
  ]






}
