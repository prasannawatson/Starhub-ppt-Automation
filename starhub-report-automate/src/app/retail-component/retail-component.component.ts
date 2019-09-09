import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retail-component',
  templateUrl: './retail-component.component.html',
  styleUrls: ['./retail-component.component.scss']
})
export class RetailComponentComponent implements OnInit {

  @Input() headers: string[];
  @Input() tables: string;
  @Input() active: string;
  constructor() { }

  ngOnInit() {

  }

}
