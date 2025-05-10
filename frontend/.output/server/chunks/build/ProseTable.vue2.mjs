import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const o={};function c(t,e,s,n){e(`<table${ssrRenderAttrs(n)}>`),ssrRenderSlot(t.$slots,"default",{},null,e,s),e("</table>");}const r=o.setup;o.setup=(t,e)=>{const s=useSSRContext();return (s.modules||(s.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue"),r?r(t,e):void 0};const p=s(o,[["ssrRender",c]]);

export { p as default };
//# sourceMappingURL=ProseTable.vue2.mjs.map
