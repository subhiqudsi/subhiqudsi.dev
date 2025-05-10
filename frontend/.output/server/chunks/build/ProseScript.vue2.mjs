import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const l=defineComponent({__name:"ProseScript",__ssrInlineRender:true,props:{src:{type:String,default:""}},setup(s){return (d,e,p,r)=>{unref(false)?e(`<div${ssrRenderAttrs(r)}> Rendering the <code>script</code> element is dangerous and is disabled by default. Consider implementing your own <code>ProseScript</code> element to have control over script rendering. </div>`):e("<!---->");}}});

const t=l.setup;l.setup=(o,n)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue"),t?t(o,n):void 0};

export { l as default };
//# sourceMappingURL=ProseScript.vue2.mjs.map
