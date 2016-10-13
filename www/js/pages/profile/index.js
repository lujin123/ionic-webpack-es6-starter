import ProfileCtrl  from './profile.controller.js';
import routes       from './profile.routes.js';

export default angular.module('profile', [])
  .config(routes)
  .controller('ProfileCtrl', ProfileCtrl)
  .name
