(function(){
  var m=document.getElementById('pkModal'),o=document.getElementById('liveOpen'),d=document.getElementById('dmWin'),st=document.getElementById('dmStage'),cd=document.getElementById('dmCard'),dt=document.getElementById('dmTitle');
  if(!m||!o||!d)return;
  var last=null,dlast=null;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function open(e){e.preventDefault();last=document.activeElement;m.hidden=false;requestAnimationFrame(function(){m.classList.add('on')});document.documentElement.classList.add('pk-lock');var x=m.querySelector('.pk-x');if(x)x.focus()}
  function close(){closeDemo(true);m.classList.remove('on');document.documentElement.classList.remove('pk-lock');setTimeout(function(){m.hidden=true},260);if(last&&last.focus)last.focus()}
  function openDemo(tile){
    var src=tile.dataset.src||'',title=tile.dataset.title||'Demo',html;
    if(src.indexOf('drive:')===0){
      html='<iframe src="https://drive.google.com/file/d/'+esc(src.slice(6))+'/preview" title="'+esc(title)+' demo" allow="autoplay; fullscreen" allowfullscreen></iframe>';
    }else{
      html='<video controls autoplay playsinline preload="auto" poster="'+esc(tile.dataset.poster||'')+'" aria-label="'+esc(title)+' demo"><source src="'+esc(src)+'" type="video/mp4"></video>';
    }
    dlast=document.activeElement;dt.textContent=title;st.innerHTML=html;
    var feats=(tile.dataset.feat||'').split('|').filter(Boolean),a=tile.querySelector('.pk-link'),href=a&&a.getAttribute('href'),cta='';
    if(href&&href.charAt(0)!=='#')cta='<a class="dm-cta" href="'+esc(href)+'" target="_blank" rel="noopener">View on Fab</a>';
    else cta='<a class="dm-cta dm-req" href="#contact" data-dclose data-close>Request this project</a>';
    cd.innerHTML='<span class="dm-tag">Project delivered</span><p class="dm-desc">'+esc(tile.dataset.desc||'')+'</p><h4>Key features</h4><ul>'+
      feats.map(function(f,i){return '<li style="--i:'+i+'">'+esc(f)+'</li>'}).join('')+'</ul>'+cta;
    d.hidden=false;requestAnimationFrame(function(){d.classList.add('on')});
    var x=d.querySelector('.dm-x');if(x)x.focus();
  }
  function closeDemo(quick){
    if(d.hidden)return;
    d.classList.remove('on');st.innerHTML='';cd.innerHTML='';
    setTimeout(function(){d.hidden=true},quick?0:240);
    if(!quick&&dlast&&dlast.focus)dlast.focus();
  }
  o.addEventListener('click',open);
  m.addEventListener('click',function(e){
    if(e.target.closest('[data-close]')){close();return}
    if(e.target.closest('a'))return;
    var t=e.target.closest('.pk');if(t)openDemo(t);
  });
  d.addEventListener('click',function(e){if(e.target.closest('[data-close]')){close();return}if(e.target.closest('[data-dclose]'))closeDemo()});
  document.addEventListener('keydown',function(e){
    if(e.key!=='Escape')return;
    if(!d.hidden)closeDemo();else if(!m.hidden)close();
  });
})();
