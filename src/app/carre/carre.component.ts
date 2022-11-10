import { Component, OnInit, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

  public colors : string[] = ["#f25022", "#7fba00", "#00a4ef", "#ffb900"];
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  changeBackGroundColor(color: string){
    this.newItemEvent.emit(color);
  }

}
