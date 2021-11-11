import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs/operators'

import { IExam } from '../interfaces/exam.interface'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private examUrl = '/assets/data.json'

  constructor(private http: HttpClient) { }

  fetchExam() {
    // simulate data loading by delaying the call

    return this.http.get<IExam>(this.examUrl)
      .pipe(delay(1000))
  }
}
