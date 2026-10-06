/* Gedeeld op elke pagina: menu, ankerlinks en kopieerknoppen */
export var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export var $=function(id){return document.getElementById(id);};
export function all(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel));}
export function pad(n){return (n<10?"0":"")+n;}

/* ============ 4. Navigatie ============ */
var nav=$("nav"), burger=$("burger");
function closeMenu(){nav.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.setAttribute("aria-label","Menu openen");}
burger.addEventListener("click",function(){
  var open=!nav.classList.contains("open");
  nav.classList.toggle("open",open);
  burger.setAttribute("aria-expanded",String(open));
  burger.setAttribute("aria-label",open?"Menu sluiten":"Menu openen");
});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeMenu();}});
document.addEventListener("click",function(e){
  var a=e.target.closest("[data-go]");
  if(a){
    var t=$(a.getAttribute("data-go"));
    if(!t){closeMenu();return;}
    if(t){e.preventDefault();closeMenu();
      if(a.getAttribute("data-go")==="top"){window.scrollTo({top:0,behavior:reduce?"auto":"smooth"});}
      else{t.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});}
    }
    return;
  }
  var c=e.target.closest("[data-copy]");
  if(c){copyText(c.getAttribute("data-copy"),c);}
});
export function copyText(txt,btn){
  var done=function(ok){var o=btn.getAttribute("data-label")||btn.textContent;btn.setAttribute("data-label",o);btn.textContent=ok?"Gekopieerd":"Selecteer en kopieer";setTimeout(function(){btn.textContent=o;},1800);};
  try{navigator.clipboard.writeText(txt).then(function(){done(true);},function(){done(false);});}catch(err){done(false);}
}

