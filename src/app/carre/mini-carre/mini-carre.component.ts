import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-carre',
  templateUrl: './mini-carre.component.html',
  styleUrls: ['./mini-carre.component.scss']
})
export class MiniCarreComponent implements OnInit {

  @Input() color : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
