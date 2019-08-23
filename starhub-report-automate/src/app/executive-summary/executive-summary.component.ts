import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-executive-summary',
  templateUrl: './executive-summary.component.html',
  styleUrls: ['./executive-summary.component.scss']
})
export class ExecutiveSummaryComponent implements OnInit {

  constructor() { }
  @Input() executiveSummaryListData: string[];
  executiveSummaryList

  ngOnInit() {
   this.executiveSummaryList = this.executiveSummaryListData;
console.log(this.executiveSummaryList);
}
}
