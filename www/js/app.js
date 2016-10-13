// Ionic Starter App
import 'ionic.app.scss';

import router from './app.router';

import TabModule from './pages/tab';
import HomeModule from './pages/home';
import ProfileModule from './pages/profile';

angular
  .module('starter', [
    'ionic',

    ProfileModule,
    TabModule,
    HomeModule
  ])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(router);
