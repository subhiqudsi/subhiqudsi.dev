import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const r={};function f(t,e,s,n){e(`<tr${ssrRenderAttrs(n)}>`),ssrRenderSlot(t.$slots,"default",{},null,e,s),e("</tr>");}const o=r.setup;r.setup=(t,e)=>{const s=useSSRContext();return (s.modules||(s.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue"),o?o(t,e):void 0};const _=s(r,[["ssrRender",f]]);

export { _ as default };
//# sourceMappingURL=ProseTr.vue2.mjs.map
