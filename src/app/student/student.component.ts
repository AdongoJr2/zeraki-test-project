import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

import { IStudent, IExam } from './interfaces'
import { StudentService } from './services/student.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ transform: 'translateY(5px)' }),
            animate(
              '.83s ease-out',
              style({ transform: 'translateY(0)' }))
          ]
        ),
      ]
    )

  ],
})
export class StudentComponent {
  exam?: IExam;

  constructor(private studentsService: StudentService) {
    this.studentsService.fetchExam()
      .subscribe((data) => {
        this.exam = data
      })
  }

  get student(): IStudent | undefined {
    const exam = this.exam

    if (!exam) return

    return {
      name: exam.student_name,
      admNo: exam.student_admission_number,
      photo: exam.student_photo,
    }
  }

  get streamInfo() {
    if (!this.exam) return

    const info = this.exam.stream_position
    return {
      rank: info.position,
      outOf: info.position_out_of,
      deviation: info.deviation,
    }
  }

  get overallInfo() {
    if (!this.exam) return

    const info = this.exam.overall_position
    return {
      rank: info.position,
      outOf: info.position_out_of,
      deviation: info.deviation,
    }
  }

  getClassFromGrade(grade: string): string {
    return grade.replace(/-|\+/, '').toLowerCase()
  }
}
