import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { s } from './_plugin-vue_export-helper.mjs';

const t={};function c(r,e,s,n){e(`<hr${ssrRenderAttrs(n)}>`);}const o=t.setup;t.setup=(r,e)=>{const s=useSSRContext();return (s.modules||(s.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue"),o?o(r,e):void 0};const i=s(t,[["ssrRender",c]]);

export { i as default };
//# sourceMappingURL=ProseHr.vue2.mjs.map
