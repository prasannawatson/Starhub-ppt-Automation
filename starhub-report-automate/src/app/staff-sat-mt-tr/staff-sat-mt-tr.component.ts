import { Component, OnInit, Input} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-staff-sat-mt-tr',
  templateUrl: './staff-sat-mt-tr.component.html',
  styleUrls: ['./staff-sat-mt-tr.component.css']
})
export class StaffSatMtTrComponent implements OnInit {

  constructor() { 
  }
  @Input() title: string[];
  @Input() data: number[];
  @Input() categories: string[];
highcharts
chartOptions

  ngOnInit() {
    this.highcharts = Highcharts;
    this.chartOptions = {   
         chart: {
            type: "line"
         },
         xAxis:{
            categories: this.categories,
               title:{
                text:"Months"
             } 
         },
         yAxis: {          
            title:{
               text:"Staff Satisfaction"
            } 
         },
         series: [
          {
             data: this.data
          }
        ]
      }
    }
  }

