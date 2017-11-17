import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GameStats, MapGenParams, MapParams} from "../../game/game-params";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public maps;
  public cur_map;
  public cur_stats;

  constructor(public navCtrl: NavController) {
    this.cur_map = null;
    this.cur_stats = null;
  }

  ionViewDidLoad() {

    let m = new MapParams();
    m.params = new MapGenParams();
    m.params.total_foxes = 5;
    m.params.title = "The nice game";
    m.params.shortname = "firstgame";

    let st = new GameStats(m);

    this.maps = [m
    ];
    // this.cur_map = this.maps[0];
    // this.cur_stats = st;
  }

  selectItem(item: MapParams) {
    this.cur_map = item;
    this.cur_stats = new GameStats(this.cur_map);
  }

  addItem() {

  }
}
