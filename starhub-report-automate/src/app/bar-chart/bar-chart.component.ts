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
     yAxis : {
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
           name: 'Year 1800',
           data: [107, 31, 635, 203, 2]
        }, 
        {
           name: 'Year 1900',
           data: [133, 156, 947, 408, 6]
        }, 
        {
           name: 'Year 2008',
           data: [973, 914, 4054, 732, 34]      
        }
     ]
  };
  }

  

}
