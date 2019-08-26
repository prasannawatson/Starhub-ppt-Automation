import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import  HC_more  from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  constructor() { }
  @Input() bubble_array;
  highcharts
  chartOptions
  bubble_array1 = [{ x: 10, y: -9.6, z: 21,  name: 'Broadband' },
  { x: 15, y: -7.3, z: 21,  name: 'Mobile' },
  { x: 20, y: -34.2, z: 21, name: 'Cable TV Residential' }];
  ngOnInit() {
    console.log(this.bubble_array);
    this.highcharts = Highcharts;
  this.chartOptions = {

    chart: {
      type: 'bubble',
      zoomType: 'xy'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: true
    },
    legend: {
      enabled: false
    },
    xAxis: {
      gridLineWidth: 1,
      lineWidth: 0,
      tickWidth: 0,
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'bubble',
      data: this.bubble_array
    }]}
  }

}
