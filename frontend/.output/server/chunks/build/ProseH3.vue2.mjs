import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { T } from './server.mjs';
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

const b=defineComponent({__name:"ProseH3",__ssrInlineRender:true,props:{id:{}},setup(f){const t=f,{headings:r}=T().public.mdc,l=computed(()=>{var e;return t.id&&(typeof(r==null?void 0:r.anchorLinks)=="boolean"&&(r==null?void 0:r.anchorLinks)===true||typeof(r==null?void 0:r.anchorLinks)=="object"&&((e=r==null?void 0:r.anchorLinks)==null?void 0:e.h3))});return (e,o,n,i)=>{o(`<h3${ssrRenderAttrs(mergeProps({id:t.id},i))}>`),t.id&&unref(l)?(o(`<a${ssrRenderAttr("href",`#${t.id}`)}>`),ssrRenderSlot(e.$slots,"default",{},null,o,n),o("</a>")):ssrRenderSlot(e.$slots,"default",{},null,o,n),o("</h3>");}}});

const s=b.setup;b.setup=(o,n)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue"),s?s(o,n):void 0};

export { b as default };
//# sourceMappingURL=ProseH3.vue2.mjs.map
