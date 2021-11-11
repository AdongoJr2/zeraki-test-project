import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';

import { StudentComponent } from './student.component';
import { DeviationComponent } from './components/deviation/deviation.component';
import { ChartComponent } from './components/chart/chart.component';
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
  declarations: [
    StudentComponent,
    DeviationComponent,
    ChartComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,

    NgChartsModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class StudentModule { }
