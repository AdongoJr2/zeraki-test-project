import { Component, Input } from '@angular/core'
import { ChartDataset, ChartOptions } from 'chart.js'
import PerformanceOvertime from '../../models/performance-overtime.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() performanceData!: PerformanceOvertime[];

  get datasets(): ChartDataset[] {
    return [{
      data: this.performanceData.map(datum => datum.avgScore),
      label: ''
    }]
  }

  get labels(): string[][] {
    return this.performanceData.map(datum => {
      const examNameSplit = datum.examName.split('-')

      return [
        `${examNameSplit[0]} - ${examNameSplit[1]}`,
        examNameSplit[examNameSplit.length - 1]
      ]
    })
  }

  get options(): (ChartOptions & { annotation?: any }) {
    return {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            text: 'Score (%)',
            display: true,
          },
        },
      }
    }
  }
}
