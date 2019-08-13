import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  values =  [
    "Retail", "Hubtroopers", "Product and Lifestyle",
    "StarHub EBG", "StarHub Online", "StarHub Teesales",
    "Consumer Contact Center"
  ];
  constructor() { 
    console.log(this.values);
  }

  ngOnInit() {  }
  
}
