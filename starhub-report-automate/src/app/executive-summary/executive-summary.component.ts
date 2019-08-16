import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executive-summary',
  templateUrl: './executive-summary.component.html',
  styleUrls: ['./executive-summary.component.scss']
})
export class ExecutiveSummaryComponent implements OnInit {

  constructor() { }
executiveSummaryList = [
    {
      "name":"Retail"
    },
    {
      "name":"Hubtroopers"
    },
    {
      "name":"Product & Lifestyle"
    },
    {
      "name":"StarHub EBG"
    }
  ]
  ngOnInit() {

}
}
