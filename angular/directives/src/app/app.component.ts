import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMarried=false;
  days:Array<String>=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  title = 'directives';
 
  isClicked=false;
  
  color='green';



  changeColor(){
    this.isClicked=true;
    


  }
}
