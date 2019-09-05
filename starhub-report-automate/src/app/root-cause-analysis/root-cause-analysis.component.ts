import { Component, OnInit, Input } from '@angular/core';
import { reduce } from 'highcharts';

@Component({
  selector: 'app-root-cause-analysis',
  templateUrl: './root-cause-analysis.component.html',
  styleUrls: ['./root-cause-analysis.component.scss']
})
export class RootCauseAnalysisComponent implements OnInit {

  constructor() { 
    
  }

  @Input() flag: number;
  list = ["A","B", "C", "D", "E", "F", "G", "H"];

  color2 = 'rgb(192,0,0)';
  color1 = 'rgb(142,198,61)';
  isDetractor = false;
  

  arrow = './assets/images/arrow.png';
  
  ngOnInit() {
    if(this.flag === 1){
      this.isDetractor = false;
    }
    else{
      this.isDetractor = true;
    }
  }

}
