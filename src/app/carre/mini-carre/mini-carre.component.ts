import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mini-carre',
  templateUrl: './mini-carre.component.html',
  styleUrls: ['./mini-carre.component.scss']
})
export class MiniCarreComponent implements OnInit {

  @Input() color : string = '';
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void{
    this.newItemEvent.emit(this.color);
  }

}
