import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { s } from './_plugin-vue_export-helper.mjs';

const n={__name:"PageTransition",__ssrInlineRender:true,props:{delay:{type:Number,default:0},disabled:{type:Boolean,default:false}},setup(t){return (s,e,o,a)=>{t.disabled?(e(`<div${ssrRenderAttrs(a)} data-v-e2e6172a>`),ssrRenderSlot(s.$slots,"default",{},null,e,o),e("</div>")):(e(`<div${ssrRenderAttrs(mergeProps({style:{transitionDelay:`${t.delay}ms`}},a))} data-v-e2e6172a>`),ssrRenderSlot(s.$slots,"default",{},null,e,o),e("</div>"));}}},l=n.setup;n.setup=(t,s)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("components/PageTransition.vue"),l?l(t,s):void 0};const v=s(n,[["__scopeId","data-v-e2e6172a"]]);

export { v };
//# sourceMappingURL=PageTransition.vue.mjs.map
