import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name = "Mykul Guillory";

  test(){
    console.log("Ohh no, you clicked the button!!!");

    this.name = "changed";
  }
}
