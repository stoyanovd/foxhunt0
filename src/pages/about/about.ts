import {Component} from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {GameStats, MapGenParams, MapParams} from "../../game/game-params";
import {LoadingController} from 'ionic-angular';
import {Data} from "../../providers/data/data";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public maps;
  public cur_map;
  public cur_stats;

  public cur_meta;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              public loadingCtrl: LoadingController, public dataService: Data) {
    this.cur_map = null;
    this.cur_stats = null;

    this.dataService.getData().then((res) => {

      if(res){
        this.cur_meta = res;
      }

    });

  }

  ionViewDidLoad() {

    let m = new MapParams();
    m.params = new MapGenParams();
    m.params.total_foxes = 5;
    m.params.title = "The nice game";
    m.params.shortname = "firstgame";

    // let st = new GameStats(m);

    this.maps = [m
    ];
    // this.cur_map = this.maps[0];
    // this.cur_stats = st;
  }

  selectItem(item: MapParams) {
    this.cur_map = item;
    this.cur_stats = new GameStats(this.cur_map);


    this.dataService.save([this.cur_map.params.title]);
  }

  addItem() {

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
