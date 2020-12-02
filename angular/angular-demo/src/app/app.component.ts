import { Component } from '@angular/core';

@Component({ // Component Decarator
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name = "Bucky"

  product = {
    id: 'P001',
    name: 'Pen',
    price: 65,
    description: 'Red Ink Pen'
  }

  date=new Date().toLocaleTimeString('en-US',{timeZone: 'Asia/Kolkata'});
  getProduct(){
    return JSON.stringify(this.product);
  }

  f1(props){  
    return new Date().toLocaleTimeString('en-US',{timeZone: props});
  }


  number=setInterval( ()=>{this.f1('')},1000);

}
