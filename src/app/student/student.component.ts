import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import StudentFacade from './facades/student.facade';

import Student from './models/student.model';
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
export class StudentComponent implements OnInit, OnDestroy {
  studentSubscription!: Subscription;
  studentDetails?: Student;

  constructor(
    public studentFacade: StudentFacade,
  ) { }

  ngOnInit() {
    this.studentSubscription = this.studentFacade.student$
      .subscribe((data: Student) => {
        this.studentDetails = data;
      });
  }

  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
  }

  getClassFromGrade(grade: string | null): string {
    return grade ? grade.replace(/-|\+/, '').toLowerCase() : 'N/A';
  }
}
