import { Component, Input } from '@angular/core'
import { ChartDataset, ChartOptions } from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() performanceData!: { exam_name: string, avg_score: number }[]

  get datasets(): ChartDataset[] {
    return [{
      data: this.performanceData.map(datum => datum.avg_score),
      label: ''
    }]
  }

  get labels(): string[][] {
    return this.performanceData.map(datum => {
      const exam_name_split = datum.exam_name.split('-')

      return [
        `${exam_name_split[0]} - ${exam_name_split[1]}`,
        exam_name_split[exam_name_split.length - 1]
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
