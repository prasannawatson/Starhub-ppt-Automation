import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

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
        type: 'bar'
     },
     title: {
        text: 'Historic World Population by Region'
     },
     subtitle : {
        text: 'Source: Wikipedia.org'  
     },
     legend: {
      enabled: true
  },
  yAxis:{
   categories: ['Delivery', 'Installation', 'Service call', 'Undo installation', 'Upgrade'], title: {
   text: null
   },
     xAxis : {
        min: 0, title: {
           text: 'Population (millions)', align: 'high'
        },
        labels: {
           overflow: 'justify'
        }
     },
     tooltip : {
        valueSuffix: ' millions'
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
        {
           name: 'Earnest corporation Ltd',
           data: [33.3, 39.1, 32.5, 14.7, 46.8]
        }, 
        {
           name: 'Planet smart services Ltd',
           data: [49.3, 39.6, 28.6, -12, 41.3]
        }
     ]
  }
  
}}}
