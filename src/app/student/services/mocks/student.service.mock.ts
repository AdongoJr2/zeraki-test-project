import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectMapper } from 'json-object-mapper';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import Student from '../../models/student.model';

@Injectable()
export default class StudentServiceMock {
  private studentExamURL = '/assets/student-data.json'

  constructor(private http: HttpClient) { }

  get retrieveStudent$(): Observable<Student> {
    return this.http.get<any>(this.studentExamURL)
      .pipe(
        map((student) => ObjectMapper.deserialize(Student, student)),
        delay(1000),
      );
  }
}
