import { JsonProperty } from 'json-object-mapper';

export default class SubjectResult {
  @JsonProperty({ name: 'subject_name' })
  public name: string | null;

  @JsonProperty()
  public score: number;

  @JsonProperty()
  public grade: string | null;

  @JsonProperty()
  public rank: number | null;

  @JsonProperty({ name: 'rank_out_of' })
  public rankOutOf: number | null;

  @JsonProperty()
  public deviation: number | null;

  @JsonProperty({ name: 'comment' })
  public comments: string | null;

  constructor() {
    this.name = null;
    this.score = 0;
    this.grade = null;
    this.rank = null;
    this.rankOutOf = null;
    this.deviation = null;
    this.comments = null;
  }
}
