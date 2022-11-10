import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp1';
  color : string = 'white';

  changeBackGroundColor(color: string){
    this.color=color;
  }
}
