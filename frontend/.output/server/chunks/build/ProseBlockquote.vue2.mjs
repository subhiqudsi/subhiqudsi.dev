import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const t={};function m(s,e,o,n){e(`<blockquote${ssrRenderAttrs(n)}>`),ssrRenderSlot(s.$slots,"default",{},null,e,o),e("</blockquote>");}const r=t.setup;t.setup=(s,e)=>{const o=useSSRContext();return (o.modules||(o.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue"),r?r(s,e):void 0};const _=s(t,[["ssrRender",m]]);

export { _ as default };
//# sourceMappingURL=ProseBlockquote.vue2.mjs.map
