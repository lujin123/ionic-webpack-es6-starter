/**
 * Created by lujin on 2016/10/13.
 */

import TabController from './tab.controller';
import routes from './tab.routes';

export default angular.module('app.tabs', [])
  .config(routes)
  .controller('TabController', TabController)
  .name
