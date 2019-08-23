import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {


  starhubLogo = './assets/images/StarHub-logo.png';
  cclogo = './assets/images/cc-logo.png'
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
