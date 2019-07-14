import blogJSON from './../blog_md.json';
const blogs = typeof blogJSON === 'object'? blogJSON : JSON.parse(blogJSON);

const categoryGetter = () => {
  let arr = [];
  for(let [key] of Object.entries(blogs)){
    arr.push(key);
  }
  return arr;
}

const tagGetter = () => {
  let allTags = [];
  for(let [key,value] of Object.entries(blogs)){
    blogs[key].map( i => {
      let tags = i["tag"];
      allTags = allTags.concat(tags);
    })
  }
  return Array.from(new Set(allTags));
}

const postsForTagGetter = (tag) => {
  for(let [key,value] of Object.entries(blogs)){
    value.map( i => {
      let tags = i["tag"];
      if(tags.indexOf(tag) !== -1){
        console.log(i)
      }
    })
  }
}

const sortByCreatedAt = (arr) => {
  
}
export {categoryGetter,tagGetter,postsForTagGetter};