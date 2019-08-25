export function swiperInit(){
  let movingUl= $('ul');
  let curId = 0;
  let lens = $('ul li').length;
  let offsetWid = $('ul li:first-of-type')[0].offsetWidth;
  let arrowRt = $('#arrowRt');
  let arrowLf = $('#arrowLf');

  $(window).on('resize',()=>{
    offsetWid = $('ul li:first-of-type')[0].offsetWidth;
  });
  
  arrowLf.on('click',()=>{
    curId < 1? curId : curId--;
    movingUl.css({
      transform:`translateX(-${offsetWid*curId}px)`,
      transition:'all .5s'
    })
  });

  arrowRt.on('click',()=>{
    curId < lens - 1? curId++ : curId;
    movingUl.css({
      transform:`translateX(-${offsetWid*curId}px)`,
      transition:'all .5s'
    })
  })
}