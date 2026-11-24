import Head from "next/head";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const regions = [
  {name:"Kyushu",x:155,y:444,info:"Porta de entrada do comércio português no século XVI; região do clã Shimazu.",d:"M112 406 L148 389 190 410 181 451 155 492 125 475 137 445 110 431 Z"},
  {name:"Shikoku",x:258,y:415,info:"Ilha associada ao clã Chosokabe durante a era Sengoku.",d:"M205 410 L249 394 306 400 293 425 246 442 210 432 Z"},
  {name:"Chugoku",x:245,y:359,info:"Região ocidental de Honshu, marcada pela expansão do clã Mori.",d:"M160 383 L193 350 244 330 310 325 330 362 285 384 220 382 180 400 Z"},
  {name:"Kansai",x:358,y:346,info:"Kyoto foi sede imperial; Osaka tornou-se centro do poder de Toyotomi Hideyoshi.",d:"M310 325 L360 298 402 311 418 349 383 386 330 362 Z"},
  {name:"Chubu",x:454,y:285,info:"Abriga o monte Fuji e antigas províncias como Kai e Shinano.",d:"M360 298 L401 251 443 230 485 238 510 280 482 327 418 349 402 311 Z"},
  {name:"Kanto",x:535,y:291,info:"Edo tornou-se sede do xogunato Tokugawa em 1603.",d:"M485 238 L543 232 574 267 559 307 528 335 482 327 510 280 Z"},
  {name:"Tohoku",x:572,y:166,info:"Norte de Honshu, associado ao clã Date e à cidade de Sendai.",d:"M543 232 L532 190 550 151 545 106 588 88 613 130 600 180 574 267 Z"},
  {name:"Ezo",x:650,y:65,info:"Atual Hokkaido, território historicamente habitado pelos povos Ainu.",d:"M588 88 L605 61 596 30 641 40 672 14 715 45 744 52 712 85 661 99 630 80 613 110 Z"}
];

const landmarks = [
  {
    "id": "nagasaki",
    "name": "Nagasaki",
    "region": "Kyushu",
    "type": "city",
    "x": 130,
    "y": 456,
    "minZoom": 2,
    "info": "Porto aberto ao comércio português em 1571; tornou-se um centro de intercâmbio com o exterior."
  },
  {
    "id": "kumamoto",
    "name": "Castelo de Kumamoto",
    "region": "Kyushu",
    "type": "castle",
    "x": 164,
    "y": 465,
    "minZoom": 2.5,
    "info": "Grande fortaleza cuja construção por Kato Kiyomasa foi concluída em 1607."
  },
  {
    "id": "kochi",
    "name": "Castelo de Kochi",
    "region": "Shikoku",
    "type": "castle",
    "x": 253,
    "y": 428,
    "minZoom": 2,
    "info": "Construído no início do período Edo sob Yamauchi Kazutoyo."
  },
  {
    "id": "ganryu",
    "name": "Ilha Ganryu",
    "region": "Chugoku",
    "type": "event",
    "x": 184,
    "y": 390,
    "minZoom": 2,
    "info": "Ilha no estreito de Kanmon, tradicionalmente associada ao duelo entre Musashi e Sasaki Kojiro em 1612."
  },
  {
    "id": "itsukushima",
    "name": "Santuário de Itsukushima",
    "region": "Chugoku",
    "type": "temple",
    "x": 228,
    "y": 373,
    "minZoom": 2.5,
    "info": "Santuário xintoísta conhecido pelo torii sobre a água; recebeu o patrocínio de Taira no Kiyomori no século XII."
  },
  {
    "id": "himeji",
    "name": "Castelo de Himeji",
    "region": "Kansai",
    "type": "castle",
    "x": 319,
    "y": 350,
    "minZoom": 2.5,
    "info": "A estrutura principal atual foi concluída em 1609, sob Ikeda Terumasa."
  },
  {
    "id": "kyoto",
    "name": "Kyoto",
    "region": "Kansai",
    "type": "city",
    "x": 374,
    "y": 324,
    "minZoom": 2,
    "info": "Sede imperial durante grande parte da história japonesa."
  },
  {
    "id": "osaka",
    "name": "Castelo de Osaka",
    "region": "Kansai",
    "type": "castle",
    "x": 376,
    "y": 367,
    "minZoom": 2,
    "info": "Toyotomi Hideyoshi iniciou sua construção em 1583."
  },
  {
    "id": "sekigahara",
    "name": "Sekigahara",
    "region": "Chubu",
    "type": "event",
    "x": 410,
    "y": 294,
    "minZoom": 2,
    "info": "Local da batalha de 1600 que consolidou a ascensão de Tokugawa Ieyasu."
  },
  {
    "id": "fuji",
    "name": "Monte Fuji",
    "region": "Chubu",
    "type": "nature",
    "x": 477,
    "y": 310,
    "minZoom": 2.5,
    "info": "Montanha sagrada e importante símbolo cultural e religioso do Japão."
  },
  {
    "id": "edo",
    "name": "Castelo de Edo",
    "region": "Kanto",
    "type": "castle",
    "x": 548,
    "y": 285,
    "minZoom": 2,
    "info": "Centro do governo do xogunato Tokugawa a partir de 1603."
  },
  {
    "id": "sendai",
    "name": "Sendai",
    "region": "Tohoku",
    "type": "city",
    "x": 580,
    "y": 190,
    "minZoom": 2,
    "info": "Cidade desenvolvida por Date Masamune no início do século XVII."
  },
  {
    "id": "matsumae",
    "name": "Castelo de Matsumae",
    "region": "Ezo",
    "type": "castle",
    "x": 620,
    "y": 83,
    "minZoom": 2,
    "info": "Fortaleza do sul de Ezo; o castelo atual remonta ao fim do período Edo."
  }
];
const categories = {castle:"Castelos",city:"Cidades",temple:"Santuários",event:"Locais históricos",nature:"Natureza"};
const symbols = {castle:"城",city:"町",temple:"社",event:"史",nature:"山"};

const storageKey="ganryutab.atlas.progress.v1";
const missions=[
  {id:"first",title:"Primeiros passos",ids:["ganryu"],reward:25,question:"Em que ano teria ocorrido o duelo na ilha Ganryu?",options:["1600","1612","1583"],answer:1},
  {id:"power",title:"Centros do poder",ids:["kyoto","osaka","edo"],reward:50,question:"Quem iniciou a construção do Castelo de Osaka?",options:["Date Masamune","Tokugawa Ieyasu","Toyotomi Hideyoshi"],answer:2},
  {id:"culture",title:"Caminhos sagrados",ids:["fuji","itsukushima"],reward:40,question:"Qual santuário é conhecido pelo torii sobre a água?",options:["Itsukushima","Kochi","Matsumae"],answer:0},
  {id:"atlas",title:"Mestre do atlas",ids:landmarks.map(p=>p.id),reward:100,question:"Qual cidade foi desenvolvida por Date Masamune?",options:["Nagasaki","Sendai","Kyoto"],answer:1}
];
function validIds(value,allowed){
  return Array.isArray(value)?[...new Set(value.filter(id=>allowed.includes(id)))]:[];
}

export default function MapPage(){
  const [hover,setHover]=useState(null);
  const [selected,setSelected]=useState(null);
  const [view,setView]=useState({x:0,y:0,z:1});
  const [dragging,setDragging]=useState(false);
  const [category,setCategory]=useState("all");
  const [discovered,setDiscovered]=useState([]);
  const [completed,setCompleted]=useState([]);
  const [loaded,setLoaded]=useState(false);
  const [storageError,setStorageError]=useState(false);
  const [answers,setAnswers]=useState({});
  useEffect(()=>{
    try{
      const raw=window.localStorage.getItem(storageKey);
      if(raw){
        const data=JSON.parse(raw);
        const found=validIds(data?.discovered,landmarks.map(p=>p.id));
        setDiscovered(found);
        setCompleted(validIds(data?.completed,missions.filter(m=>m.ids.every(id=>found.includes(id))).map(m=>m.id)));
      }
    }catch{setStorageError(true);}
    finally{setLoaded(true);}
  },[]);
  useEffect(()=>{
    if(!loaded)return;
    try{window.localStorage.setItem(storageKey,JSON.stringify({discovered,completed}));}
    catch{setStorageError(true);}
  },[loaded,discovered,completed]);
  const xp=discovered.length*10+missions.filter(m=>completed.includes(m.id)).reduce((sum,m)=>sum+m.reward,0);
  const rank=xp>=300?"Mestre":xp>=150?"Samurai":xp>=50?"Discípulo":"Aprendiz";
  function answer(m,index){
    if(!loaded||completed.includes(m.id)||!m.ids.every(id=>discovered.includes(id)))return;
    setAnswers(old=>({...old,[m.id]:index===m.answer?"correct":"wrong"}));
    if(index===m.answer)setCompleted(old=>old.includes(m.id)?old:[...old,m.id]);
  }
  function resetProgress(){
    if(!window.confirm("Apagar todas as descobertas, missões e XP deste navegador?"))return;
    setDiscovered([]);setCompleted([]);setAnswers({});setSelected(null);setHover(null);
  }
  const visible=landmarks.filter(p=>view.z>=p.minZoom && (category==="all"||p.type===category));
  function discover(p){if(!loaded)return;setSelected(p);setDiscovered(old=>old.includes(p.id)?old:[...old,p.id]);}
  useEffect(()=>{if(selected?.id && !visible.some(p=>p.id===selected.id))setSelected(null);if(hover?.id && !visible.some(p=>p.id===hover.id))setHover(null);},[view.z,category,selected,hover]);
  const svgRef=useRef(null), current=useRef(view), pointers=useRef(new Map()), gesture=useRef(null), moved=useRef(false);
  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  function apply(v){
    const z=clamp(v.z,1,4);
    const next={z,x:clamp(v.x,0,800-800/z),y:clamp(v.y,0,540-540/z)};
    current.current=next;setView(next);
  }
  function point(x,y){
    const svg=svgRef.current,p=svg.createSVGPoint();p.x=x;p.y=y;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  }
  function zoom(factor,anchor){
    const v=current.current,z=clamp(v.z*factor,1,4),p=anchor||{x:v.x+400/v.z,y:v.y+270/v.z};
    apply({z,x:p.x-(p.x-v.x)*v.z/z,y:p.y-(p.y-v.y)*v.z/z});setHover(null);
  }
  useEffect(()=>{
    const svg=svgRef.current;
    function wheel(e){e.preventDefault();zoom(Math.exp(-e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?540:1)*.002),point(e.clientX,e.clientY));}
    svg.addEventListener("wheel",wheel,{passive:false});
    return ()=>svg.removeEventListener("wheel",wheel);
  },[]);
  function snapshot(){
    const [a,b]=[...pointers.current.values()];
    const x=b?(a.x+b.x)/2:a.x,y=b?(a.y+b.y)/2:a.y;
    return {x,y,d:b?Math.hypot(a.x-b.x,a.y-b.y):0,anchor:point(x,y),view:{...current.current}};
  }
  function down(e){
    if(e.button!==0)return;
    if(!pointers.current.size)moved.current=false;
    pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY});
    gesture.current=snapshot();
    if(pointers.current.size>1){moved.current=true;setDragging(true);setHover(null);}
  }
  function move(e){
    if(!pointers.current.has(e.pointerId))return;
    pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY});
    const g=gesture.current,[a,b]=[...pointers.current.values()];
    const x=b?(a.x+b.x)/2:a.x,y=b?(a.y+b.y)/2:a.y;
    if(!moved.current && Math.hypot(x-g.x,y-g.y)<5)return;
    moved.current=true;setDragging(true);setHover(null);
    if(!e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.setPointerCapture(e.pointerId);
    const z=clamp(b&&g.d?g.view.z*Math.hypot(a.x-b.x,a.y-b.y)/g.d:g.view.z,1,4);
    const now=point(x,y),v=current.current;
    apply({z,x:g.anchor.x-(now.x-v.x)*v.z/z,y:g.anchor.y-(now.y-v.y)*v.z/z});
  }
  function up(e){
    if(!pointers.current.delete(e.pointerId))return;
    if(pointers.current.size)gesture.current=snapshot();
    else {gesture.current=null;setDragging(false);}
  }
  const active=dragging?null:hover || selected;
  return <main className="atlas">
    <Head><title>Atlas do Japão | GanryuTab</title></Head>
    <header><Link href="/">← GanryuTab</Link><span>日本 • ATLAS HISTÓRICO</span></header>
    <h1>Explore o Japão feudal</h1>
    <p>Use a roda do mouse ou os botões para ampliar. Arraste para explorar; no celular, use dois dedos para ampliar. Passe o mouse ou toque nas regiões para descobrir suas histórias.</p>
    <section className="progress" aria-label="Progresso do explorador">
      <div><strong>{rank}</strong><span>{xp} XP</span></div>
      <progress max={355} value={xp} aria-label="Experiência total"/>
      <p>+10 XP por novo local · {completed.length}/{missions.length} missões concluídas</p>
      <p role="status">{!loaded?"Carregando progresso…":storageError?"Armazenamento local indisponível ou inválido; o progresso pode não ser recuperado.":"Progresso salvo neste navegador."}</p>
      <button disabled={!loaded} onClick={resetProgress}>Reiniciar progresso</button>
    </section>
    <div className="controls" aria-label="Controles do mapa">
      <button onClick={()=>zoom(1/1.25)} disabled={view.z<=1} aria-label="Diminuir zoom">−</button>
      <output aria-live="polite">{Math.round(view.z*100)}%</output>
      <button onClick={()=>zoom(1.25)} disabled={view.z>=4} aria-label="Aumentar zoom">+</button>
      <button onClick={()=>{apply({x:0,y:0,z:1});setHover(null);setSelected(null)}}>Restaurar</button>
      <button disabled={view.z<=1} onClick={()=>apply({...view,x:view.x-100/view.z})} aria-label="Mover para oeste">←</button>
      <button disabled={view.z<=1} onClick={()=>apply({...view,y:view.y-100/view.z})} aria-label="Mover para norte">↑</button>
      <button disabled={view.z<=1} onClick={()=>apply({...view,y:view.y+100/view.z})} aria-label="Mover para sul">↓</button>
      <button disabled={view.z<=1} onClick={()=>apply({...view,x:view.x+100/view.z})} aria-label="Mover para leste">→</button>
    </div>
    <div className="exploration">
      <label>Explorar: <select value={category} onChange={e=>{setCategory(e.target.value);setHover(null);setSelected(null)}}><option value="all">Todos os locais</option>{Object.entries(categories).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label>
      <span aria-live="polite">Descobertos: {discovered.length}/{landmarks.length}</span>
      <p>{view.z<2?"Amplie até 200% para revelar locais históricos.":view.z<2.5?"Mais locais aparecem a partir de 250%.":"Todos os níveis de exploração desbloqueados."}</p>
    </div>
    <div className="sheet">
      <svg ref={svgRef} className={dragging?"dragging":""} viewBox={view.x+" "+view.y+" "+800/view.z+" "+540/view.z} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onLostPointerCapture={up} onPointerLeave={e=>{if(!e.currentTarget.hasPointerCapture(e.pointerId))up(e)}} onClickCapture={e=>{if(moved.current && e.detail!==0){e.stopPropagation();e.preventDefault();moved.current=false;}}} aria-label="Mapa ilustrativo das regiões japonesas">
        <defs>
          <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/></filter>
          <pattern id="sea" width="60" height="38" patternUnits="userSpaceOnUse"><path d="M5 22 Q15 15 25 22 T45 22" fill="none" stroke="#577f7a" opacity=".25"/></pattern>
          <g id="mount"><path d="M-20 13 Q-9 1 0 -19 Q9 -4 23 13 L8 8 1 13 -8 7 Z" fill="#a5a28a" stroke="#514c3d" strokeWidth="1.3"/><path d="M0 -19 L-4 2 -13 9 M0 -19 L9 5 16 9" fill="none" stroke="#514c3d"/></g>
          <g id="castle" stroke="#534638" strokeWidth="1.5"><path d="M-14 13 H14 L10 2 H-10 Z" fill="#c6ad80"/><path d="M-17 2 L0 -8 17 2 Z M-11 -8 L0 -17 11 -8 Z" fill="#615c49"/><path d="M-4 13 V6 H4 V13" fill="#534638"/></g>
        </defs>
        <rect width="800" height="540" fill="#b5cbc0"/><rect width="800" height="540" fill="url(#sea)"/>
        <rect x="12" y="12" width="776" height="516" fill="none" stroke="#75674d" strokeWidth="2"/>
        <g fill="#6f624c" fontFamily="serif"><text x="36" y="53" fontSize="25">日本古地図</text><text x="36" y="76" fontSize="13" letterSpacing="3">GANRYU • ATLAS</text><text x="46" y="190" fontSize="15" fontStyle="italic">Mar do Japão</text><text x="610" y="420" fontSize="15" fontStyle="italic">Oceano Pacífico</text></g>
        {regions.map(r=><g key={r.name} role="button" tabIndex={0} aria-label={r.name+": "+r.info} aria-pressed={selected===r} onMouseEnter={()=>setHover(r)} onMouseLeave={()=>setHover(null)} onFocus={()=>setHover(r)} onBlur={()=>setHover(null)} onClick={()=>setSelected(s=>s===r?null:r)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setSelected(s=>s===r?null:r)}if(e.key==="Escape"){setHover(null);setSelected(null)}}} className="region">
          <path d={r.d} fill={active===r?"#d6a66e":"#e7d6aa"} stroke="#655b43" strokeWidth="2" strokeLinejoin="round"/>
          <g pointerEvents="none"><use href="#mount" x={r.x-14} y={r.y-22}/><use href="#mount" x={r.x+13} y={r.y-18} transform=""/><rect x={r.x-35} y={r.y-2} width="70" height="20" rx="2" fill="#f1e3bf" stroke="#9a7851"/><text x={r.x} y={r.y+12} textAnchor="middle" fontSize="12" fill="#493a2b" fontFamily="serif">{r.name}</text></g>
        </g>)}
        <g pointerEvents="none"><path d="M430 267 Q449 280 462 307 M563 125 Q578 151 570 183 M205 357 Q230 367 260 350" fill="none" stroke="#69958c" strokeWidth="2"/><g transform="translate(710 465)" stroke="#806044" fill="none"><circle r="27"/><path d="M0 -35 L6 0 0 35 -6 0 Z M-35 0 L0 -6 35 0 0 6 Z"/><text x="0" y="-39" textAnchor="middle" fill="#806044" stroke="none">N</text></g><rect x="38" y="448" width="47" height="47" rx="4" fill="none" stroke="#a34c3b" strokeWidth="3"/><text x="61" y="480" textAnchor="middle" fill="#a34c3b" fontSize="25">巌</text><rect width="800" height="540" filter="url(#grain)" opacity=".12" style={{mixBlendMode:"multiply"}}/></g>
        {visible.map(p=><g key={p.id} className="landmark" role="button" tabIndex={0} aria-label={p.name+": "+p.info} aria-pressed={selected===p}
          transform={"translate("+p.x+" "+p.y+") scale("+1/view.z+")"}
          onMouseEnter={()=>setHover(p)} onMouseLeave={()=>setHover(null)} onFocus={()=>setHover(p)} onBlur={()=>setHover(null)}
          onClick={()=>discover(p)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();discover(p)}if(e.key==="Escape"){setHover(null);setSelected(null)}}}>
          <circle r="16" fill="transparent"/><circle r="11" fill={active===p?"#e2ad66":discovered.includes(p.id)?"#536c52":"#8e3e2e"} stroke="#f7e7bc" strokeWidth="1.5"/>
          <text y="4" textAnchor="middle" fontSize="12" fill="#fff4d8" pointerEvents="none">{symbols[p.type]}</text>
        </g>)}
      </svg>
      {active && <aside className="tooltip" role="status"><strong>{active.name}</strong>{active.id && <div className="kind">{categories[active.type]} · {active.region}{discovered.includes(active.id)?" · Descoberto":""}</div>}<p>{active.info}</p><button onClick={()=>{setSelected(null);setHover(null)}} aria-label="Fechar informações">×</button></aside>}
    </div>
    <div className="legend">{Object.entries(categories).map(([key,label])=><span key={key}>{symbols[key]} · {label}</span>)}</div>
    <section className="missions" aria-label="Missões históricas">
      <h2>Missões do explorador</h2>
      {missions.map(m=>{
        const count=m.ids.filter(id=>discovered.includes(id)).length,done=completed.includes(m.id),ready=count===m.ids.length;
        return <article key={m.id}>
          <h3>{m.title} · +{m.reward} XP</h3>
          <p>{done?"Concluída":ready?"Quiz desbloqueado":count+"/"+m.ids.length+" locais descobertos"}</p>
          <progress value={count} max={m.ids.length} aria-label={"Descobertas: "+m.title}/>
          <p>Explore: {m.ids.map(id=>landmarks.find(p=>p.id===id).name).join(", ")}.</p>
          {ready&&!done&&<div><p>{m.question}</p><div className="options">{m.options.map((option,i)=><button key={option} onClick={()=>answer(m,i)} disabled={!loaded}>{option}</button>)}</div></div>}
          {answers[m.id]==="wrong"&&!done&&<p role="status">Ainda não! Revise os locais e tente novamente.</p>}
          {done&&<p role="status">✓ Missão concluída. Recompensa recebida!</p>}
        </article>
      })}
    </section>
    <small>Mapa artístico esquemático, sem escala ou fronteiras históricas exatas. Regiões modernas usadas como referência, com Ezo como denominação histórica.</small>
    <style jsx>{`
      .atlas{min-height:100vh;background:#191713;color:#eee2c9;padding:24px max(16px,calc((100vw - 1050px)/2));font-family:Georgia,serif}
      header{display:flex;justify-content:space-between;gap:12px;align-items:center;font-size:14px} header :global(a){color:#e7c18a;text-decoration:none}
      h1{font-size:clamp(28px,5vw,48px);margin:28px 0 8px} p{line-height:1.5;margin:0 0 18px}
      .sheet{position:relative;border:8px solid #a18b65;background:#e7d6aa;box-shadow:0 12px 40px #0008;border-radius:3px;overflow:hidden}
       .controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:12px}.controls button{background:#342b22;color:#f4e4c6;border:1px solid #9a8059;border-radius:4px;padding:8px 13px;cursor:pointer;font:inherit}.controls button:disabled{opacity:.45;cursor:default}.controls output{min-width:52px;text-align:center}
      svg{display:block;width:100%;height:auto;aspect-ratio:800/540;touch-action:none;user-select:none;cursor:grab}svg.dragging,svg.dragging .region{cursor:grabbing}.region{cursor:pointer;outline:none}.region path{transition:fill .18s}.region:focus-visible>path{stroke:#a34c3b;stroke-width:4}
      .tooltip{position:absolute;bottom:12px;left:12px;max-width:min(300px,calc(100% - 24px));box-sizing:border-box;padding:14px 32px 10px 14px;background:#f5e8c8;color:#382e23;border:1px solid #8c7150;box-shadow:0 4px 16px #0004;border-radius:4px;pointer-events:auto}.tooltip p{font-size:14px;margin:5px 0}.tooltip button{position:absolute;right:6px;top:5px;background:none;border:0;color:#382e23;font-size:22px;cursor:pointer}
      .exploration{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;font-size:14px}.exploration p{flex-basis:100%;margin:0;color:#d7c5a4}.exploration select{background:#342b22;color:#f4e4c6;border:1px solid #9a8059;padding:7px;border-radius:4px}.legend{display:flex;flex-wrap:wrap;gap:12px;margin-top:12px;font-size:13px;color:#e1c9a1}.landmark{cursor:pointer;outline:none}.landmark:focus-visible circle:nth-child(2){stroke:#fff;stroke-width:3}.kind{font-size:12px;color:#77553b;margin-top:4px}
      .progress,.missions article{border:1px solid #8c7150;background:#29231c;border-radius:6px;padding:16px;margin-bottom:14px}.progress>div{display:flex;justify-content:space-between;color:#e7c18a;font-size:20px}.progress p,.missions p{font-size:14px;margin:8px 0}.progress progress,.missions progress{width:100%;accent-color:#a4a878}.progress button,.options button{background:#403326;color:#f4e4c6;border:1px solid #9a8059;border-radius:4px;padding:8px 12px;cursor:pointer;font:inherit}.options{display:flex;flex-wrap:wrap;gap:8px}.missions{margin-top:24px}.missions h3{margin:0 0 8px;color:#e7c18a}
      small{display:block;margin-top:16px;color:#c8bba4;line-height:1.5}
    `}</style>
  </main>
}
