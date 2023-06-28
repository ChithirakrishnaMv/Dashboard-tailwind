import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts = Highcharts;
  chartOptions = {};

  constructor(){
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Rental Vehicle 2021-2023',
          align: 'left'
      },
      subtitle: {
          text: 'Source: ' + '<a href="https://www.ssb.no/en/statbank/table/09288/"' + 'target="_blank">Hotweels</a>',
          align: 'left'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        title: {
          useHTML: true,
          text: 'Number of Rental Services',
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'CAR',
          data: [685, 502, 520, 720, 520, 925, 860, 797, 896, 958 ,525, 978]
      }, {
          name: 'BIKE',
          data: [685, 702, 520, 920, 720, 925, 860, 757, 887, 1008 ,950, 998]
  
      }, {
          name: 'CYCLES',
          data: [509, 685, 628, 687, 784, 738, 798, 757, 835, 845 ,928, 1287]
      }, {
          name: 'BUS',
          data: [655, 687, 587, 785, 875, 925, 575, 789, 896, 545 ,1000, 1022]
  
      }, {
          name: 'MINI BUS',
          data: [581, 578, 687, 789, 658, 857, 897, 758, 852, 987 ,1200, 987]
      }]
  };
  HC_exporting(Highcharts);
  }
}
