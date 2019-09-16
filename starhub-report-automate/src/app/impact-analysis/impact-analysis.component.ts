import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import  HC_more  from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-impact-analysis',
  templateUrl: './impact-analysis.component.html',
  styleUrls: ['./impact-analysis.component.scss']
})
export class ImpactAnalysisComponent implements OnInit {

    @Input() impact_analysis: any;
    @Input() flag: number;
    constructor() { }
    chartOptions: any;
    Highcharts;

    ngOnInit() {
        if(this.flag == 0){
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
                },
                {
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
                data: this.impact_analysis
            }]
            }
        }
        else if(this.flag == 1){
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
                },
                {
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
                },
                bubble: {
                    color: '#509dd4',
                    marker: {
                        fillColor: 'transparent'
                    }
                }
            },
            series: [{
                data: this.impact_analysis
            }]
            }
        }
    }
}
