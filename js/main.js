gsap.registerPlugin(ScrollTrigger);
const $=(s,c=document)=>[...c.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion:reduce)').matches,dt=matchMedia('(min-width:981px)').matches;
$('h1,h2').forEach(h=>{const w=h.textContent.trim().split(' ');h.innerHTML=w.map((x,i)=>`<span class="wd"><span>${x}</span></span>`+(h.tagName=='H1'&&i==2?'<br>':'')).join(' ')});
const hd=$('header')[0];addEventListener('scroll',()=>hd.classList.toggle('s',scrollY>30),{passive:true});hd.classList.toggle('s',scrollY>30);
gsap.to('#prog',{scaleX:1,ease:'none',scrollTrigger:{scrub:.2,start:0,end:'max'}});
const nv=$('#nv')[0];$('#mb')[0].onclick=()=>nv.classList.toggle('o');
$('nav a,.chips a,.help a,.as').forEach(a=>a.addEventListener('click',()=>nv.classList.remove('o')));
$('.dd>button').forEach(b=>b.onclick=()=>{const d=b.parentNode,o=d.classList.contains('open');$('.dd').forEach(x=>x.classList.remove('open'));if(!o)d.classList.add('open')});
document.addEventListener('click',e=>{if(!e.target.closest('.dd'))$('.dd').forEach(x=>x.classList.remove('open'))});
try{if(localStorage.t=='d')document.documentElement.dataset.t='d'}catch(e){}
$('#th')[0].onclick=()=>{const d=document.documentElement,on=d.dataset.t=='d';on?delete d.dataset.t:d.dataset.t='d';try{localStorage.t=on?'l':'d'}catch(e){}};
const sv=$('.strip div')[0];sv.innerHTML+=sv.innerHTML;
// Einblenden beim Scrollen (blockiert nie das Scrollen)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target;io.unobserve(el);el.style.transitionDelay=(el.dataset.d||0)+'s';el.classList.add('in');setTimeout(()=>{el.classList.remove('rv','in');el.style.transitionDelay=''},1400)}}),{rootMargin:'0px 0px -6% 0px'});
if(!rm)$('.lead,.grid>a,.cost>div,.vc,.way,.tile,.sc,.adv .it,.tw,details,.note,.help,.steps>div,.nd').forEach(el=>{const sib=[...el.parentNode.children].indexOf(el);el.dataset.d=Math.min(sib,6)*.08;el.classList.add('rv');io.observe(el)});
if(!rm){gsap.from('.hero h1 .wd>span',{yPercent:115,stagger:.08,duration:1.1,ease:'power4.out'});
gsap.from('.hero .lead,.checks li,.hero .btn,.chips a,.chips span',{y:30,opacity:0,stagger:.05,duration:.8,delay:.3,ease:'power3.out',clearProps:'all'});
gsap.from('.tag',{x:-30,opacity:0,duration:.8,clearProps:'all'});gsap.from('.hv',{y:70,opacity:0,duration:1.2,delay:.4,ease:'power3.out',clearProps:'all'});
gsap.from('.cw .msg',{autoAlpha:0,y:20,stagger:1,duration:.7,delay:1.4,ease:'power3.out'});
$('h2').forEach(h=>gsap.from($('.wd>span',h),{yPercent:115,stagger:.07,duration:1,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 90%',once:true}}));
gsap.fromTo('.player',{scale:.86},{scale:1,ease:'none',scrollTrigger:{trigger:'.player',start:'top 100%',end:'top 40%',scrub:true}})}
$('.stats b').forEach(b=>{const n=+b.dataset.n,v={v:+(b.dataset.f||0)};ScrollTrigger.create({trigger:b,start:'top 92%',once:true,onEnter:()=>gsap.to(v,{v:n,duration:2,ease:'power2.out',onUpdate:()=>b.textContent=Math.round(v.v)})})});
$('.grid>a').forEach(a=>a.onpointermove=e=>{const r=a.getBoundingClientRect();a.style.setProperty('--x',e.clientX-r.left+'px');a.style.setProperty('--y',e.clientY-r.top+'px')});
if(dt&&!rm){addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to('.cw',{rotationY:x*7,rotationX:-y*5,transformPerspective:1000,duration:.8});gsap.to('.hv .dev',{x:x*-24,y:y*-16,duration:1})});
$('.btn').forEach(b=>{b.onpointermove=e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.2,y:(e.clientY-r.top-r.height/2)*.3,duration:.3})};b.onpointerleave=()=>gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'})})}
const tb=$('.tab');let k=0,iv;function sel(i){k=i;tb.forEach((x,j)=>x.setAttribute('aria-selected',j==i));const im=$('.frame img')[0];im.style.opacity=0;setTimeout(()=>{im.src=tb[i].dataset.img;im.style.opacity=1},250);clearInterval(iv);iv=setInterval(()=>sel((k+1)%tb.length),6000)}
tb.forEach((x,i)=>x.onclick=()=>sel(i));sel(0);
// Wächter: normaler Ablauf ohne Scroll-Sperre
const nd=$('.nd'),A=i=>nd.forEach((n,j)=>n.classList.toggle('a',j<=i));
const tl=gsap.timeline({paused:true});
tl.call(()=>{A(0);gsap.set('.nd:nth-child(2) .ph',{clipPath:'inset(0 100% 0 0)'})}).set('.pk',{opacity:1,left:'0%'}).to({},{duration:.8})
.call(()=>A(1)).to('.pk',{left:'33.3%',duration:.9,ease:'power2.inOut'}).to('.nd:nth-child(2) .ph',{clipPath:'inset(0 0% 0 0)',duration:.7},'<.3').to({},{duration:.6})
.call(()=>A(2)).to('.pk',{left:'66.6%',duration:.9,ease:'power2.inOut'}).to({},{duration:.6})
.call(()=>A(3)).to('.pk',{left:'100%',duration:.9,ease:'power2.inOut'}).to('.pk',{opacity:0,duration:.3});
ScrollTrigger.create({trigger:'.frow',start:'top 78%',once:true,onEnter:()=>tl.play()});
$('.replay')[0].onclick=()=>tl.restart();
const cv=$('#bg')[0],cx=cv.getContext('2d');let W,H,mx=.5,my=.5,t=0;function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}rs();addEventListener('resize',rs);addEventListener('pointermove',e=>{mx=e.clientX/innerWidth;my=e.clientY/innerHeight});
(function f(){t+=.008;cx.clearRect(0,0,W,H);for(let i=0;i<30;i++){cx.beginPath();cx.strokeStyle=`rgba(76,201,240,${.04+i/30*.13})`;for(let x=0;x<=W;x+=16){const y=H*(.1+i*.03)+Math.sin(x*.004+t+i*.25)*(24+i*1.5)+Math.sin(x*.012-t*1.4)*10*my+(mx-.5)*36*Math.exp(-Math.abs(x/W-mx)*5)*Math.cos(i);x?cx.lineTo(x,y):cx.moveTo(x,y)}cx.stroke()}requestAnimationFrame(f)})();
const faq=[["Was ist EIGENKERN?","MeineLokaleKI von Eigenkern: eine lokale KI für kleine Betriebe, die Fragen aus Ihren eigenen Unterlagen beantwortet, im Haus oder auf einem Server nur für Sie in Deutschland."],["Was bedeutet lokale KI?","Die KI läuft auf einem Gerät in Ihrem Büro. Ihre Unterlagen verlassen das Haus nicht."],["Kann das erste Einlesen schneller gehen?","Ja. Bei sehr großen Datenbeständen kann ein Rechenzentrum in Deutschland den ersten Import übernehmen, mit Auftragsverarbeitungsvertrag. Danach läuft alles wieder bei Ihnen."],["Was ist das Hybridmodell?","Ihre lokale KI bleibt der Kern. Ein Wächter erzeugt eine Schattenkopie mit Platzhaltern, damit Sie große Cloud-KIs nutzen können."],["Wie funktioniert der Wächter?","Er ersetzt Namen und vertrauliche Angaben durch Platzhalter. Erst die Antwort wird bei Ihnen wieder mit den echten Angaben zusammengeführt."],["Wann ist Hybrid sinnvoll?","Wenn Sie für schwierige Aufgaben die Stärke großer Cloud-KIs nutzen möchten, ohne echte Namen und vertrauliche Angaben herauszugeben. Der Wächter schickt nur die Schattenkopie."],["Wo liegen meine Daten?","Bei Ihnen im Haus oder auf einem Server ausschließlich für Sie in Deutschland."],["Brauche ich Vorkenntnisse?","Nein. Sie erhalten ein fertig eingerichtetes Werkzeug, wir schulen Ihr Team."],["Wie läuft der Start ab?","Wir prüfen vorab Ihre Ordner, gehen zuerst das größte Ärgernis an, liefern das fertig installierte System aus und schulen Ihr Team mit Einführungsvideos."],["Womit fangen Sie an?","Mit Ihren Unterlagen: Wir sehen sie vorab an und legen gemeinsam die Zielstruktur fest. Danach beginnen wir mit dem Thema, das Sie am meisten Zeit oder Nerven kostet."],["Was kostet das?","Einmalig Hardware und Software, danach nichts pro Frage und pro Kopf. Den Preis nennen wir nach einer Voranalyse Ihrer Unterlagen."],["Was passiert bei einem Defekt?","Innerhalb von 24 Stunden erhalten Sie ein Austauschgerät über unseren Hardwarepartner Wortmann."],["Kann ich von unterwegs zugreifen?","Ja, von jedem Endgerät über einen gesicherten Zugang."],["Kann ich vorher testen?","Ja, mit Ihren eigenen Unterlagen."],["Wer steckt hinter EIGENKERN?","Eigenkern GmbH & Co KG i. Gr., Lastrup."]];
$('.faq')[0].innerHTML=faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a||'Ausführliche Antwort wie auf eigenkern.de.'}</p></details>`).join('');
