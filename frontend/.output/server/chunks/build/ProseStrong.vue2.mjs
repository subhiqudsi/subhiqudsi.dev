import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const o={};function f(t,s,e,n){s(`<strong${ssrRenderAttrs(n)}>`),ssrRenderSlot(t.$slots,"default",{},null,s,e),s("</strong>");}const r=o.setup;o.setup=(t,s)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue"),r?r(t,s):void 0};const _=s(o,[["ssrRender",f]]);

export { _ as default };
//# sourceMappingURL=ProseStrong.vue2.mjs.map
