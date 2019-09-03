import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bottom-table',
  templateUrl: './top-bottom-table.component.html',
  styleUrls: ['./top-bottom-table.component.scss']
})
export class TopBottomTableComponent implements OnInit {

  @Input() table;
  constructor() { }

  ngOnInit() {
    //console.log(this.table);
  }

}
