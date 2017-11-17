import {map} from "rxjs/operators";

export class MapGenParams {

  public title: String;
  public shortname: String;

// ------- gameParams
  public catchDistance: Number;
// - superSkillsList: TrapStory, AllSeeingEye, BackheadEyes
// - superSkillsSupply: None, OneRandom, OneOfEach

// ------- genParams
  public gps_center: Number;
  public max_distance: Number;
  public min_distance: Number;
  public total_foxes: Number;


  constructor() {
  }

}

export class MapParams {
  public params: MapGenParams;
  public foxes: string[];

  constructor() {
  }
}

enum GameState {
  NotStarted = 0,
  Playing = 1,
  Finished = 2,
  Error = 3,
}

export class GameStats {
  public foxesCatched: boolean[];
  public state: GameState;

  constructor(map_params: MapParams) {
    this.foxesCatched = new Array<boolean>(<number>map_params.params.total_foxes);
    this.state = GameState.NotStarted;
  }
}
