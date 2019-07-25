import blogJSON from './../blog_md.json';
const blogs = typeof blogJSON === 'object'? blogJSON : JSON.parse(blogJSON);

const categoryGetter = () => {
  let arr = [];
  for(let [key] of Object.entries(blogs)){
    arr.push(key);
  }
  return arr;
}

const tagGetter = (cate) => {
  let allTags = [];
  // for(let [key,value] of Object.entries(blogs)){
    blogs[cate].map( i => {
      let tags = i["tag"];
      allTags = allTags.concat(tags);
    })
  // }
  return Array.from(new Set(allTags));
}

const postsForTagGetter = (cate,tag) => {
  let arr = [];
  // for(let [key,value] of Object.entries(blogs)){
    blogs[cate].map( i => {
      i["category"] = cate;
      let tags = i["tag"];
      if(tags.indexOf(tag) !== -1){
        arr.push(i);
      }
    })
  // }
  return arr;
}

const sortByCreatedAt = (arr) => {
  let temp = arr.map( blog => {
    blog['createdAt'] = new Date(blog['createdAt']);
    return blog;
  });
  temp = bubbleSort(temp,"createdAt");
  return temp;
}

const sortByTagLength = (arr) => {
  arr = arr.map( blog => {
    blog["tagLength"] = blog.tag.length;
    return blog;
  });
  arr = bubbleSort(arr,"tagLength");
  console.log(arr)
  return arr;
}

export {categoryGetter,tagGetter,postsForTagGetter,sortByCreatedAt,sortByTagLength};

const bubbleSort = (inp,prop) => {
  let sorted = [];
  while(inp.length){
    for(let i=0; i<inp.length -1;i++){
      if(!inp[i][prop]){
        inp[i][prop] = 0;
      }
      if(inp[i][prop] < inp[i+1][prop]){
        [inp[i],inp[i+1]] = [inp[i+1],inp[i]];
      }
    }
    sorted.unshift(inp.pop());
  }
  return sorted;
}
