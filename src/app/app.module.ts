import {NgModule, ErrorHandler, Injectable, Injector} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from "@angular/http";
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// DeviceOrientationCompassHeading is an interface for compass
// import {DeviceOrientation} from '@ionic-native/device-orientation';
import {DeviceOrientation, DeviceOrientationCompassHeading} from '@ionic-native/device-orientation';
import {MovieService} from "../services/rest/movie-service";
import { Data } from '../providers/data/data';
import {IonicStorageModule} from "@ionic/storage";

// import {dev} from '@ionic/app-scripts/config/webpack.config.js';

// constructor(private deviceOrientation: DeviceOrientation) { }

// import {Pro} from '@ionic/pro';
//
// const IONIC_APP_ID = dev.process.env.IONIC_APP_ID;
// const APP_VERSION = "0.0.1";
// const IonicPro = Pro.init(IONIC_APP_ID, {
//   appVersion: APP_VERSION
// });

// @Injectable()
// export class MyErrorHandler implements ErrorHandler {
//   ionicErrorHandler: IonicErrorHandler;
//
//   constructor(injector: Injector) {
//     try {
//       this.ionicErrorHandler = injector.get(IonicErrorHandler);
//     } catch (e) {
//       // Unable to get the IonicErrorHandler provider, ensure
//       // IonicErrorHandler has been added to the providers list below
//     }
//   }
//
//   handleError(err: any): void {
//     IonicPro.monitoring.handleNewError(err);
//     // Remove this if you want to disable Ionic's auto exception handling
//     // in development mode.
//     this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
//   }
// }

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceOrientation,
    MovieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    // [{provide: ErrorHandler, useClass: MyErrorHandler}]
  ]
})
export class AppModule {
}
