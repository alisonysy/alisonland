看到前端群里有个题目：
```js
let json = [
    {id:1,parentId:0,name:'上海市'},
    {id:2,parentId:1,name:'杨浦区'},
    {id:3,parentId:1,name:'静安区'},
    {id:4,parentId:2,name:'黄兴路'},
    {id:5,parentId:3,name:'延吉中路'},
    {id:6,parentId:2,name:'西藏北路'},
    {id:7,parentId:3,name:'南京路'},
    {id:8,parentId:4,name:'1号楼'},
    {id:9,parentId:4,name:'2号楼'}
  ];
//需要转化为：
[{
  title:'City Name',
  id:1,
  children:[{
    title:'District Name',
    id:2,
    children:[{
      title:'Road',
      id:4,
      children:[{
        title:'Apartment',
        id:8
      }]
    },{...}]
  },{...}]
}]
```
以下是用**递归**的解题思路：
```js
let json = [
    {id:1,parentId:0,name:'上海市'},
    {id:2,parentId:1,name:'杨浦区'},
    {id:3,parentId:1,name:'静安区'},
    {id:4,parentId:2,name:'黄兴路'},
    {id:5,parentId:3,name:'延吉中路'},
    {id:6,parentId:2,name:'西藏北路'},
    {id:7,parentId:3,name:'南京路'},
    {id:8,parentId:4,name:'1号楼'},
    {id:9,parentId:4,name:'2号楼'}
  ];

// 根据每个对象的parentId排序，为了之后能按顺序删除已处理的对象
function sortByParentId(arr){
  arr.sort(function(prev,next){
    return prev.parentId - next.parentId; 
  })
  return arr;
}
json = sortByParentId(json);

// 按照最终需求的效果，处理每一个对象，如把name改为title，id保留，parentId移除，并增加children数组
function formEl(obj){
  let childArr = findChild(json,obj.id);
  let {name,id} = {...obj};

  // 此时的childArr只是找出了目前处理对象的children，但每个child本身还需要被单独处理
  // 如把name改为title，id保留，parentId移除，并增加children数组
  // 此处用到----------递归-----------
  if(childArr.length){ 
    childArr = childArr.map( (ent) => {
      return formEl(ent);
    })
  }
  return {title:name,id,chidren:childArr}
}

// 给定parentId和现有数组，找出并作为一个数组返回数组内对象Id与parentId相匹配的对象，并把已找出的对象从原有数组中删除
function findChild(arr,parentId){
  let child = [];
  let idToRm = []
  arr.map( (ent,idx,array) => {
    if(ent.parentId === parentId){
      child.push(ent);
      idToRm.push(idx)
    }
  })
  arr.splice(idToRm[0],idToRm.length)
  return child;
}

let re = formEl(json[0]);
console.log(re);
/* {
*   title:'上海市',
*   id:1,
*   children:[{
*     title:'杨浦区',
*     id:2,
*     children:[{
*       title:'黄兴路'，
*       id:4,
*       children:[{
*         title:'1号楼'，
*         id:8,
*         children:[]
*       },{
*         title:'2号楼',
*         id:9,
*         children:[]
*       }]
*     },{...}]
*   },{...}]
  }
*/ 
```
