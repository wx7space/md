import{_ as e,l as s,E as n,k as i,F as p}from"./index-CC52mXXk.js";import{p as g}from"./gitGraph-F2EDSAW4-CsMZTOO_.js";import"./reduce-BCHKuYAd.js";import"./min-BKqUTWLs.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},y={parser:v,db:c,renderer:f};export{y as diagram};