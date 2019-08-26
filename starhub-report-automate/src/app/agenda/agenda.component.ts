import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  @Input() agendavalues: string[] 
  @Input() active: string;
  constructor() {   }

  ngOnInit() {  }
  
}
