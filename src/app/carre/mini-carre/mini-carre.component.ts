import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mini-carre',
  templateUrl: './mini-carre.component.html',
  styleUrls: ['./mini-carre.component.scss']
})
export class MiniCarreComponent {

  @Input() public color : string = '';
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  public changeColor(): void{
    this.newItemEvent.emit(this.color);
  }

}
