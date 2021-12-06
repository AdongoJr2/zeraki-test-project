import { JsonProperty, ObjectMapper } from 'json-object-mapper';
import MeanMark from './mean-mark.model';
import Position from './overral-position.model';
import PerformanceOvertime from './performance-overtime.model';
import SubjectResult from './subject-result.model';

export default class Student {
  @JsonProperty({ name: 'student_name', type: String })
  public name: string | null;

  @JsonProperty({ name: 'student_admission_number' })
  public admissionNumber: string | null;

  @JsonProperty({ name: 'student_photo' })
  public imageURL: string | null;

  @JsonProperty({ name: 'class_name' })
  public className: string | null;

  @JsonProperty({ name: 'exam_name' })
  public examName: string | null;

  @JsonProperty({ name: 'mean_grade' })
  public meanGrade: string | null;

  @JsonProperty({ name: 'mean_marks', type: MeanMark })
  public meanMark: MeanMark | null;

  @JsonProperty({ name: 'overall_position', type: Position })
  public overallPosition: Position | null;

  @JsonProperty({ name: 'stream_position', type: Position })
  public streamPosition: Position | null;

  @JsonProperty({ name: 'principals_remarks' })
  public principalRemarks: string | null;

  @JsonProperty({ name: 'class_teachers_remarks' })
  public classTeacherRemarks: string | null;

  @JsonProperty({ name: 'subject_results' })
  private _subjectResults: SubjectResult[] = [];

  @JsonProperty({ name: 'student_performance_over_time' })
  private _performanceOvertime: PerformanceOvertime[] = [];

  constructor() {
    this.name = null;
    this.admissionNumber = null;
    this.imageURL = null;
    this.className = null;
    this.examName = null;
    this.meanGrade = null;
    this.meanMark = null;
    this.overallPosition = null;
    this.streamPosition = null;
    this.principalRemarks = null;
    this.classTeacherRemarks = null;
  }

  public get performanceOvertime(): PerformanceOvertime[] {
    return ObjectMapper.deserializeArray(PerformanceOvertime, this._performanceOvertime);
  }

  public get subjectResults(): SubjectResult[] {
    return ObjectMapper.deserializeArray(SubjectResult, this._subjectResults);
  }
}
