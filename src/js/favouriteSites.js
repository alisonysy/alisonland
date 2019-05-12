function fetchLeanCloudData(){
  var leancloudInit = require('./leancloudInit');
  var AV = require('leancloud-storage');
  var query = new AV.Query("FavouriteSites");
  return    query.find()
  // var FavSite = AV.Object.extend('FavouriteSites');
  // var favSite = new FavSite();
  // favSite.save({
  //   url:'',
  //   title:'',
  //   abstract:'',
  //   recom:0,
  //   category:'',
  //   tag:''
  // }).then(function(object) {
  //   console.log(object);
  // })
};

export default new fetchLeanCloudData();

