import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

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
        type: 'column'
     },
     title: {
        text: 'Historic World Population by Region' //title
     },
     subtitle : {
        text: 'Source: Wikipedia.org'  
     },
     legend: {
      enabled: true
     },
     xAxis:{
      categories: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19'], //categories
      title: {
      text: null
      }
    },
     yAxis : {
        min: 0, title: {
           text: 'Agent NPS', align: 'high'
        },
        labels: {
           overflow: 'justify'
        }
     },
     plotOptions : {
        bar: {
           dataLabels: {
              enabled: true
           }
        }
     },
     credits:{
        enabled: false
     },
     series: [
        //For slide 110
         {
           data: [23.8, 24.3, 25.6, 21.5, 25.6, 30.8]//data
        },
        //For slide 108
        {
         data: [16.9, 17.6, 19.4, 13.1, 15.7, 17.1]
        }
     ]
  };
  }

}
