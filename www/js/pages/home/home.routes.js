/**
 * Created by lujin on 2016/10/13.
 */

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: "/home",
      views: {
        'home-tab': {
          template: require('./home.view.html')
        }
      },
      controller: 'HomeController',
      controllerAs: 'home'
    })
}
