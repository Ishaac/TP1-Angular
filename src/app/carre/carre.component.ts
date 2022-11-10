import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

  public colors : string[] = ["red", "green", "blue", "yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
