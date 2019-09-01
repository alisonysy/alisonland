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
  
  activateLi(movingUl,curId);
  
  arrowLf.on('click',()=>{
    curId < 1? curId : curId--;
    movingUl.css({
      transform:`translateX(-${offsetWid*curId}px)`,
      transition:'all .5s'
    });
    activateLi(movingUl,curId);
  });

  arrowRt.on('click',()=>{
    curId < lens - 1? curId++ : curId;
    movingUl.css({
      transform:`translateX(-${offsetWid*curId}px)`,
      transition:'all .5s'
    });
    activateLi(movingUl,curId);
  });

  function activateLi(el,id){
    el.find('li').eq(id)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }
}