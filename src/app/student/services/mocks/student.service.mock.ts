import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectMapper } from 'json-object-mapper';
import { Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';

import Student from '../../models/student.model';

import MOCK_DATA_STUDENT from '../../../../assets/data.json';

@Injectable()
export default class StudentServiceMock {
  // private examUrl = '/assets/data.json'
  private examUrl = '../../../../assets/data.json'

  constructor(private http: HttpClient) { }

  retrieveStudent$(): Observable<Student> {
    return this.http.get<Student>(this.examUrl)
      .pipe(
        mapTo(ObjectMapper.deserialize(Student, MOCK_DATA_STUDENT)),
        delay(1000),
      );
  }
}
