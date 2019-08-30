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
      xAxis:{
         categories: this.categories,
         title: {
            text: null
         }
      },
      yAxis : {
         title: {
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
           name: this.values[0],
           data: this.data[0]
        }, 
        {
           name: this.values[1],
           data: this.data[1]
        }
     ]
  }
  
}}
