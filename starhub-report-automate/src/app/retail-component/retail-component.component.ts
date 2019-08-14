import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail-component',
  templateUrl: './retail-component.component.html',
  styleUrls: ['./retail-component.component.css']
})
export class RetailComponentComponent implements OnInit {

  values =  [
    "NPS", "Staff Satisfaction Breakdown",
    "Qualitative Analysis", "Store Performance & Rank"
  ];
  constructor() { }

  ngOnInit() {
  }

}
