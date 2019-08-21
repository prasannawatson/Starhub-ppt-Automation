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
        text: 'Historic World Population by Region'
     },
     subtitle : {
        text: 'Source: Wikipedia.org'  
     },
     legend: {
      enabled: true
     },
     xAxis:{
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
      text: null
      }
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
