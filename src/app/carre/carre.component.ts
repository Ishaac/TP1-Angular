import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent{

  public colors : string[] = ["#f25022", "#7fba00", "#00a4ef", "yellow"];
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  public changeBackGroundColor(color: string){
    this.newItemEvent.emit(color);
  }

}
