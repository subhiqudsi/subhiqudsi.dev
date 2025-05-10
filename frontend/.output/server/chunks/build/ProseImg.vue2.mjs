import { computed, defineComponent, useAttrs, ref, unref, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderAttrs, ssrRenderVNode } from 'vue/server-renderer';
import { l as defu, A as withLeadingSlash, m as hasProtocol, n as joinURL, B as parseURL, C as encodePath, D as encodeParam, y as withTrailingSlash } from '../nitro/nitro.mjs';
import { T, S, m as m$1 } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

async function h(e,t){return await c$2(t).catch(a=>(console.error("Failed to get image meta for "+t,a+""),{width:0,height:0,ratio:0}))}async function c$2(e){{const t=await import('image-meta').then(n=>n.imageMeta),r=await fetch(e).then(n=>n.buffer()),a=t(r);if(!a)throw new Error(`No metadata could be extracted from the image \`${e}\`.`);const{width:o,height:i}=a;return {width:o,height:i,ratio:o&&i?o/i:void 0}}}

function u(t){return e=>e?t[e]||e:t.missingValue}function a({formatter:t,keyMap:e,joinWith:o="/",valueMap:n}={}){t||(t=(r,c)=>`${r}=${c}`),e&&typeof e!="function"&&(e=u(e));const s=n||{};return Object.keys(s).forEach(r=>{typeof s[r]!="function"&&(s[r]=u(s[r]));}),(r={})=>Object.entries(r).filter(([i,f])=>typeof f<"u").map(([i,f])=>{const p=s[i];return typeof p=="function"&&(f=p(r[i])),i=typeof e=="function"?e(i):i,t(i,f)}).join(o)}function l$2(t=""){if(typeof t=="number")return t;if(typeof t=="string"&&t.replace("px","").match(/^\d+$/g))return Number.parseInt(t,10)}function d(t=""){if(t===void 0||!t.length)return [];const e=new Set;for(const o of t.split(" ")){const n=Number.parseInt(o.replace("x",""));n&&e.add(n);}return Array.from(e)}function g$1(t){if(t.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function m(t){const e={};if(typeof t=="string")for(const o of t.split(/[\s,]+/).filter(n=>n)){const n=o.split(":");n.length!==2?e["1px"]=n[0].trim():e[n[0].trim()]=n[1].trim();}else Object.assign(e,t);return e}

function K(i){const e={options:i},r=(s,n={})=>{const o=k(e,s,n);return o},t=(s,n={},o={})=>r(s,{...o,modifiers:defu(n,o.modifiers||{})}).url;for(const s in i.presets)t[s]=(n,o,d)=>t(n,o,{...i.presets[s],...d});return t.options=i,t.getImage=r,t.getMeta=(s,n)=>L(e,s,n),t.getSizes=(s,n)=>R(e,s,n),e.$img=t,t}async function L(i,e,r){const t=k(i,e,{...r});return typeof t.getMeta=="function"?await t.getMeta():await h(i,t.url)}function k(i,e,r){var a,g;if(e&&typeof e!="string")throw new TypeError(`input must be a string (received ${typeof e}: ${JSON.stringify(e)})`);if(!e||e.startsWith("data:"))return {url:e};const{provider:t,defaults:s}=P(i,r.provider||i.options.provider),n=F(i,r.preset);if(e=hasProtocol(e)?e:withLeadingSlash(e),!t.supportsAlias){for(const m in i.options.alias)if(e.startsWith(m)){const l=i.options.alias[m];l&&(e=joinURL(l,e.slice(m.length)));}}if(t.validateDomains&&hasProtocol(e)){const m=parseURL(e).host;if(!i.options.domains.find(l=>l===m))return {url:e}}const o=defu(r,n,s);o.modifiers={...o.modifiers};const d=o.modifiers.format;(a=o.modifiers)!=null&&a.width&&(o.modifiers.width=l$2(o.modifiers.width)),(g=o.modifiers)!=null&&g.height&&(o.modifiers.height=l$2(o.modifiers.height));const c=t.getImage(e,o,i);return c.format=c.format||d||"",c}function P(i,e){const r=i.options.providers[e];if(!r)throw new Error("Unknown provider: "+e);return r}function F(i,e){if(!e)return {};if(!i.options.presets[e])throw new Error("Unknown preset: "+e);return i.options.presets[e]}function R(i,e,r){var w,v,W,M,S;const t=l$2((w=r.modifiers)==null?void 0:w.width),s=l$2((v=r.modifiers)==null?void 0:v.height),n=m(r.sizes),o=(W=r.densities)!=null&&W.trim()?d(r.densities.trim()):i.options.densities;g$1(o);const d$1=t&&s?s/t:0,c=[],a=[];if(Object.keys(n).length>=1){for(const f in n){const h=y(f,String(n[f]),s,d$1,i);if(h!==void 0){c.push({size:h.size,screenMaxWidth:h.screenMaxWidth,media:`(max-width: ${h.screenMaxWidth}px)`});for(const u of o)a.push({width:h._cWidth*u,src:_(i,e,r,h,u)});}}A(c);}else for(const f of o){const h=Object.keys(n)[0];let u=h?y(h,String(n[h]),s,d$1,i):void 0;u===void 0&&(u={size:"",screenMaxWidth:0,_cWidth:(M=r.modifiers)==null?void 0:M.width,_cHeight:(S=r.modifiers)==null?void 0:S.height}),a.push({width:f,src:_(i,e,r,u,f)});}J(a);const g=a[a.length-1],m$1=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,l=m$1?"w":"x",j=a.map(f=>`${f.src} ${f.width}${l}`).join(", ");return {sizes:m$1,srcset:j,src:g==null?void 0:g.src}}function y(i,e,r,t,s){const n=s.options.screens&&s.options.screens[i]||Number.parseInt(i),o=e.endsWith("vw");if(!o&&/^\d+$/.test(e)&&(e=e+"px"),!o&&!e.endsWith("px"))return;let d=Number.parseInt(e);if(!n||!d)return;o&&(d=Math.round(d/100*n));const c=t?Math.round(d*t):r;return {size:e,screenMaxWidth:n,_cWidth:d,_cHeight:c}}function _(i,e,r,t,s){return i.$img(e,{...r.modifiers,width:t._cWidth?t._cWidth*s:void 0,height:t._cHeight?t._cHeight*s:void 0},r)}function A(i){var r;i.sort((t,s)=>t.screenMaxWidth-s.screenMaxWidth);let e=null;for(let t=i.length-1;t>=0;t--){const s=i[t];s.media===e&&i.splice(t,1),e=s.media;}for(let t=0;t<i.length;t++)i[t].media=((r=i[t+1])==null?void 0:r.media)||"";}function J(i){i.sort((r,t)=>r.width-t.width);let e=null;for(let r=i.length-1;r>=0;r--){const t=i[r];t.width===e&&i.splice(r,1),e=t.width;}}

const c$1=a({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>encodeParam(e)+"_"+encodeParam(t)}),g=(e,{modifiers:t={},baseURL:a}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const h=c$1(t)||"_";return a||(a=joinURL(n.options.nuxt.baseURL,"/_ipx")),{url:joinURL(a,h,encodePath(e))}},l$1=true,w=true;

const i = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getImage: g,
	supportsAlias: w,
	validateDomains: l$1
});

const s$2={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp","avif","jpg","webp"],quality:60};s$2.providers={ipx:{provider:i,defaults:{}}};

const s$1=()=>{const e=T(),t=S();return t.$img||t._img||(t._img=K({...s$2,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};

const l={src:{type:String,required:false},format:{type:String,required:false},quality:{type:[Number,String],required:false},background:{type:String,required:false},fit:{type:String,required:false},modifiers:{type:Object,required:false},preset:{type:String,required:false},provider:{type:String,required:false},sizes:{type:[Object,String],required:false},densities:{type:String,required:false},preload:{type:[Boolean,Object],required:false},width:{type:[String,Number],required:false},height:{type:[String,Number],required:false},alt:{type:String,required:false},referrerpolicy:{type:String,required:false},usemap:{type:String,required:false},longdesc:{type:String,required:false},ismap:{type:Boolean,required:false},loading:{type:String,required:false,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:false,validator:e=>["anonymous","use-credentials","",true,false].includes(e)},decoding:{type:String,required:false,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:false}},f=e=>{const t=computed(()=>({provider:e.provider,preset:e.preset})),a=computed(()=>({width:l$2(e.width),height:l$2(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===true?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),n=s$1(),d=computed(()=>({...e.modifiers,width:l$2(e.width),height:l$2(e.height),format:e.format,quality:e.quality||n.options.quality,background:e.background,fit:e.fit}));return {options:t,attrs:a,modifiers:d}},c={...l,placeholder:{type:[Boolean,String,Number,Array],required:false},placeholderClass:{type:String,required:false},custom:{type:Boolean,required:false}};

const G=defineComponent({__name:"NuxtImg",__ssrInlineRender:true,props:c,emits:["load","error"],setup(g,{emit:E}){const r=g,c=useAttrs(),p=true,n=s$1(),i=f(r),a=ref(false),h=ref(),t=computed(()=>n.getSizes(r.src,{...i.options.value,sizes:r.sizes,densities:r.densities,modifiers:{...i.modifiers.value,width:l$2(r.width),height:l$2(r.height)}})),d=computed(()=>{const e={...i.attrs.value,"data-nuxt-img":""};return (!r.placeholder||a.value)&&(e.sizes=t.value.sizes,e.srcset=t.value.srcset),e}),m=computed(()=>{let e=r.placeholder;if(e===""&&(e=true),!e||a.value)return  false;if(typeof e=="string")return e;const s=Array.isArray(e)?e:typeof e=="number"?[e,e]:[10,10];return n(r.src,{...i.modifiers.value,width:s[0],height:s[1],quality:s[2]||50,blur:s[3]||3},i.options.value)}),y=computed(()=>r.sizes?t.value.src:n(r.src,i.modifiers.value,i.options.value)),l=computed(()=>m.value?m.value:y.value);if(r.preload){const e=Object.values(t.value).every(s=>s);m$1({link:[{rel:"preload",as:"image",nonce:r.nonce,...e?{href:t.value.src,imagesizes:t.value.sizes,imagesrcset:t.value.srcset}:{href:l.value},...typeof r.preload!="boolean"&&r.preload.fetchPriority?{fetchpriority:r.preload.fetchPriority}:{}}]});}return S().isHydrating,(e,s,z,A)=>{e.custom?ssrRenderSlot(e.$slots,"default",{...unref(p)?{onerror:"this.setAttribute('data-error', 1)"}:{},imgAttrs:{...d.value,...unref(c)},isLoaded:a.value,src:l.value},null,s,z):s(`<img${ssrRenderAttrs(mergeProps({ref_key:"imgEl",ref:h,class:m.value&&!a.value?e.placeholderClass:void 0},{...unref(p)?{onerror:"this.setAttribute('data-error', 1)"}:{},...d.value,...unref(c)},{src:l.value},A))}>`);}}});

const C=defineComponent({__name:"ProseImg",__ssrInlineRender:true,props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(s){const t=s,n=computed(()=>{var e;if((e=t.src)!=null&&e.startsWith("/")&&!t.src.startsWith("//")){const r=withLeadingSlash(withTrailingSlash(T().app.baseURL));if(r!=="/"&&!t.src.startsWith(r))return joinURL(r,t.src)}return t.src});return (e,r,o,a)=>{ssrRenderVNode(r,createVNode(resolveDynamicComponent(unref(G)),mergeProps({src:unref(n),alt:t.alt,width:t.width,height:t.height},a),null),o);}}});

const s=C.setup;C.setup=(o,m)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue"),s?s(o,m):void 0};

export { C as default };
//# sourceMappingURL=ProseImg.vue2.mjs.map
