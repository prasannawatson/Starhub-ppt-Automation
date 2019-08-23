import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-retail-tnps-overall',
  templateUrl: './retail-tnps-overall.component.html',
  styleUrls: ['./retail-tnps-overall.component.scss']
})
export class RetailTnpsOverallComponent implements OnInit {

  values = [ 
    "Overall", "Ex.Partners", "Platinum Shops",
    "RoadShow", "StarHub Shops"
  ];
  line = [ [52, 53, 53, 53, 50.5, 47, 54, 53.5, 53.5, 56, 64, 69.8],
           [56, 54, 57, 58, 54, 52, 53, 55, 56, 55, 63, 62],
           [50, 48, 50, 53, 52, 38.8, 50.5, 48, 56, 57, 69, 70.5],
           ['-', '-', 31, '-', 42, '-', '-', '-', 44, 27, 55, '-'],
           [50, 50, 52, 51, 49, 46, 52, 52, 52, 52.5, 61.2, 64.8],
           ["Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18",
        "Jan-19", "Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19"]
         ];

  a =
  [
    {
      "name": "Overall", Jul: 9576, Aug: 9658, Sep: 11045, Oct: 9880, Nov: 9799, Dec: 11205, Jan: 10902, 
              Feb: 8088, Mar: 9809, Apr: 8883, May: 11208, Jun: 11560
    },
    {
      "name": "Ex.Partners", Jul: 9576, Aug: 9658, Sep: 11045, Oct: 9880, Nov: 9799, Dec: 11205, Jan: 10902, 
              Feb: 8088, Mar: 9809, Apr: 8883, May: 11208, Jun: 11560
    },
    {
      "name": "Platinum Shops", Jul: 9576, Aug: 9658, Sep: 11045, Oct: 9880, Nov: 9799, Dec: 11205, Jan: 10902, 
              Feb: 8088, Mar: 9809, Apr: 8883, May: 11208, Jun: 11560
    },
    {
      "name": "RoadShow", Jul: 9576, Aug: 9658, Sep: 11045, Oct: 9880, Nov: 9799, Dec: 11205, Jan: 10902, 
              Feb: 8088, Mar: 9809, Apr: 8883, May: 11208, Jun: 11560
    },
    {
      "name": "StarHub Shops", Jul: 9576, Aug: 9658, Sep: 11045, Oct: 9880, Nov: 9799, Dec: 11205, Jan: 10902, 
              Feb: 8088, Mar: 9809, Apr: 8883, May: 11208, Jun: 11560
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
  
  highcharts = Highcharts;
  chartOptions = {   
       chart: {
          type: "line"
       },
       title: {
          text: "Target NPS"
       },
       xAxis:{
          categories:this.line[5],
             title:{
              text:"Months"
           } 
       },
       yAxis: {          
          title:{
             text:"TNPS"
          } 
       },
       series: [
        {
           name: this.values[0],
           data: this.line[0]
        },
        {
           name: this.values[1],
           data: this.line[1]
        },
        {
           name: this.values[2],
           data: this.line[2]
        },
        {
           name: this.values[3],
           data: this.line[3]
        },
        {
          name: this.values[4],
          data: this.line[4]
       }
      ]
  }
}
