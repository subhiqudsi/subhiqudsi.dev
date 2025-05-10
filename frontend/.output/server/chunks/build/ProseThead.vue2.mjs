import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const o={};function f(t,e,s,n){e(`<thead${ssrRenderAttrs(n)}>`),ssrRenderSlot(t.$slots,"default",{},null,e,s),e("</thead>");}const r=o.setup;o.setup=(t,e)=>{const s=useSSRContext();return (s.modules||(s.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue"),r?r(t,e):void 0};const p=s(o,[["ssrRender",f]]);

export { p as default };
//# sourceMappingURL=ProseThead.vue2.mjs.map
