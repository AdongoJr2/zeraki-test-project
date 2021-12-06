import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Student from "../models/student.model";
import StudentService from "../services/student.service";

@Injectable({ providedIn: 'root' })
export default class StudentState {
  private readonly _student$ = new Subject<Student>();
  public student$ = this._student$.asObservable();

  constructor(
    private readonly _studentService: StudentService,
  ) {
    this._studentService.retrieveStudent$
      .subscribe((student: Student) => {
        return this._student$.next(student);
      })
  }

}
