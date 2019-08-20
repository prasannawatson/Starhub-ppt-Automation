import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-double-line-chart',
  templateUrl: './double-line-chart.component.html',
  styleUrls: ['./double-line-chart.component.css']
})
export class DoubleLineChartComponent implements OnInit {

  @Input() values: string[];
  @Input() title: string[];
  @Input() data: number[];
  @Input() categories: string[];
highcharts
chartOptions
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
         }  
      ]
    }
  } 
}
