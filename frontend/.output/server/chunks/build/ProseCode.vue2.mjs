import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const t={};function f(o,e,s,n){e(`<code${ssrRenderAttrs(n)}>`),ssrRenderSlot(o.$slots,"default",{},null,e,s),e("</code>");}const r=t.setup;t.setup=(o,e)=>{const s=useSSRContext();return (s.modules||(s.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue"),r?r(o,e):void 0};const _=s(t,[["ssrRender",f]]);

export { _ as default };
//# sourceMappingURL=ProseCode.vue2.mjs.map
