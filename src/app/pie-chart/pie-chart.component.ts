import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
      },
      title: {
          text: 'Average Tour Package 2023',
          align: 'left',
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'BUS',
              y: 40.67,
              sliced: true,
              selected: true
          }, {
              name: 'MINI BUS',
              y: 20.77
          },  {
              name: 'CAR',
              y: 14.86
          }, {
              name: 'TRAVELER',
              y: 10.63
          }, {
              name: 'BIKE',
              y: 9.53
          },  {
              name: 'FLIGHT',
              y: 8.40
          }, {
              name: 'SHIP',
              y: 7.84
          }, {
              name: 'Other',
              y: 3.6
          }]
      }]
  }
  }
}

