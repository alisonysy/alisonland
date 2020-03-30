import Works from '@/data/works.json';
const works = Works instanceof Array? Works : Array.from(Works); 

export default {works}