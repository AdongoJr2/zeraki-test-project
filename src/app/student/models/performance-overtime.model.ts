import { JsonProperty } from 'json-object-mapper';

export default class PerformanceOvertime {
  @JsonProperty({ name: 'exam_name' })
  public examName: string;

  @JsonProperty({ name: 'avg_score'})
  public avgScore: number;

  constructor() {
    this.examName = '';
    this.avgScore = 0;
  }

}
