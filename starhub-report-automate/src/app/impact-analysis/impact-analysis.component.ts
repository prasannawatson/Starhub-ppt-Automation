import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  HC_more  from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-impact-analysis',
  templateUrl: './impact-analysis.component.html',
  styleUrls: ['./impact-analysis.component.scss']
})
export class ImpactAnalysisComponent implements OnInit {

  constructor() { }

chartOptions: any;
  Highcharts;
  tables = [{name:"A",n:1},{name:"B",n:2}];

  ngOnInit() {
    this.Highcharts = Highcharts;
    this.chartOptions = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 0,
      zoomType: 'xy'
  },

  legend: {
      enabled: false
  },

  title: {
      text: ' '
  },


  xAxis: {
      gridLineWidth: 0,
        lineWidth: 0,
 minorGridLineWidth: 0,
 lineColor: 'transparent',
      title: {
          text: '% Volume'
      },
      labels: {
          format: '{value}'
      },
      plotLines: [{
          color: 'black',
          dashStyle: 'dash',
          width: 1,
          value: 7.7,
          label: {
              rotation: 0,
              y: 15,
              style: {
                  fontStyle: 'regular'
              },
              text: 'Avg Vol: 7.7%'
          },
          zIndex: 3
      }]
  },

  yAxis: {
      gridLineWidth: 0,
      lineWidth: 0,
      minorGridLineWidth: 0,
      startOnTick: false,
      endOnTick: false,
      title: {
          text: 'TNPS'
      },
      labels: {
          format: '{value}'
      },
      maxPadding: 0,
      plotLines: [{
        color: 'black',
        dashStyle: 'dash',
        width: 1,
        value: -31,
        label: {
          align: 'right',
          style: {
            fontStyle: 'regular'
          },
          text: 'Avg TNPS: -31',
          x: -10
        },
        zIndex: 3
      },{
          color: 'green',
          dashStyle: 'dash',
          width: 1,
          value: -9.5,
          label: {
              align: 'right',
              style: {
                  fontStyle: 'regular',
                  
              },
              text: 'Safe sugar intake 50g/day',
              x: -10
          },
          zIndex: 3
      }]
  },
  
  credits: {
      enabled: false
  },

  tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat: '<tr><th colspan="2"><h3>{point.text}</h3></th></tr>' +
          '<tr><th>X:</th><td>{point.x}</td></tr>' +
          '<tr><th>y:</th><td>{point.y}</td></tr>' +
          '<tr><th>Size:</th><td>{point.z}%</td></tr>',
      footerFormat: '</table>',
      followPointer: true
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
      data: [
          { x: 31, y: -18.4, z: 196, name: '1', text: 'Connectivity', color:"#8EC63E" },
          { x: 6.6, y: -26.2, z: 42, name: '2', text: 'Price and value',color:"blue" },
          { x: 7.3, y: -10.9, z: 46, name: '3', text: 'Product Range and Availability',  color:"blue" },
          { x: 4.9, y: -25.8, z: 31, name: '4', text: 'Competition', color:"blue" },
          { x: 5.5, y: -34.3, z: 35, name: '5', text: 'Channel Experience', color:"orange" },
          { x: 10.3, y: -27.7, z: 65, name: '6', text: 'Product Quality', color:"#8EC63E" },
          { x: 0.5, y: -10, z: 3, name: '7', text: 'Repairs and Returns', color:"#8EC63E" },
          { x: 4.3, y: -3.7, z: 27, name: '8', text: 'Loyalty',  color:"blue" },
          { x: 4.4, y: -32.1, z: 28, name: '9', text: 'Upgrades and Extensions',color:"orange" },
          { x: 13.6, y: 7, z: 86, name: '10', text: 'Policy',  color:"darkgreen"},
          { x: 1.1, y: -57.1, z: 7, name: '11', text: 'Payment and Billing', color:"orange" },
          { x: 2.5, y: -50, z: 16, name: '12', text: 'Promotions', color:"orange" },
          { x: 7.9, y: -24, z: 50, name: '13', text: 'Professionalism and staff', color:"#8EC63E" }
      ]
  }]
  }
  }

}
