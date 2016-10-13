export default function ProfileRoutes($stateProvider) {
    $stateProvider
        .state('app.profile', {
            url: "/profile",
            views: {
                'profile-tab': {
                    template: require('./profile.view.html'),
                    controller: 'ProfileCtrl',
                    controllerAs: 'profile'
                }
            }
        });
}
