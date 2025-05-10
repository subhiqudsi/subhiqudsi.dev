import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const o={};function c(t,e,s,n){e(`<ol${ssrRenderAttrs(n)}>`),ssrRenderSlot(t.$slots,"default",{},null,e,s),e("</ol>");}const r=o.setup;o.setup=(t,e)=>{const s=useSSRContext();return (s.modules||(s.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue"),r?r(t,e):void 0};const _=s(o,[["ssrRender",c]]);

export { _ as default };
//# sourceMappingURL=ProseOl.vue2.mjs.map
