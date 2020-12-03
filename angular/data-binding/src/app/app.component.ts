import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  userName:string
  
  hideDirectives=false;
  alignment='center'
  uservalidateMessage=true;

  sayHello(){
    console.log('--- sayHello called.....');
  }

  changeStatus(){
    this.hideDirectives=!this.hideDirectives;
  }



  

}
