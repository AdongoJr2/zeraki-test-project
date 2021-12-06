import { Injectable } from '@angular/core';
import StudentServiceMock from './mocks/student.service.mock';

@Injectable({
  providedIn: 'root'
})
export default class StudentService extends StudentServiceMock { }
