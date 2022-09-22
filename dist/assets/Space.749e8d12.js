import{l as S,ae as B,f as G,u as R,h as v,a4 as j,af as E,j as y,x as L,ah as M,ai as b}from"./index.8b970e15.js";function _(e,n="default",r=[]){const s=e.$slots[n];return s===void 0?r:s()}function F(e,n){return S(()=>{for(const r of n)if(e[r]!==void 0)return e[r];return e[n[n.length-1]]})}const I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},P=()=>I,T={name:"Space",self:P},A=T;let h;const O=()=>{if(!B)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h},W=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),H=G({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:r}=R(e),a=v("Space","-space",void 0,A,e,n),s=j("Space",r,n);return{useGap:O(),rtlEnabled:s,mergedClsPrefix:n,margin:S(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[L("gap",t)]:g}}=a.value,{row:c,col:u}=M(g);return{horizontal:b(u),vertical:b(c)}})}},render(){const{vertical:e,align:n,inline:r,justify:a,itemStyle:s,margin:t,wrap:g,mergedClsPrefix:c,rtlEnabled:u,useGap:l,wrapItem:w,internalUseGap:$}=this,d=E(_(this));if(!d.length)return null;const x=`${t.horizontal}px`,m=`${t.horizontal/2}px`,C=`${t.vertical}px`,i=`${t.vertical/2}px`,p=d.length-1,f=a.startsWith("space-");return y("div",{role:"none",class:[`${c}-space`,u&&`${c}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(a)?"flex-"+a:a,flexWrap:!g||e?"nowrap":"wrap",marginTop:l||e?"":`-${i}`,marginBottom:l||e?"":`-${i}`,alignItems:n,gap:l?`${t.vertical}px ${t.horizontal}px`:""}},!w&&(l||$)?d:d.map((z,o)=>y("div",{role:"none",style:[s,{maxWidth:"100%"},l?"":e?{marginBottom:o!==p?C:""}:u?{marginLeft:f?a==="space-between"&&o===p?"":m:o!==p?x:"",marginRight:f?a==="space-between"&&o===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:f?a==="space-between"&&o===p?"":m:o!==p?x:"",marginLeft:f?a==="space-between"&&o===0?"":m:"",paddingTop:i,paddingBottom:i}]},z)))}});export{H as _,_ as g,F as u};