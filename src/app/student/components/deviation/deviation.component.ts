import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss'],
})
export class DeviationComponent {
  @Input() deviation!: number

  get deviationStyle() {
    let color = ''
    let icon = ''

    if (this.deviation < 0) {
      color = 'red'
      icon = '&#8595'
    } else if (this.deviation > 0) {
      color = 'green'
      icon = '&#8593'
    }

    return { color, icon }
  }

}
