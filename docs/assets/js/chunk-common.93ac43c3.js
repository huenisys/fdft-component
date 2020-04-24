(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,e,o){t.exports=o("56d7")},"446e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container container-xl mt-3"},[o("checkbox-filters",{staticClass:"container-xl px-0 d-none d-md-block",attrs:{id:"checkbox-filters-wrapper",collection:t.workouts,filters:t.filters,msg:"fdft-component"}}),o("accordion-filters",{staticClass:"p-2 d-md-none",attrs:{id:"accordion-filters-wrapper",collection:t.workouts,filters:t.filters,msg:"fdft-component"}}),o("hr"),o("workout-cards",{attrs:{collection:t.filtered_workouts}})],1)},s=[],n=o("5530"),c=o("2f62"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"d-flex flex-wrap justify-content-center"},t._l(t.filters,(function(e){return o("checkbox-group",{key:e.attr,attrs:{filter:e,collection:t.collection}})})),1)])},l=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"list-unstyled p-2 mx-2 border"},[o("li",{staticClass:"h5 raleway",domProps:{textContent:t._s(t.filter.label)}}),t._l(t.choices(t.filter.attr),(function(e){return o("li",{directives:[{name:"show",rawName:"v-show",value:!t.choiceHasComma(e),expression:"!choiceHasComma(choice)"}],key:e},[o("div",{staticClass:"form-check small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.model[t.filter.attr],expression:"model[filter.attr]"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e},domProps:{value:e,checked:Array.isArray(t.model[t.filter.attr])?t._i(t.model[t.filter.attr],e)>-1:t.model[t.filter.attr]},on:{change:[function(o){var r=t.model[t.filter.attr],a=o.target,s=!!a.checked;if(Array.isArray(r)){var n=e,c=t._i(r,n);a.checked?c<0&&t.$set(t.model,t.filter.attr,r.concat([n])):c>-1&&t.$set(t.model,t.filter.attr,r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.model,t.filter.attr,s)},function(e){return t.modelChanged([t.filter.attr,t.model[t.filter.attr]])}]}}),o("label",{staticClass:"form-check-label",attrs:{for:e},domProps:{textContent:t._s(t.choiceTextNoCountIfZero([t.filter.attr,e]))}})])])}))],2)},d=[],m=o("3835"),f={name:"CheckboxGroup",props:{filter:Object,collection:Array},methods:Object(n["a"])({},Object(c["d"])(["setModel"]),{modelChanged:function(t){var e=Object(m["a"])(t,2),o=e[0],r=e[1];this.setModel([o,r])}}),computed:Object(n["a"])({},Object(c["c"])(["model","choices","filtered_workouts","choiceHasComma","choiceTextNoCountIfZero","choiceCount"]))},p=f,h=o("2877"),C=Object(h["a"])(p,u,d,!1,null,null,null),v=C.exports,b={name:"CheckboxFilters",components:{"checkbox-group":v},props:{collection:Array,msg:String,filters:Array}},k=b,g=Object(h["a"])(k,i,l,!1,null,null,null),x=g.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-xl px-2",attrs:{id:"workout-cards-wrapper"}},[o("h1",{staticClass:"h6 text-center raleway"},[o("span",{staticClass:"h1"},[t._v("Workout Videos")]),t._v(" "),o("span",{staticClass:"muted raleway",domProps:{textContent:t._s("("+t.videosCount(t.collection)+")")}})]),o("hr",{staticClass:"invisible"}),o("div",{staticClass:"row",attrs:{id:"workout-cards"}},t._l(t.collection,(function(e){return o("div",{key:e.id,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 d-flex px-sm-0 mb-3 justify-content-center"},[o("div",{staticClass:"card m-2"},[o("div",{staticClass:"card-header raleway small",domProps:{textContent:t._s("Focus: "+e.focus)}}),o("div",{staticClass:"card-body p-1"},[o("span",{class:"Free"==e.access?"raleway small access-tag bg-darkgreen":"raleway small access-tag",domProps:{textContent:t._s(e.access)}}),o("a",{attrs:{href:e.landingpageurl}},[o("img",{staticClass:"card-img-top",attrs:{src:e.imagelink,width:"320",alt:""}})]),o("div",{staticClass:"card-body"},[o("h6",{staticClass:"card-title raleway",domProps:{textContent:t._s(e.title)}}),o("p",{staticClass:"small"},[o("u",{domProps:{textContent:t._s(e.videoDurationN)}}),o("i",{staticClass:"text-muted float-right",domProps:{textContent:t._s("("+t.humanizeSecs(e.videoduration)+")")}})]),o("p",{domProps:{textContent:t._s(e.trainingtype)}}),o("p",{staticClass:"card-text",domProps:{textContent:t._s(e.description)}}),o("span",{staticClass:"small",domProps:{textContent:t._s("Equipment: "+e.equipment)}})])])])])})),0)])},_=[],y={name:"WorkoutCards",props:{collection:{type:Array,default:function(){return[]}}},computed:{videosCount:function(){return function(t){return t.length}}},methods:{humanizeSecs:function(t){var e=parseInt(t/60),o=t%60;return e+"min, "+o+" sec"}}},j=y,O=Object(h["a"])(j,w,_,!1,null,null,null),N=O.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"accordion mb-0 mx-4",attrs:{id:"accordionFilters"}},t._l(t.filters,(function(e){return o("div",{key:e.attr,staticClass:"card"},[o("div",{staticClass:"card-header",staticStyle:{padding:"0"},attrs:{id:"ac_"+e.attr}},[o("h2",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link collapsed text-dark text-left btn-block",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse_"+e.attr,"aria-expanded":"false","aria-controls":"collapse_"+e.attr}},[t.model[e.attr].length>0?o("small",{staticClass:"Avenir-LT-W01_35-Light1475496 float-right",domProps:{textContent:t._s(t.model[e.attr])}}):t._e(),o("strong",{staticClass:"raleway",domProps:{textContent:t._s(e.label)}})])])]),o("div",{staticClass:"collapse",attrs:{id:"collapse_"+e.attr,"aria-labelledby":"ac_"+e.attr,"data-parent":"#accordionFilters"}},[o("div",{staticClass:"card-body"},t._l(t.choices(e.attr),(function(r){return o("div",{key:r,staticClass:"d-block"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.choiceHasComma(r),expression:"!choiceHasComma(choice)"}],staticClass:"form-check small"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.model[e.attr],expression:"model[filter.attr]"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:r},domProps:{value:r,checked:Array.isArray(t.model[e.attr])?t._i(t.model[e.attr],r)>-1:t.model[e.attr]},on:{change:[function(o){var a=t.model[e.attr],s=o.target,n=!!s.checked;if(Array.isArray(a)){var c=r,i=t._i(a,c);s.checked?i<0&&t.$set(t.model,e.attr,a.concat([c])):i>-1&&t.$set(t.model,e.attr,a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.model,e.attr,n)},function(o){return t.modelChanged([e.attr,t.model[e.attr]])}]}}),o("label",{staticClass:"form-check-label",attrs:{for:r},domProps:{textContent:t._s(t.choiceTextNoCountIfZero([e.attr,r]))}})])])})),0)])])})),0)])},P=[],$={name:"AccordionFilters",props:{collection:Array,msg:String,filters:Array},methods:Object(n["a"])({},Object(c["d"])(["setModel"]),{modelChanged:function(t){var e=Object(m["a"])(t,2),o=e[0],r=e[1];this.setModel([o,r])}}),computed:Object(n["a"])({},Object(c["c"])(["model","choices","filtered_workouts","choiceHasComma","choiceTextNoCountIfZero","choiceCount"]))},D=$,F=Object(h["a"])(D,A,P,!1,null,null,null),T=F.exports,W={name:"Fdft",components:{"checkbox-filters":x,"workout-cards":N,"accordion-filters":T},computed:Object(n["a"])({},Object(c["c"])(["workouts","filters","filtered_workouts"])),methods:Object(n["a"])({},Object(c["b"])(["fetchWorkouts"])),mounted(){this.fetchWorkouts().then(()=>console.log("Fetch success: workouts")).catch(t=>console.error("Fetch workouts failure: "+t.message))}},q=W,E=Object(h["a"])(q,a,s,!1,null,null,null,!0),H=E.exports,I=(o("4de4"),o("4160"),o("caad"),o("d81d"),o("d3b7"),o("ac1f"),o("6062"),o("2532"),o("3ca3"),o("1276"),o("498a"),o("159b"),o("ddb0"),o("2909"));function S(t){var e=parseInt;return t.videoduration<600?t.videoDurationN="Under 10 minutes":e(t.videoduration)>=600&&e(t.videoduration)<900?t.videoDurationN="10-15 minutes":e(t.videoduration)>=900&&e(t.videoduration)<=1200?t.videoDurationN="15-20 minutes":t.videoDurationN="Over 15 minutes",t}r["a"].use(c["a"]);var M=new c["a"].Store({state:{workouts:[],filters:[{attr:"access",label:"Access"},{attr:"trainingtype",label:"Training Type"},{attr:"focus",label:"Workout Focus"},{attr:"videoDurationN",label:"Video Length"},{attr:"equipment",label:"Equipment"}],model:{access:[],videoDurationN:[],focus:[],trainingtype:[],equipment:[]}},getters:{workouts:function(t){return t.workouts.length>0?t.workouts:[]},filters:function(t){return t.filters},model:function(t){return t.model},m:function(t){return t.model},choiceHasComma:function(){return function(t){return t&&t.includes(",")}},choiceCount:function(t,e){return function(t){var o=Object(m["a"])(t,2),r=o[0],a=o[1];return e.filtered_workouts.filter((function(t){return t[r]==a||t[r].split(",").map((function(t){return t.trim()})).includes(a)})).length}},choiceTextNoCountIfZero:function(t,e){return function(t){var o=Object(m["a"])(t,2),r=o[0],a=o[1];return 0==e.choiceCount([r,a])?a:a+" ["+e.choiceCount([r,a])+"]"}},choices:function(t,e){return function(t){return Object(I["a"])(new Set(e.workouts.map((function(e){return e[t]}))))}},filtered_workouts:function(t,e){return e.workouts.filter((function(t){return e.m["access"].includes(t["access"])||0===e.m["access"].length})).filter((function(t){var o=[];return t["trainingtype"].split(",").forEach((function(t){e.m["trainingtype"].includes(t.trim())&&o.push(t.trim())})),o.length>0||0===e.m["trainingtype"].length})).filter((function(t){return e.m["focus"].includes(t["focus"])||0===e.m["focus"].length})).filter((function(t){return e.m["videoDurationN"].includes(t["videoDurationN"])||0===e.m["videoDurationN"].length})).filter((function(t){return e.m["equipment"].includes(t["equipment"])||0===e.m["equipment"].length}))}},mutations:{setModel:function(t,e){var o=Object(m["a"])(e,2),r=o[0],a=o[1];t.model[r]=a},setWorkouts:function(t,e){t.workouts=e}},actions:{fetchWorkouts:function(t){return fetch("/assets/data/workouts.json").then((function(t){return t.json()})).then((function(t){return t.map((function(t){return S(t)}))})).then((function(e){t.commit("setWorkouts",e)}))}},modules:{}});o("4989"),o("446e");r["a"].config.productionTip=!1,new r["a"]({store:M,render:function(t){return t(H)}}).$mount("#fdft")}}]);
//# sourceMappingURL=chunk-common.93ac43c3.js.map