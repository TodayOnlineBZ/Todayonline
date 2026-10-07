/* Alleen op de homepage: scrollgedrag, mini-demo's, previews en het formulier */
import {reduce,$,all,pad,copyText} from "./site.js";
import {PREVIEW} from "../data/site.js";
import {TL,TLHERO} from "../data/illustrations.js";

/* Zin die woord voor woord oplicht */
var say=$("say"), words=[];
(function(){
  var txt=say.textContent, acc=say.getAttribute("data-acc"), cut=txt.indexOf(acc);
  say.setAttribute("aria-label",txt);
  say.innerHTML=txt.split(" ").map(function(w,i,arr){
    var pos=arr.slice(0,i).join(" ").length+(i?1:0);
    return '<span aria-hidden="true"'+(pos>=cut?' class="acc"':'')+'>'+w+'</span>';
  }).join(" ");
  words=all("span",say);
  if(reduce){words.forEach(function(w){w.classList.add("lit");});}
})();

/* ============ 5. Scrollgedrag (volgt de scroll, neemt hem nooit over) ============ */
var prog=$("prog"), secs=all("[data-sec]"), links=all(".nav [data-go]"), psteps=all(".pstep"), pline=document.querySelector(".pline i");
var ppn=$("ppn"), ppt=$("ppt"), ppsv=all("#ppvis svg"), ppbar=all("#ppbar i"), pxs=[], cur=-1;
if(!reduce){$("proc").classList.add("js-proc");pxs=all("[data-px]");}

function setStep(i){
  if(i===cur){return;} cur=i;
  psteps.forEach(function(li,k){li.classList.toggle("on",k===i);li.classList.toggle("done",k<i);});
  ppsv.forEach(function(s,k){s.classList.toggle("on",k===i);});
  ppbar.forEach(function(b,k){b.classList.toggle("on",k<=i);});
  ppn.textContent=pad(i+1); ppt.textContent=psteps[i].querySelector("h3").textContent;
  if(typeof syncDemos==="function"){syncDemos();}
}
function frame(){
  var vh=window.innerHeight, doc=document.documentElement, max=doc.scrollHeight-vh;
  prog.style.transform="scaleX("+(max>0?Math.min(1,window.scrollY/max):0)+")";

  /* actieve sectie in de navigatie */
  var act="";
  secs.forEach(function(s){var r=s.getBoundingClientRect(); if(r.top<vh*0.4&&r.bottom>vh*0.4){act=s.id;}});
  links.forEach(function(a){a.classList.toggle("on",a.getAttribute("data-go")===act);});

  /* actieve stap + voortgangslijn */
  var mark=vh*0.5, best=0;
  psteps.forEach(function(li,k){if(li.getBoundingClientRect().top<mark){best=k;}});
  setStep(best);
  var pr=pline.parentNode.getBoundingClientRect();
  pline.style.transform="scaleY("+Math.max(0,Math.min(1,(mark-pr.top)/pr.height))+")";

  if(reduce){return;}
  /* zin licht op */
  var sr=say.getBoundingClientRect(), p=(vh*0.85-sr.top)/(vh*0.5+sr.height), n=Math.round(Math.max(0,Math.min(1,p))*words.length);
  words.forEach(function(w,i){w.classList.toggle("lit",i<n);});
  /* parallax */
  pxs.forEach(function(el){
    var host=el.parentNode.getBoundingClientRect();
    if(host.bottom<-200||host.top>vh+200){return;}
    var d=(host.top+host.height/2)-vh/2;
    el.style.transform="translate3d(0,"+(d*parseFloat(el.getAttribute("data-px"))).toFixed(1)+"px,0)";
  });
}
var tick=false;
function onScroll(){if(!tick){tick=true;requestAnimationFrame(function(){frame();tick=false;});}}
window.addEventListener("scroll",onScroll,{passive:true});
window.addEventListener("resize",onScroll);

/* Reveals: alles is standaard zichtbaar; alleen wat onder de vouw staat schuift in beeld. */
if(!reduce&&"IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove("rv-pre");io.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"});
  all("[data-rv]").forEach(function(el){if(el.getBoundingClientRect().top>window.innerHeight*0.95){el.classList.add("rv-pre");io.observe(el);}});
}
frame();

/* ============ Mini-demo's: tijdlijn per illustratie, alleen actief wanneer in beeld ============ */
var demos=[], syncDemos=function(){};
(function(){
  if(reduce||!("IntersectionObserver" in window)){return;}
  function Demo(el,tl){this.el=el;this.tl=tl;this.timers=[];this.on=false;this.vis=false;
    this.cur=el.querySelector(".cur");this.pulse=el.querySelector(".pulse");this.pos=[0,0];}
  Demo.prototype.q=function(k){return all('[data-a="'+k+'"]',this.el);};
  Demo.prototype.at=function(ms,fn){var d=this;this.timers.push(setTimeout(function(){if(d.on){fn();}},ms));};
  Demo.prototype.move=function(x,y){this.pos=[x,y];if(this.cur){this.cur.style.transform="translate("+x+"px,"+y+"px)";}};
  Demo.prototype.run=function(){
    var d=this, tl=this.tl;
    all("[data-a]",d.el).forEach(function(n){n.classList.remove("in");});
    if(d.cur){d.cur.classList.remove("in");}
    d.at(500,function(){
      if(d.cur&&tl.start){d.cur.style.transition="none";d.move(tl.start[0],tl.start[1]);d.cur.getBoundingClientRect();d.cur.style.transition="";}
      tl.steps.forEach(function(st){
        d.at(st[0],function(){
          if(st[1]==="show"){d.q(st[2]).forEach(function(n){n.classList.add("in");});}
          else if(st[1]==="hide"){d.q(st[2]).forEach(function(n){n.classList.remove("in");});}
          else if(st[1]==="cur"){d.cur.classList.add("in");d.move(st[2],st[3]);}
          else if(st[1]==="curoff"){d.cur.classList.remove("in");}
          else if(st[1]==="click"&&d.pulse){d.pulse.setAttribute("cx",d.pos[0]);d.pulse.setAttribute("cy",d.pos[1]);d.pulse.classList.remove("go");d.pulse.getBoundingClientRect();d.pulse.classList.add("go");}
        });
      });
      d.at(tl.total,function(){d.run();});
    });
  };
  Demo.prototype.start=function(){if(this.on){return;}this.on=true;this.el.classList.add("anim");this.run();};
  Demo.prototype.stop=function(){if(!this.on){return;}this.on=false;this.timers.forEach(clearTimeout);this.timers=[];this.el.classList.remove("anim");
    all("[data-a]",this.el).forEach(function(n){n.classList.remove("in");});if(this.cur){this.cur.classList.remove("in");}};

  var hero=new Demo($("herodemo"),TLHERO), panel=ppsv.map(function(el,i){return new Demo(el,TL[i]);}),
      inline=all(".vis-m").map(function(el){return new Demo(el,TL[+el.getAttribute("data-demo")]);}), ppVis=false;
  demos=[hero].concat(panel,inline);
  syncDemos=function(){
    if(hero.vis){hero.start();}else{hero.stop();}
    panel.forEach(function(d,i){if(ppVis&&i===cur){d.start();}else{d.stop();}});
    inline.forEach(function(d){if(d.vis){d.start();}else{d.stop();}});
  };
  var dio=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.target===ppEl){ppVis=e.isIntersecting;return;}
      demos.forEach(function(d){if(d.el===e.target){d.vis=e.isIntersecting;}});
    });
    syncDemos();
  },{threshold:0.35});
  var ppEl=document.querySelector(".pp");
  dio.observe(ppEl); dio.observe(hero.el); inline.forEach(function(d){dio.observe(d.el);});

  /* Hero: raster licht op rond de muis */
  var heroSec=document.querySelector(".hero"), hx=0, hy=0, hq=false;
  heroSec.addEventListener("pointermove",function(e){
    if(e.pointerType!=="mouse"){return;}
    var r=heroSec.getBoundingClientRect(); hx=e.clientX-r.left; hy=e.clientY-r.top;
    if(!hq){hq=true;requestAnimationFrame(function(){heroSec.style.setProperty("--mx",hx+"px");heroSec.style.setProperty("--my",hy+"px");heroSec.classList.add("hot");hq=false;});}
  });
  heroSec.addEventListener("pointerleave",function(){heroSec.classList.remove("hot");});
})();

/* ============ Previews: lange screenshot die rustig op en neer scrolt ============ */
(function(){
  var items=all("[data-prev]").map(function(el){
    var img=el.querySelector("img"); if(!img){return null;}
    return {el:el,view:el.querySelector(".bview"),img:img,thumb:el.querySelector(".rail b"),st:el.querySelector(".st"),t:0,vis:false,hover:false,pin:false};
  }).filter(Boolean);
  if(!items.length){return;}
  /* korte screenshot: frame neemt de verhouding van het beeld over en blijft stilstaan */
  function fit(p){
    var nw=p.img.naturalWidth, nh=p.img.naturalHeight; if(!nw){return;}
    if(p.view.clientWidth*nh/nw<=p.view.clientHeight+2){
      p.fixed=true; p.view.style.aspectRatio=nw+" / "+nh; p.el.classList.add("still");
      if(p.st){p.st.hidden=true;} if(p.thumb){p.thumb.parentNode.hidden=true;}
    }
  }
  items.forEach(function(p){if(p.img.complete){fit(p);}else{p.img.addEventListener("load",function(){fit(p);});}});
  function paused(p){return p.hover||p.pin;}
  function mark(p){p.el.classList.toggle("paused",paused(p)); if(p.st){p.st.textContent=paused(p)?"pauze":"scrolt";}}
  items.forEach(function(p){
    p.el.addEventListener("pointerenter",function(e){if(e.pointerType==="mouse"&&!p.fixed){p.hover=true;mark(p);}});
    p.el.addEventListener("pointerleave",function(){p.hover=false;mark(p);});
    p.view.addEventListener("click",function(){if(!p.fixed){p.pin=!p.pin;mark(p);}});
  });
  if(reduce){items.forEach(function(p){if(p.st){p.st.textContent="stilstaand";}});return;}
  /* één been: grotendeels gelijkmatig, met een zachte aanloop en uitloop */
  function ease(x,a){var k=1/(1-a); return x<a?k*x*x/(2*a):(x>1-a?1-k*(1-x)*(1-x)/(2*a):k*(x-a/2));}
  function place(p){
    var vw=p.view.clientWidth, vh=p.view.clientHeight, ih=p.img.offsetHeight, dist=Math.max(0,ih-vh);
    if(dist<2){p.img.style.transform="none"; if(p.thumb){p.thumb.parentNode.hidden=true;} return;}
    var leg=Math.min(dist/(vw*PREVIEW.speed),PREVIEW.maxLeg||1e9), P=PREVIEW.pause, cyc=2*(leg+P), t=p.t%cyc, a=Math.min(0.2,1.2/leg), f;
    if(t<P){f=0;}else if(t<P+leg){f=ease((t-P)/leg,a);}else if(t<2*P+leg){f=1;}else{f=1-ease((t-2*P-leg)/leg,a);}
    p.img.style.transform="translate3d(0,"+(-dist*f).toFixed(2)+"px,0)";
    if(p.thumb){var th=Math.max(8,vh/ih*100); p.thumb.style.height=th+"%"; p.thumb.style.top=((100-th)*f)+"%";}
  }
  var last=0, running=false;
  function loop(now){
    var dt=Math.min(0.1,(now-last)/1000); last=now; var any=false;
    items.forEach(function(p){ if(!p.vis||p.fixed){return;} any=true; if(!paused(p)&&p.img.complete){p.t+=dt; place(p);} });
    if(any){requestAnimationFrame(loop);}else{running=false;}
  }
  function start(){if(!running){running=true;last=performance.now();requestAnimationFrame(loop);}}
  var po=new IntersectionObserver(function(es){
    es.forEach(function(e){items.forEach(function(p){if(p.el===e.target){p.vis=e.isIntersecting;}});});
    start();
  },{threshold:0.15});
  items.forEach(function(p){po.observe(p.el);});
  window.addEventListener("resize",function(){items.forEach(function(p){if(!p.fixed){place(p);}});});
})();

/* ============ Reviews: schuiven langzaam vanzelf, en je kunt zelf vegen, slepen of scrollen ============ */
(function(){
  var rv=$("reviews"); if(!rv){return;}
  var view=rv.querySelector(".rv-view"), group=rv.querySelector(".rv-group");
  if(reduce||!("IntersectionObserver" in window)){return;}  /* dan blijft het een gewone rij die je zelf scrolt */
  var SPEED=24, RESUME=2500;       /* pixels per seconde; wachttijd in ms na eigen scrollen */
  var pos=0, vis=false, hover=false, holdUntil=0, last=0, running=false;
  function half(){return group.offsetWidth;}
  function hold(){holdUntil=performance.now()+RESUME;}
  ["touchstart","touchmove","pointerdown","wheel","keydown"].forEach(function(ev){view.addEventListener(ev,hold,{passive:true});});
  view.addEventListener("pointerenter",function(e){if(e.pointerType==="mouse"){hover=true;}});
  view.addEventListener("pointerleave",function(){hover=false;});
  view.addEventListener("scroll",function(){
    if(Math.abs(view.scrollLeft-pos)<2){return;}   /* onze eigen stap */
    hold();
    var h=half(); if(view.scrollLeft>=h){view.scrollLeft-=h;}   /* eindeloos doorlopen, ook bij zelf vegen */
    pos=view.scrollLeft;
  },{passive:true});
  function loop(now){
    var dt=Math.min(0.1,(now-last)/1000); last=now;
    if(vis&&!hover&&now>holdUntil){
      pos+=SPEED*dt; var h=half(); if(pos>=h){pos-=h;}
      view.scrollLeft=pos;
    }
    if(vis){requestAnimationFrame(loop);}else{running=false;}
  }
  new IntersectionObserver(function(es){es.forEach(function(e){
    vis=e.isIntersecting;
    if(vis&&!running){running=true;last=performance.now();pos=view.scrollLeft;requestAnimationFrame(loop);}
  });},{threshold:0.1}).observe(rv);
})();

/* ============ Formulier: controleert de invoer en opent het bericht in het mailprogramma van de bezoeker ============ */
(function(){
  var f=$("cform"), to=f.getAttribute("data-to");
  var rules={
    "f-naam":function(v){return v.trim()?"":"Vul je naam in.";},
    "f-mail":function(v){return !v.trim()?"Vul je e-mailadres in.":(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())?"":"Dit e-mailadres klopt niet. Controleer of er een @ en een domein in staan.");},
    "f-idee":function(v){return v.trim().length>=20?"":"Vertel iets meer, minimaal een paar zinnen.";}
  };
  function check(id){
    var el=$(id), msg=rules[id](el.value);
    $("e-"+id.slice(2)).textContent=msg;
    if(msg){el.setAttribute("aria-invalid","true");}else{el.removeAttribute("aria-invalid");}
    return !msg;
  }
  Object.keys(rules).forEach(function(id){
    $(id).addEventListener("blur",function(){check(id);});
    $(id).addEventListener("input",function(){if($(id).hasAttribute("aria-invalid")){check(id);}});
  });
  f.addEventListener("submit",function(e){
    e.preventDefault();
    var bad=Object.keys(rules).filter(function(id){return !check(id);}), out=$("fresult");
    if(bad.length){out.innerHTML="";$(bad[0]).focus();return;}
    var txt="Naam: "+$("f-naam").value.trim()+"\nE-mail: "+$("f-mail").value.trim()+"\n\n"+$("f-idee").value.trim();
    var key=f.getAttribute("data-key"), btn=f.querySelector('button[type="submit"]');
    function fallback(lead){
      out.innerHTML='<div class="result"><p><b>'+lead+'</b> Kopieer je bericht en mail het naar <span style="user-select:all">'+to+'</span>.</p><pre id="fmsg"></pre><div class="actions"><button class="cbtn" type="button" id="fcopy">Kopieer bericht</button></div></div>';
      $("fmsg").textContent=txt;
      $("fcopy").addEventListener("click",function(){copyText(txt,this);});
    }
    if(!key){
      fallback("Je bericht staat klaar in je mailprogramma. Opent er niets?");
      window.location.href="mailto:"+to+"?subject="+encodeURIComponent("Nieuw project via todayonline.nl")+"&body="+encodeURIComponent(txt);
      return;
    }
    if($("f-bot").checked){return;}  /* onzichtbaar veld: alleen bots vinken dit aan */
    btn.disabled=true; out.innerHTML='<p class="hint">Bezig met versturen…</p>';
    fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
      body:JSON.stringify({access_key:key,subject:"Nieuw project via todayonline.nl",from_name:"TodayOnline website",name:$("f-naam").value.trim(),email:$("f-mail").value.trim(),message:$("f-idee").value.trim()})})
      .then(function(r){return r.json().then(function(j){return r.ok&&j.success;});})
      .then(function(ok){
        btn.disabled=false;
        if(ok){f.reset();out.innerHTML='<div class="result"><p><b>Verzonden.</b> Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.</p></div>';}
        else{fallback("Versturen is niet gelukt.");}
      })
      .catch(function(){btn.disabled=false;fallback("Versturen is niet gelukt.");});
  });
})();
