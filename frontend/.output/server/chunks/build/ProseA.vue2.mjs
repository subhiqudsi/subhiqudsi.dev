import { M } from './server.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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

const R=defineComponent({__name:"ProseA",__ssrInlineRender:true,props:{href:{type:String,default:""},target:{type:String,default:void 0,required:false}},setup(n){const e=n;return (t,o,s,f)=>{o(ssrRenderComponent(M,mergeProps({href:e.href,target:e.target},f),{default:withCtx((x,r,p,l)=>{if(r)ssrRenderSlot(t.$slots,"default",{},null,r,p,l);else return [renderSlot(t.$slots,"default")]}),_:3},s));}}});

const s=R.setup;R.setup=(o,n)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue"),s?s(o,n):void 0};

export { R as default };
//# sourceMappingURL=ProseA.vue2.mjs.map
