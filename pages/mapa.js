import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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

export default function MapPage(){
  const [hover,setHover]=useState(null);
  const [selected,setSelected]=useState(null);
  const active=hover || selected;
  return <main className="atlas">
    <Head><title>Atlas do Japão | GanryuTab</title></Head>
    <header><Link href="/">← GanryuTab</Link><span>日本 • ATLAS HISTÓRICO</span></header>
    <h1>Explore o Japão feudal</h1>
    <p>Passe o mouse, toque ou navegue com Tab pelas regiões para descobrir suas histórias.</p>
    <div className="sheet">
      <svg viewBox="0 0 800 540" aria-label="Mapa ilustrativo das regiões japonesas">
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
        <g pointerEvents="none"><use href="#castle" x="382" y="365"/><use href="#castle" x="550" y="312"/><use href="#castle" x="147" y="466"/><path d="M430 267 Q449 280 462 307 M563 125 Q578 151 570 183 M205 357 Q230 367 260 350" fill="none" stroke="#69958c" strokeWidth="2"/><g transform="translate(710 465)" stroke="#806044" fill="none"><circle r="27"/><path d="M0 -35 L6 0 0 35 -6 0 Z M-35 0 L0 -6 35 0 0 6 Z"/><text x="0" y="-39" textAnchor="middle" fill="#806044" stroke="none">N</text></g><rect x="38" y="448" width="47" height="47" rx="4" fill="none" stroke="#a34c3b" strokeWidth="3"/><text x="61" y="480" textAnchor="middle" fill="#a34c3b" fontSize="25">巌</text><rect width="800" height="540" filter="url(#grain)" opacity=".12" style={{mixBlendMode:"multiply"}}/></g>
      </svg>
      {active && <aside className="tooltip" role="status"><strong>{active.name}</strong><p>{active.info}</p><button onClick={()=>{setSelected(null);setHover(null)}} aria-label="Fechar informações">×</button></aside>}
    </div>
    <small>Mapa artístico esquemático, sem escala ou fronteiras históricas exatas. Regiões modernas usadas como referência, com Ezo como denominação histórica.</small>
    <style jsx>{`
      .atlas{min-height:100vh;background:#191713;color:#eee2c9;padding:24px max(16px,calc((100vw - 1050px)/2));font-family:Georgia,serif}
      header{display:flex;justify-content:space-between;gap:12px;align-items:center;font-size:14px} header :global(a){color:#e7c18a;text-decoration:none}
      h1{font-size:clamp(28px,5vw,48px);margin:28px 0 8px} p{line-height:1.5;margin:0 0 18px}
      .sheet{position:relative;border:8px solid #a18b65;background:#e7d6aa;box-shadow:0 12px 40px #0008;border-radius:3px;overflow:hidden}
      svg{display:block;width:100%;height:auto}.region{cursor:pointer;outline:none}.region path{transition:fill .18s}.region:focus-visible>path{stroke:#a34c3b;stroke-width:4}
      .tooltip{position:absolute;bottom:12px;left:12px;max-width:min(300px,calc(100% - 24px));box-sizing:border-box;padding:14px 32px 10px 14px;background:#f5e8c8;color:#382e23;border:1px solid #8c7150;box-shadow:0 4px 16px #0004;border-radius:4px;pointer-events:auto}.tooltip p{font-size:14px;margin:5px 0}.tooltip button{position:absolute;right:6px;top:5px;background:none;border:0;color:#382e23;font-size:22px;cursor:pointer}
      small{display:block;margin-top:16px;color:#c8bba4;line-height:1.5}
    `}</style>
  </main>
}
