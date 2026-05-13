(function(){
  'use strict';

  // ===== CONFIG =====
  var STORAGE_KEY = 'tapestry-circle-members-auth';

  // 確定後に差し替え
  var ZOOM_URL      = 'https://us06web.zoom.us/j/5403853001?pwd=NnBrSmxBeWYxZXhuWkdIK1ZoZW5XQT09&omn=89153671389';
  var AI_COACH_URL  = 'https://thread-ai-coach-circle.vercel.app/';

  var gate = document.getElementById('gate');
  var main = document.getElementById('main');

  function safeGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }

  // ===== 自動ログイン =====
  if(safeGet(STORAGE_KEY) === 'ok'){
    gate.hidden = true;
    main.hidden = false;
    init();
  } else {
    gate.hidden = false;
    var input = document.getElementById('gate-input');
    setTimeout(function(){ input && input.focus(); }, 100);
    window.__afterUnlock = init;
  }

  function init(){
    bindLinks();
    bindLogout();
  }

  function bindLinks(){
    var zoom = document.getElementById('zoom-link');
    if(zoom){
      if(ZOOM_URL){
        zoom.href = ZOOM_URL;
      } else {
        zoom.setAttribute('aria-disabled','true');
        zoom.style.opacity = '.5';
        zoom.style.pointerEvents = 'none';
        zoom.textContent = 'Zoom URLは準備中';
      }
    }
    var coach = document.getElementById('coach-link');
    if(coach){
      if(AI_COACH_URL){
        coach.href = AI_COACH_URL;
      } else {
        coach.setAttribute('aria-disabled','true');
        coach.style.opacity = '.5';
        coach.style.pointerEvents = 'none';
        coach.textContent = 'AIコーチは準備中';
      }
    }
  }

  function bindLogout(){
    var btn = document.getElementById('logout');
    if(!btn) return;
    btn.addEventListener('click', function(){
      if(confirm('ログアウトしますか？')){
        try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
        location.reload();
      }
    });
  }
})();
