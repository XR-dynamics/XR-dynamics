(function(){
  var m=document.getElementById('pkModal'),o=document.getElementById('liveOpen');
  if(!m||!o)return;
  var last=null;
  function open(e){e.preventDefault();last=document.activeElement;m.hidden=false;requestAnimationFrame(function(){m.classList.add('on')});document.documentElement.classList.add('pk-lock');var x=m.querySelector('.pk-x');if(x)x.focus()}
  function close(){m.classList.remove('on');document.documentElement.classList.remove('pk-lock');setTimeout(function(){m.hidden=true},260);if(last&&last.focus)last.focus()}
  o.addEventListener('click',open);
  m.addEventListener('click',function(e){if(e.target.closest('[data-close]'))close()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden)close()});
})();
