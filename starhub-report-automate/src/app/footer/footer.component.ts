import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
@Input() atom1: string[];
@Input() atom2: string[];
@Input() atom3: string[];
@Input() atom4: string[];
  ngOnInit() {
  }

}
