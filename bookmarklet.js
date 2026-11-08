(async()=>{
const S=ms=>new Promise(r=>setTimeout(r,ms));
const W=(n,o)=>{if(n.shadowRoot)W(n.shadowRoot,o);for(const c of n.children||[])W(c,o);if(n.tagName==='GRAVITY-LIST-ENTRY-NEW'&&n.getAttribute('type')==='boxed')o.push(n);return o};
const up=e=>e.parentElement||(e.getRootNode&&e.getRootNode().host)||null;
const kind=/\/registrations/.test(location.pathname)?'reg':/\/matches/.test(location.pathname)?'matches':'';
if(location.hostname!=='atlas.redbull.com'||!kind){alert('Ouvre l’onglet Registrations ou Matches du qualifier sur Atlas, puis reclique sur le favori.');return}
const find=()=>{const L=W(document.body,[]);if(!L.length)return null;let s=up(L[0]);while(s&&!(s.scrollHeight>s.clientHeight+10&&/(auto|scroll)/.test(getComputedStyle(s).overflowY)))s=up(s);return(!s||s===document.documentElement||s===document.body)?document.scrollingElement:s};
let sc=find();
if(!sc){alert(kind==='reg'?'Aucun inscrit visible sur cette page.':'Aucun match visible sur cette page.');return}
const M=new Map();
const grab=()=>{for(const e of W(document.body,[])){const r=up(e),di=r&&r.getAttribute&&r.getAttribute('data-index');const t=e.getBoundingClientRect().top+window.scrollY;const y=di!=null?+di:1e6+Math.round(t/20);M.set(y,kind==='reg'?(e.getAttribute('heading')||'').trim():[e.getAttribute('heading')||'',(e.innerText||'').replace(/\s+/g,' ').trim()])}};
let same=0,lh=-1;
for(let i=0;i<300&&same<3;i++){sc=find()||sc;grab();sc.scrollTop=sc.scrollHeight;sc.dispatchEvent(new Event('scroll'));await S(900);sc=find()||sc;if(sc.scrollHeight===lh)same++;else{same=0;lh=sc.scrollHeight}}
for(let pass=0;pass<3;pass++){
sc=find()||sc;sc.scrollTop=0;await S(800);
for(let i=0;i<8000;i++){sc=find()||sc;grab();const b=sc.scrollTop;sc.scrollTop=b+43;await S(120);if((find()||sc).scrollTop===b){await S(500);grab();break}}
const ks=[...M.keys()].filter(k=>k<1e6);const mx=Math.max(-1,...ks);let gap=false;for(let k=0;k<=mx;k++)if(!M.has(k)){gap=true;break}
if(!gap)break}
let m=[...M.entries()].sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
if(kind==='reg')m=[...new Set(m.filter(Boolean))];
const id=(location.pathname.match(/qualifiers\/([0-9a-f-]+)/)||[])[1]||'';
const out=JSON.stringify({atlas:1,kind,id,at:Date.now(),m});
let copied=false;try{await navigator.clipboard.writeText(out);copied=true}catch(_){}
const box=document.createElement('div');
box.style.cssText='position:fixed;inset:auto 16px 16px auto;z-index:2147483647;background:#fff;color:#111;border:2px solid #1d7a4c;border-radius:10px;padding:14px;width:min(420px,calc(100vw - 32px));font:14px system-ui;box-shadow:0 8px 30px rgba(0,0,0,.25)';
const p=document.createElement('div');p.textContent=m.length+(kind==='reg'?' inscrits récupérés. ':' matchs récupérés. ')+(copied?'C’est copié : colle-le dans la page L’Affrontement N7.':'Clique sur Copier, puis colle dans la page L’Affrontement N7.');
const ta=document.createElement('textarea');ta.value=out;ta.readOnly=true;ta.style.cssText='width:100%;height:70px;margin:8px 0;font:12px monospace';
const bc=document.createElement('button');bc.textContent='Copier';bc.style.cssText='padding:6px 12px;margin-right:8px;cursor:pointer';
bc.onclick=async()=>{try{await navigator.clipboard.writeText(out);bc.textContent='Copié ✓'}catch(_){ta.select();document.execCommand('copy');bc.textContent='Copié ✓'}};
const bx=document.createElement('button');bx.textContent='Fermer';bx.style.cssText='padding:6px 12px;cursor:pointer';bx.onclick=()=>box.remove();
box.append(p,ta,bc,bx);document.body.appendChild(box);
})();
