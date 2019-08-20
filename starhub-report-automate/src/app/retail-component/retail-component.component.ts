import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retail-component',
  templateUrl: './retail-component.component.html',
  styleUrls: ['./retail-component.component.css']
})
export class RetailComponentComponent implements OnInit {

  @Input() headers: string;
  @Input() tables: string[];
  values =  [
    "NPS", "Staff Satisfaction Breakdown",
    "Qualitative Analysis", "Store Performance & Rank"
  ];
  constructor() { }

  ngOnInit() {
  }

}
