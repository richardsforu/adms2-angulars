import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';

  totalCount = 0;

  buttons = [10, 20, 30, 40, 98, 43];

  totalHitsCount(s1) {
    //console.log('--- Parent Component totalHitsCount called....');
    // console.log(s1 +" is clicked ..");
    this.totalCount+=s1;


  }

}
