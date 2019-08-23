import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tnps-table',
  templateUrl: './tnps-table.component.html',
  styleUrls: ['./tnps-table.component.scss']
})
export class TNPSTableComponent implements OnInit {

  @Input() title;
  @Input() table;
  constructor() { }

  ngOnInit() {
  }

}
