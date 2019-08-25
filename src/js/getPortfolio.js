import Works from '@/data/works.json';
const works = Works instanceof Array? Works : Array.from(Works); 

console.log(works);

export default {works}