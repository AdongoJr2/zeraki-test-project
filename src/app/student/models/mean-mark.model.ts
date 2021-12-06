import { JsonProperty, ObjectMapper } from 'json-object-mapper';

export default class MeanMark {
  @JsonProperty()
  public deviation: number;

  @JsonProperty({ name: 'avg_score' })
  public avgScore: number;

  constructor() {
    this.deviation = 0;
    this.avgScore = 0;
  }

}
