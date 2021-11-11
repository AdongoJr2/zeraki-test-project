interface ISubjecResult {
  "subject_name": string
  "score": number
  "grade": string
  "rank": number
  "rank_out_of": number
  "deviation": number
  "comment": string
}

interface IStudentPerformaceOverTime {
  "exam_name": string
  "avg_score": number
}

type TSubjectResults = ISubjecResult[]

export interface IExam {
  "student_name": string
  "student_admission_number": string
  "student_photo": string
  "class_name": string
  "exam_name": string
  "mean_grade": string
  "mean_marks": {
    "deviation": number
    "avg_score": number
  }
  "overall_position": {
    "deviation": number
    "position_out_of": number
    "position": number
  }
  "stream_position": {
    "deviation": number
    "position_out_of": number
    "position": number
  }
  "principals_remarks": string
  "class_teachers_remarks": string
  "subject_results": TSubjectResults
  "student_performance_over_time": IStudentPerformaceOverTime[]
}
