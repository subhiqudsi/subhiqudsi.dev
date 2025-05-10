import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const f=defineComponent({__name:"ProsePre",__ssrInlineRender:true,props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null}},setup(o){return (t,e,r,l)=>{e(`<pre${ssrRenderAttrs(mergeProps({class:t.$props.class},l))}>`),ssrRenderSlot(t.$slots,"default",{},null,e,r),e("</pre>");}}});

const t=f.setup;f.setup=(s,r)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue"),t?t(s,r):void 0};

export { f as default };
//# sourceMappingURL=ProsePre.vue2.mjs.map
