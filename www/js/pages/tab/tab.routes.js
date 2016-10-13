/**
 * Created by lujin on 2016/10/13.
 */

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      template: require('./tabs.view.html'),
      controller: 'TabController',
      controllerAs: 'tab'
    })
}
