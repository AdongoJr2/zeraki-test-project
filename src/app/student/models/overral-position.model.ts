import { JsonProperty } from 'json-object-mapper';

export default class Position {
  @JsonProperty()
  public deviation: number;

  @JsonProperty({ name: 'position'})
  public position: number | null;

  @JsonProperty({ name: 'position_out_of'})
  public positionOutOf: number | null;

  constructor() {
    this.deviation = 0;
    this.position = null;
    this.positionOutOf = null;
  }

}
