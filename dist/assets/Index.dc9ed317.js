import{f as S,j as a,ao as ke,c as Re,Y as J,a as d,b as I,n as l,d as x,W as ge,h as W,i as F,r as j,l as C,t as X,ap as Pe,p as V,u as xe,y as be,a6 as Te,ab as M,e as ie,aq as K,a7 as Ne,a2 as Ce,ar as Me,k as le,as as Q,$ as G,at as $e,a3 as me,B as Z,C as ae,D as B,E as Ee,au as ee,av as Fe,G as U,F as L,H as oe,aw as he,ax as Oe}from"./index.8b970e15.js";import{f as te,u as ne,N as je}from"./Icon.eb78986a.js";import{t as Be,d as Le,C as Ke,l as Ve,a as ye,b as De,p as Ue,N as qe,c as Ge,e as Ye,_ as We}from"./Layout.3409a670.js";import{u as Xe,_ as Ze}from"./Space.749e8d12.js";import{_ as Je}from"./_plugin-vue_export-helper.cdc0426e.js";import"./get.0df21d99.js";const Qe=S({name:"ChevronDownFilled",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function eo(e,r,o,i){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:r,itemColorActiveHoverInverted:r,itemColorActiveCollapsedInverted:r,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:i}}const oo=e=>{const{borderRadius:r,textColor3:o,primaryColor:i,textColor2:c,textColor1:u,fontSize:v,dividerColor:m,hoverColor:s,primaryColorHover:w}=e;return Object.assign({borderRadius:r,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:J(i,{alpha:.1}),itemColorActiveHover:J(i,{alpha:.1}),itemColorActiveCollapsed:J(i,{alpha:.1}),itemTextColor:c,itemTextColorHover:c,itemTextColorActive:i,itemTextColorActiveHover:i,itemTextColorChildActive:i,itemTextColorChildActiveHover:i,itemTextColorHorizontal:c,itemTextColorHoverHorizontal:w,itemTextColorActiveHorizontal:i,itemTextColorActiveHoverHorizontal:i,itemTextColorChildActiveHorizontal:i,itemTextColorChildActiveHoverHorizontal:i,itemIconColor:u,itemIconColorHover:u,itemIconColorActive:i,itemIconColorActiveHover:i,itemIconColorChildActive:i,itemIconColorChildActiveHover:i,itemIconColorCollapsed:u,itemIconColorHorizontal:u,itemIconColorHoverHorizontal:w,itemIconColorActiveHorizontal:i,itemIconColorActiveHoverHorizontal:i,itemIconColorChildActiveHorizontal:i,itemIconColorChildActiveHoverHorizontal:i,itemHeight:"42px",arrowColor:c,arrowColorHover:c,arrowColorActive:i,arrowColorActiveHover:i,arrowColorChildActive:i,arrowColorChildActiveHover:i,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:v,dividerColor:m},eo("#BBB",i,"#FFF","#AAA"))},to=ke({name:"Menu",common:Re,peers:{Tooltip:Be,Dropdown:Le},self:oo}),ro=to,no=d("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[I("bordered",[l("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),l("left-placement",[I("bordered",[l("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[l("border",`
 left: 0;
 `)]),I("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[x("&:hover",[l("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[l("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[d("layout-toggle-bar",[x("&:hover",[l("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
 transform: rotate(0);
 `)])]),d("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[d("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[l("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),l("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[l("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),l("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[l("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),l("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),d("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[d("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),io=S({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(ge,{clsPrefix:e},{default:()=>a(Ke,null)}))}}),lo=S({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ao={position:Ue,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},co=S({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),ao),setup(e){const r=F(Ve),o=j(null),i=j(null),c=C(()=>te(s.value?e.collapsedWidth:e.width)),u=C(()=>e.collapseMode!=="transform"?{}:{minWidth:te(e.width)}),v=C(()=>r?r.siderPlacement:"left"),m=j(e.defaultCollapsed),s=ne(X(e,"collapsed"),m);function w(z,b){if(e.nativeScrollbar){const{value:y}=o;y&&(b===void 0?y.scrollTo(z):y.scrollTo(z,b))}else{const{value:y}=i;y&&y.scrollTo(z,b)}}function T(){const{"onUpdate:collapsed":z,onUpdateCollapsed:b,onExpand:y,onCollapse:h}=e,{value:g}=s;b&&M(b,!g),z&&M(z,!g),m.value=!g,g?y&&M(y):h&&M(h)}let A=0,f=0;const _=z=>{var b;const y=z.target;A=y.scrollLeft,f=y.scrollTop,(b=e.onScroll)===null||b===void 0||b.call(e,z)};Pe(()=>{if(e.nativeScrollbar){const z=o.value;z&&(z.scrollTop=f,z.scrollLeft=A)}}),V(ye,{collapsedRef:s,collapseModeRef:X(e,"collapseMode")});const{mergedClsPrefixRef:k,inlineThemeDisabled:H}=xe(e),P=W("Layout","-layout-sider",no,De,e,k);function $(z){var b,y;z.propertyName==="max-width"&&(s.value?(b=e.onAfterLeave)===null||b===void 0||b.call(e):(y=e.onAfterEnter)===null||y===void 0||y.call(e))}const D={scrollTo:w},E=C(()=>{const{common:{cubicBezierEaseInOut:z},self:b}=P.value,{siderToggleButtonColor:y,siderToggleButtonBorder:h,siderToggleBarColor:g,siderToggleBarColorHover:t}=b,p={"--n-bezier":z,"--n-toggle-button-color":y,"--n-toggle-button-border":h,"--n-toggle-bar-color":g,"--n-toggle-bar-color-hover":t};return e.inverted?(p["--n-color"]=b.siderColorInverted,p["--n-text-color"]=b.textColorInverted,p["--n-border-color"]=b.siderBorderColorInverted,p["--n-toggle-button-icon-color"]=b.siderToggleButtonIconColorInverted,p.__invertScrollbar=b.__invertScrollbar):(p["--n-color"]=b.siderColor,p["--n-text-color"]=b.textColor,p["--n-border-color"]=b.siderBorderColor,p["--n-toggle-button-icon-color"]=b.siderToggleButtonIconColor),p}),N=H?be("layout-sider",C(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:i,mergedClsPrefix:k,mergedTheme:P,styleMaxWidth:c,mergedCollapsed:s,scrollContainerStyle:u,siderPlacement:v,handleNativeElScroll:_,handleTransitionend:$,handleTriggerClick:T,inlineThemeDisabled:H,cssVars:E,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},D)},render(){var e;const{mergedClsPrefix:r,mergedCollapsed:o,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${r}-layout-sider`,this.themeClass,`${r}-layout-sider--${this.position}-positioned`,`${r}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${r}-layout-sider--bordered`,o&&`${r}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${r}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:te(this.width)}]},this.nativeScrollbar?a("div",{class:`${r}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):a(Te,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?a(lo,{clsPrefix:r,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(io,{clsPrefix:r,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${r}-layout-sider__border`}):null)}}),q=ie("n-menu"),ce=ie("n-submenu"),de=ie("n-menu-item-group"),Y=8;function se(e){const r=F(q),{props:o,mergedCollapsedRef:i}=r,c=F(ce,null),u=F(de,null),v=C(()=>o.mode==="horizontal"),m=C(()=>v.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=C(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),w=C(()=>{var f;return!v.value&&e.root&&i.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),T=C(()=>{if(v.value)return;const{collapsedWidth:f,indent:_,rootIndent:k}=o,{root:H,isGroup:P}=e,$=k===void 0?_:k;if(H)return i.value?f/2-s.value/2:$;if(u)return _/2+u.paddingLeftRef.value;if(c)return(P?_/2:_)+c.paddingLeftRef.value}),A=C(()=>{const{collapsedWidth:f,indent:_,rootIndent:k}=o,{value:H}=s,{root:P}=e;return v.value||!P||!i.value?Y:(k===void 0?_:k)+H+Y-(f+H)/2});return{dropdownPlacement:m,activeIconSize:w,maxIconSize:s,paddingLeft:T,iconMarginRight:A,NMenu:r,NSubmenu:c}}const ue={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ze=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),so=S({name:"MenuOptionGroup",props:ze,setup(e){V(ce,null);const r=se(e);V(de,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:o,props:i}=F(q);return function(){const{value:c}=o,u=r.paddingLeft.value,{nodeProps:v}=i,m=v==null?void 0:v(e.tmNode.rawNode);return a("div",{class:`${c}-menu-item-group`,role:"group"},a("div",Object.assign({},m,{class:[`${c}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",u!==void 0?`padding-left: ${u}px;`:""]}),K(e.title),e.extra?a(Ne,null," ",K(e.extra)):null),a("div",null,e.tmNodes.map(s=>ve(s,i))))}}}),Ie=S({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=F(q);return{menuProps:r,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:i,iconMarginRight:c}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${i}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:o,renderLabel:i,renderExtra:c,expandIcon:u}}=this,v=o?o(r.rawNode):K(this.icon);return a("div",{onClick:m=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&a("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),a("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(r.rawNode):K(this.title),this.extra||c?a("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(r.rawNode):K(this.extra)):null),this.showArrow?a(ge,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>u?u(r.rawNode):a(Qe,null)}):null)}}),we=Object.assign(Object.assign({},ue),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),uo=S({name:"Submenu",props:we,setup(e){const r=se(e),{NMenu:o,NSubmenu:i}=r,{props:c,mergedCollapsedRef:u,mergedThemeRef:v}=o,m=C(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||c.disabled?!0:f}),s=j(!1);V(ce,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:m}),V(de,null);function w(){const{onClick:f}=e;f&&f()}function T(){m.value||(u.value||o.toggleExpand(e.internalKey),w())}function A(f){s.value=f}return{menuProps:c,mergedTheme:v,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:s,paddingLeft:r.paddingLeft,mergedDisabled:m,mergedValue:o.mergedValueRef,childActive:Ce(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>c.mode==="horizontal"?!1:u.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!m.value&&(c.mode==="horizontal"||u.value)),handlePopoverShowChange:A,handleClick:T}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:o,renderLabel:i}}=this,c=()=>{const{isHorizontal:v,paddingLeft:m,collapsed:s,mergedDisabled:w,maxIconSize:T,activeIconSize:A,title:f,childActive:_,icon:k,handleClick:H,menuProps:{nodeProps:P},dropdownShow:$,iconMarginRight:D,tmNode:E,mergedClsPrefix:N}=this,z=P==null?void 0:P(E.rawNode);return a("div",Object.assign({},z,{class:[`${N}-menu-item`,z==null?void 0:z.class],role:"menuitem"}),a(Ie,{tmNode:E,paddingLeft:m,collapsed:s,disabled:w,iconMarginRight:D,maxIconSize:T,activeIconSize:A,title:f,extra:this.extra,showArrow:!v,childActive:_,clsPrefix:N,icon:k,hover:$,onClick:H}))},u=()=>a(Me,null,{default:()=>{const{tmNodes:v,collapsed:m}=this;return m?null:a("div",{class:`${r}-submenu-children`,role:"menu"},v.map(s=>ve(s,this.menuProps)))}});return this.root?a(qe,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:i}),{default:()=>a("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),this.isHorizontal?null:u())}):a("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),u())}}),Ae=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),vo=S({name:"MenuOption",props:Ae,setup(e){const r=se(e),{NSubmenu:o,NMenu:i}=r,{props:c,mergedClsPrefixRef:u,mergedCollapsedRef:v}=i,m=o?o.mergedDisabledRef:{value:!1},s=C(()=>m.value||e.disabled);function w(A){const{onClick:f}=e;f&&f(A)}function T(A){s.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),w(A))}return{mergedClsPrefix:u,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:c,dropdownEnabled:Ce(()=>e.root&&v.value&&c.mode!=="horizontal"&&!s.value),selected:C(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:T}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:o,menuProps:{renderLabel:i,nodeProps:c}}=this,u=c==null?void 0:c(o.rawNode);return a("div",Object.assign({},u,{role:"menuitem",class:[`${e}-menu-item`,u==null?void 0:u.class]}),a(Ge,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(o.rawNode):K(this.title),trigger:()=>a(Ie,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),mo=S({name:"MenuDivider",setup(){const e=F(q),{mergedClsPrefixRef:r,isHorizontalRef:o}=e;return()=>o.value?null:a("div",{class:`${r.value}-menu-divider`})}}),ho=le(ze),po=le(Ae),fo=le(we);function go(e){return e.type==="divider"||e.type==="render"}function xo(e){return e.type==="divider"}function ve(e,r){const{rawNode:o}=e,{show:i}=o;if(typeof i=="boolean"&&!i)return null;if(go(o))return xo(o)?a(mo,Object.assign({key:e.key},o.props)):null;const{labelField:c}=r,{key:u,level:v,isGroup:m}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[c],extra:o.titleExtra||o.extra,key:u,internalKey:u,level:v,root:v===0,isGroup:m});return e.children?e.isGroup?a(so,Q(s,ho,{tmNode:e,tmNodes:e.children,key:u})):a(uo,Q(s,fo,{key:u,rawNodes:o[r.childrenField],tmNodes:e.children,tmNode:e})):a(vo,Q(s,po,{key:u,tmNode:e}))}const pe=[x("&::before","background-color: var(--n-item-color-hover);"),l("arrow",`
 color: var(--n-arrow-color-hover);
 `),l("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),l("extra",`
 color: var(--n-item-text-color-hover);
 `)])],fe=[l("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),l("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],bo=x([d("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[d("submenu","margin: 0;"),d("menu-item","margin: 0;"),d("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),d("menu-item-content",[I("selected",[l("icon","color: var(--n-item-icon-color-active-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),l("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),l("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),l("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),G("disabled",[G("selected, child-active",[x("&:focus-within",fe)]),I("selected",[O(null,[l("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),l("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[O(null,[l("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),l("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),O("border-bottom: 2px solid var(--n-border-color-horizontal);",fe)]),d("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),I("collapsed",[d("menu-item-content",[I("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),d("menu-item-content-header","opacity: 0;"),l("arrow","opacity: 0;"),l("icon","color: var(--n-item-icon-color-collapsed);")])]),d("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),d("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[l("arrow","transform: rotate(0);")]),I("selected",[x("&::before","background-color: var(--n-item-color-active);"),l("arrow","color: var(--n-arrow-color-active);"),l("icon","color: var(--n-item-icon-color-active);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),l("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),l("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),l("arrow",`
 color: var(--n-arrow-color-child-active);
 `),l("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),G("disabled",[G("selected, child-active",[x("&:focus-within",pe)]),I("selected",[O(null,[l("arrow","color: var(--n-arrow-color-active-hover);"),l("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),l("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[O(null,[l("arrow","color: var(--n-arrow-color-child-active-hover);"),l("icon","color: var(--n-item-icon-color-child-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),l("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[O(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),O(null,pe)]),l("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),l("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),d("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),l("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),d("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[d("menu-item-content",`
 height: var(--n-item-height);
 `),d("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[$e({duration:".2s"})])]),d("menu-item-group",[d("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),d("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),d("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function O(e,r){return[I("hover",e,r),x("&:hover",e,r)]}const Co=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),yo=S({name:"Menu",props:Co,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=xe(e),i=W("Menu","-menu",bo,ro,e,r),c=F(ye,null),u=C(()=>{var h;const{collapsed:g}=e;if(g!==void 0)return g;if(c){const{collapseModeRef:t,collapsedRef:p}=c;if(t.value==="width")return(h=p.value)!==null&&h!==void 0?h:!1}return!1}),v=C(()=>{const{keyField:h,childrenField:g}=e;return Ye(e.items||e.options,{getChildren(t){return t[g]},getKey(t){var p;return(p=t[h])!==null&&p!==void 0?p:t.name}})}),m=C(()=>new Set(v.value.treeNodes.map(h=>h.key))),{watchProps:s}=e,w=j(null);s!=null&&s.includes("defaultValue")?me(()=>{w.value=e.defaultValue}):w.value=e.defaultValue;const T=X(e,"value"),A=ne(T,w),f=j([]),_=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(A.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?me(_):_();const k=Xe(e,["expandedNames","expandedKeys"]),H=ne(k,f),P=C(()=>v.value.treeNodes),$=C(()=>v.value.getPath(A.value).keyPath);V(q,{props:e,mergedCollapsedRef:u,mergedThemeRef:i,mergedValueRef:A,mergedExpandedKeysRef:H,activePathRef:$,mergedClsPrefixRef:r,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:X(e,"inverted"),doSelect:D,toggleExpand:N});function D(h,g){const{"onUpdate:value":t,onUpdateValue:p,onSelect:R}=e;p&&M(p,h,g),t&&M(t,h,g),R&&M(R,h,g),w.value=h}function E(h){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:t,onExpandedNamesChange:p,onOpenNamesChange:R}=e;g&&M(g,h),t&&M(t,h),p&&M(p,h),R&&M(R,h),f.value=h}function N(h){const g=Array.from(H.value),t=g.findIndex(p=>p===h);if(~t)g.splice(t,1);else{if(e.accordion&&m.value.has(h)){const p=g.findIndex(R=>m.value.has(R));p>-1&&g.splice(p,1)}g.push(h)}E(g)}const z=h=>{const g=v.value.getPath(h!=null?h:A.value,{includeSelf:!1}).keyPath;if(!g.length)return;const t=Array.from(H.value),p=new Set([...t,...g]);e.accordion&&m.value.forEach(R=>{p.has(R)&&!g.includes(R)&&p.delete(R)}),E(Array.from(p))},b=C(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:g},self:t}=i.value,{borderRadius:p,borderColorHorizontal:R,fontSize:He,itemHeight:Se,dividerColor:_e}=t,n={"--n-divider-color":_e,"--n-bezier":g,"--n-font-size":He,"--n-border-color-horizontal":R,"--n-border-radius":p,"--n-item-height":Se};return h?(n["--n-group-text-color"]=t.groupTextColorInverted,n["--n-color"]=t.colorInverted,n["--n-item-text-color"]=t.itemTextColorInverted,n["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,n["--n-item-text-color-active"]=t.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=t.itemIconColorInverted,n["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=t.arrowColorInverted,n["--n-arrow-color-hover"]=t.arrowColorHoverInverted,n["--n-arrow-color-active"]=t.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=t.itemColorHoverInverted,n["--n-item-color-active"]=t.itemColorActiveInverted,n["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=t.groupTextColor,n["--n-color"]=t.color,n["--n-item-text-color"]=t.itemTextColor,n["--n-item-text-color-hover"]=t.itemTextColorHover,n["--n-item-text-color-active"]=t.itemTextColorActive,n["--n-item-text-color-child-active"]=t.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,n["--n-item-icon-color"]=t.itemIconColor,n["--n-item-icon-color-hover"]=t.itemIconColorHover,n["--n-item-icon-color-active"]=t.itemIconColorActive,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=t.arrowColor,n["--n-arrow-color-hover"]=t.arrowColorHover,n["--n-arrow-color-active"]=t.arrowColorActive,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,n["--n-arrow-color-child-active"]=t.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,n["--n-item-color-hover"]=t.itemColorHover,n["--n-item-color-active"]=t.itemColorActive,n["--n-item-color-active-hover"]=t.itemColorActiveHover,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),n}),y=o?be("menu",C(()=>e.inverted?"a":"b"),b,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:k,uncontrolledExpanededKeys:f,mergedExpandedKeys:H,uncontrolledValue:w,mergedValue:A,activePath:$,tmNodes:P,mergedTheme:i,mergedCollapsed:u,cssVars:o?void 0:b,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,showOption:z}},render(){const{mergedClsPrefix:e,mode:r,themeClass:o,onRender:i}=this;return i==null||i(),a("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(c=>ve(c,this.$props)))}}),zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Io=B("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),wo=B("path",{d:"M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ao=B("path",{d:"M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",fill:"currentColor"},null,-1),Ho=[Io,wo,Ao],So=S({name:"AlertCircleOutline",render:function(r,o){return Z(),ae("svg",zo,Ho)}}),_o={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ko=B("path",{d:"M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ro=B("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M384 176l80 80l-80 80"},null,-1),Po=B("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M191 256h273"},null,-1),To=[ko,Ro,Po],No=S({name:"ExitOutline",render:function(r,o){return Z(),ae("svg",_o,To)}}),Mo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$o=Ee('<path d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 272h144"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 272h144"></path><path d="M192 272a64 64 0 0 0 128 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 144h224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 208h256"></path>',6),Eo=[$o],Fo=S({name:"FileTrayFullOutline",render:function(r,o){return Z(),ae("svg",Mo,Eo)}});function re(e){return()=>a(je,null,{default:()=>a(e)})}const Oo=[{label:()=>a(ee,{to:{name:"FormData"}},{default:()=>"\u6570\u636E"}),key:"data",icon:re(Fo)},{label:()=>a(ee,{to:{name:"About"}},{default:()=>"\u5173\u4E8E"}),key:"about",icon:re(So)},{label:()=>a(ee,{to:{name:"Login"}},{default:()=>"\u9000\u51FA"}),key:"exit",icon:re(No)}],jo={class:"container"},Bo=S({__name:"Index",setup(e){let r=j(!0);return(o,i)=>{const c=yo,u=co,v=Ze,m=We;return Z(),Fe(v,{vertical:""},{default:U(()=>[B("div",jo,[L(m,{"has-sider":"",class:"container-body","sider-placement":"left"},{default:U(()=>[L(v,{align:"center"},{default:U(()=>[L(u,{"collapsed-width":60,"collapse-mode":"width",bordered:"","show-trigger":"arrow-circle",collapsed:oe(r),onCollapse:i[0]||(i[0]=s=>he(r)?r.value=!0:r=!0),onExpand:i[1]||(i[1]=s=>he(r)?r.value=!1:r=!1)},{default:U(()=>[L(c,{"collapsed-width":60,"collapsed-icon-size":22,options:oe(Oo),"default-value":"data"},null,8,["options"])]),_:1},8,["collapsed"])]),_:1}),L(m,{class:"content-page"},{default:U(()=>[L(oe(Oe))]),_:1})]),_:1})])]),_:1})}}});const Go=Je(Bo,[["__scopeId","data-v-28646ede"]]);export{Go as default};
