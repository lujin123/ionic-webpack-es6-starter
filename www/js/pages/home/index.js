/**
 * Created by lujin on 2016/10/13.
 */

import HomeController from './home.controller';
import routes from './home.routes';

export default angular.module('app.home', [])
  .config(routes)
  .controller('HomeController', HomeController)
  .name
