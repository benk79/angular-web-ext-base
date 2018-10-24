import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ext';
  storage = browser.storage.local;

  constructor(){
    console.log(this.storage);
  }
}
