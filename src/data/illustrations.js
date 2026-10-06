/* Illustraties van het stappenplan en hun tijdlijnen. Getekend in de merkkleuren via CSS-klassen. */
var FRAME='<rect class="s" x="20" y="20" width="360" height="240" rx="8"/><path class="s" d="M20 48H380"/><circle class="f" cx="36" cy="34" r="3"/><circle class="f" cx="48" cy="34" r="3"/><circle class="f" cx="60" cy="34" r="3"/>';
var CUR='<circle class="pulse" r="10" cx="0" cy="0"/><g class="cur"><path d="M0 0V16L4.6 12.2L7.6 18.6L10.2 17.4L7.2 11.2H12.8Z"/></g>';
function g(a,inner,fly){return '<g data-a="'+a+'"'+(fly?' class="fly" style="--fx:'+fly[0]+'px;--fy:'+fly[1]+'px"':'')+'>'+inner+'</g>';}
function pill(x,y,w,t){return '<rect class="s" x="'+x+'" y="'+y+'" width="'+w+'" height="26" rx="13"/><text x="'+(x+w/2)+'" y="'+(y+17)+'" text-anchor="middle">'+t+'</text>';}
function box(x,y,w,t){return '<rect class="s" x="'+x+'" y="'+y+'" width="'+w+'" height="32" rx="4"/><text x="'+(x+w/2)+'" y="'+(y+20)+'" text-anchor="middle">'+t+'</text>';}
export const VIS = [
  /* 1 Kennismaken: wensen verschijnen een voor een */
  g("b1",'<rect class="s" x="30" y="34" width="210" height="62" rx="12"/><rect class="b" x="48" y="54" width="150" height="6" rx="3"/><rect class="b" x="48" y="70" width="104" height="6" rx="3"/>')+
  g("b2",'<rect class="as" x="160" y="112" width="210" height="62" rx="12"/><rect class="b" x="178" y="132" width="160" height="6" rx="3"/><rect class="b" x="178" y="148" width="90" height="6" rx="3"/>')+
  g("p1",pill(30,214,78,"bedrijf"))+g("p2",pill(116,214,76,"wensen"))+g("p3",pill(200,214,60,"stijl"))+g("p4",pill(268,214,70,"doelen")),

  /* 2 Richting bepalen: cursor kiest een onderdeel, de indeling ontstaat */
  g("h",box(160,30,80,"home"))+'<rect class="dash" data-a="sel" data-rest="0" x="153" y="23" width="94" height="46" rx="7"/>'+
  g("ln",'<path class="s" d="M200 62V92M62 92H338M62 92V112M154 92V112M246 92V112M338 92V112"/>')+
  g("c1",box(22,112,80,"diensten"))+g("c2",box(114,112,80,"werk"))+g("c3",box(206,112,80,"over"))+g("c4",box(298,112,80,"contact"))+
  g("dv",'<path class="s" d="M30 190H370"/>')+
  g("sw",'<circle class="f" cx="50" cy="228" r="16"/><circle class="a" cx="94" cy="228" r="16"/><circle class="s" cx="138" cy="228" r="16"/>')+
  g("aa",'<text x="190" y="240" style="font-family:var(--f-display);font-size:34px;font-weight:700;letter-spacing:-1px">Aa</text><rect class="b" x="252" y="216" width="110" height="6" rx="3"/><rect class="b" x="252" y="232" width="74" height="6" rx="3"/>')+CUR,

  /* 3 Preview bekijken: klik op een onderdeel, er verschijnt een wijziging */
  g("f",FRAME)+
  g("c",'<rect class="b" x="40" y="70" width="140" height="12" rx="3"/><rect class="b" x="40" y="90" width="104" height="12" rx="3"/><rect class="b" x="40" y="118" width="150" height="5" rx="2"/><rect class="b" x="40" y="130" width="120" height="5" rx="2"/><rect class="a" x="40" y="150" width="84" height="24" rx="12"/><rect class="b" x="40" y="204" width="96" height="36" rx="4"/><rect class="b" x="152" y="204" width="96" height="36" rx="4"/><rect class="b" x="264" y="204" width="96" height="36" rx="4"/><rect class="s" x="214" y="66" width="146" height="112" rx="4"/>')+
  '<path class="s" data-a="diag" d="M214 178L360 66"/>'+
  '<g data-a="chg" data-rest="0"><rect class="b" x="220" y="72" width="134" height="100" rx="3"/><circle class="a" cx="252" cy="102" r="11"/><path class="s" d="M220 172l42-40 30 26 24-28 38 42"/></g>'+
  g("pin",'<circle class="a" cx="338" cy="92" r="13"/><text class="ta" x="338" y="96" text-anchor="middle">1</text>')+CUR,

  /* 4 Bouwen en verfijnen: onderdelen schuiven op hun plek */
  g("dev",'<rect class="s" x="22" y="46" width="216" height="146" rx="6"/><path class="s" d="M22 66H238M100 192V214M160 192V214M80 214H180"/><rect class="s" x="254" y="76" width="72" height="104" rx="6"/><rect class="s" x="340" y="106" width="42" height="76" rx="6"/>')+
  g("d1",'<rect class="b" x="38" y="82" width="90" height="10" rx="3"/><rect class="b" x="38" y="100" width="64" height="10" rx="3"/>',[-22,-34])+
  g("d2",'<rect class="a" x="38" y="124" width="50" height="16" rx="8"/>',[-26,30])+
  g("d3",'<rect class="b" x="150" y="80" width="72" height="62" rx="3"/>',[34,-30])+
  g("d4",'<rect class="b" x="38" y="158" width="184" height="18" rx="3"/>',[0,44])+
  g("t1",'<rect class="b" x="264" y="90" width="52" height="8" rx="3"/><rect class="a" x="264" y="106" width="32" height="12" rx="6"/><rect class="b" x="264" y="128" width="52" height="40" rx="3"/>',[0,-40])+
  g("m1",'<rect class="b" x="348" y="118" width="26" height="6" rx="2"/><rect class="a" x="348" y="130" width="18" height="8" rx="4"/><rect class="b" x="348" y="146" width="26" height="26" rx="2"/>',[0,-40])+CUR,

  /* 5 Live en verder: de live website wisselt tussen desktop en mobiel */
  g("desk",FRAME+'<rect class="s" x="84" y="26" width="200" height="16" rx="8"/><text x="96" y="38">jouwbedrijf.nl</text><circle class="as" cx="200" cy="126" r="40"/><path class="as" d="M181 127l13 13 27-29" stroke-linecap="round" stroke-linejoin="round"/>')+
  '<g data-a="mob" data-rest="0"><rect class="s" x="146" y="22" width="108" height="178" rx="14"/><path class="s" d="M186 34H214"/><circle class="as" cx="200" cy="104" r="28"/><path class="as" d="M187 105l9 9 19-20" stroke-linecap="round" stroke-linejoin="round"/><rect class="b" x="164" y="152" width="72" height="6" rx="3"/><rect class="b" x="176" y="166" width="48" height="6" rx="3"/></g>'+
  g("live",'<circle class="a" cx="44" cy="234" r="5"/><text x="58" y="238">website is live</text>')+
  '<rect class="s" x="316" y="222" width="24" height="16" rx="2"/><path class="s" d="M322 243H334"/><rect class="s" x="352" y="220" width="12" height="20" rx="3"/>'+
  '<path class="as" data-a="ud" d="M316 250H340"/><path class="as" data-a="um" data-rest="0" d="M350 250H366"/>'+CUR
];
/* Tijdlijnen: [ms, actie, ...]. "cur" verplaatst de cursor, "click" geeft een klikpuls op die plek. */
export const TL = [
  {total:7600,steps:[[300,"show","b1"],[1200,"show","b2"],[2100,"show","p1"],[2450,"show","p2"],[2800,"show","p3"],[3150,"show","p4"]]},
  {total:9000,start:[300,84],steps:[[200,"show","h"],[200,"show","dv"],[600,"cur",226,54],[1600,"click"],[1650,"show","sel"],[2100,"show","ln"],[2400,"show","c1"],[2600,"show","c2"],[2800,"show","c3"],[3000,"show","c4"],[3500,"hide","sel"],[3600,"cur",102,236],[4600,"click"],[4650,"show","sw"],[5000,"show","aa"],[5700,"curoff"]]},
  {total:8600,start:[334,236],steps:[[200,"show","f"],[500,"show","c"],[500,"show","diag"],[1200,"cur",300,126],[2200,"click"],[2250,"show","pin"],[3100,"hide","diag"],[3200,"show","chg"],[4300,"hide","pin"],[4500,"curoff"]]},
  {total:9000,start:[150,244],steps:[[200,"show","dev"],[700,"cur",84,98],[800,"show","d1"],[1500,"cur",64,134],[1600,"show","d2"],[2200,"cur",188,112],[2300,"show","d3"],[2900,"cur",130,168],[3000,"show","d4"],[3600,"cur",292,132],[3700,"show","t1"],[4300,"cur",362,148],[4400,"show","m1"],[5200,"curoff"]]},
  {total:9600,start:[280,180],steps:[[200,"show","desk"],[200,"show","live"],[200,"show","ud"],[2200,"cur",358,232],[3200,"click"],[3250,"hide","desk"],[3250,"hide","ud"],[3450,"show","mob"],[3450,"show","um"],[4600,"cur",328,232],[5700,"click"],[5750,"hide","mob"],[5750,"hide","um"],[5950,"show","desk"],[5950,"show","ud"],[6500,"curoff"]]}
];
export const TLHERO = {total:12000,start:[206,130],steps:[[2600,"cur",184,72],[3600,"click"],[3650,"show","sel"],[4900,"hide","sel"],[5000,"cur",46,86],[6000,"click"],[6050,"show","ring"],[6800,"hide","ring"],[7100,"curoff"]]};
export function svg(i,cls,title){return '<svg class="demo '+cls+'" data-demo="'+i+'" viewBox="0 0 400 280" role="img" aria-label="Illustratie bij stap '+(i+1)+': '+(title||'')+'">'+VIS[i]+'</svg>';}
