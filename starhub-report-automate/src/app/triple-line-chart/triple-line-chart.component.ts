import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-triple-line-chart',
  templateUrl: './triple-line-chart.component.html',
  styleUrls: ['./triple-line-chart.component.css']
})
export class TripleLineChartComponent implements OnInit {

  constructor() { }

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
            name: this.values[0],
            data: this.data[0]
          },
          {
            name: this.values[1],
            data: this.data[1]
         },
         {
          name: this.values[2],
          data: this.data[2]
        }  
        ]
      }
  } 
  @Input() values: string[];
  @Input() data: number[];
  @Input() categories: string[];
highcharts
chartOptions

}
