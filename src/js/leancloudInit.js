exports.leanCloudInit = !(function(){/* leancloud setup */
var AV = require('leancloud-storage');
var APP_ID = 'JHn4yFczw2FOccSojOwYgouJ-gzGzoHsz';
var APP_KEY = 'TjG98lSvrD39pcHf5EwhIxon';
var { Query, User } = AV;
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
})()