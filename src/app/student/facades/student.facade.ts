import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Student from '../models/student.model';
import StudentState from '../states/student.state';

@Injectable({ providedIn: 'root' })
export default class StudentFacade {
  constructor(private readonly _state: StudentState) { }

  public student$: Observable<Student> = this._state.student$;
}
