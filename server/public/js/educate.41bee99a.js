(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["educate"],{"466d":function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),r=a("50c4"),s=a("1d80"),o=a("8aa5"),c=a("14c3");i("match",1,(function(t,e,a){return[function(e){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var s=n(t),l=String(this);if(!s.global)return c(s,l);var d=s.unicode;s.lastIndex=0;var u,h=[],p=0;while(null!==(u=c(s,l))){var f=String(u[0]);h[p]=f,""===f&&(s.lastIndex=o(l,r(s.lastIndex),d)),p++}return 0===p?null:h}]}))},"4de4":function(t,e,a){"use strict";var i=a("23e7"),n=a("b727").filter,r=a("1dde"),s=a("ae40"),o=r("filter"),c=s("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"55a5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticStyle:{"padding-left":"100px","padding-right":"100px"}},[t._m(1),a("div",{staticClass:"org-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"org-bar",staticStyle:{width:"30%"},attrs:{type:"text",placeholder:"Search by name or topic"},domProps:{value:t.search},on:{keyup:t.CheckInputContent,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasContent,expression:"hasContent"}],attrs:{id:"government-contact-info"}},[a("div",t._l(t.searchResults,(function(e){return a("b-card",{key:e.name,staticClass:"mb-2 cards library",staticStyle:{"max-width":"24rem",display:"inline-block","border-radius":"8px",margin:"10px",border:"4px solid #966058"},attrs:{title:e.name,"sub-title":e.Type,"img-src":e.imageUrls,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("p"),a("p",[t._v(" "+t._s(e.time)+" ")])]),a("b-button",{staticStyle:{"background-color":"#c49d79",border:"2px solid #c49d79"},attrs:{type:"button",variant:"primary"},on:{click:function(a){return t.RedirectToLink(e)}}},[t._v("View")])],1)})),1)]),a("div",{staticClass:"carousel-outer"},[a("div",{staticClass:"carousel-inn"},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:6e3,controls:"",indicators:"",background:"#ababab","img-width":"200","img-height":"550"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{staticClass:"caption",attrs:{caption:"Allyship is continual",text:"We're finding that the rate of police murders on a national level has remained consistent since #BlackLivesMatter first trended in 2013. Creating lasting change requires continual action, we need to continue asking for accountability.","img-src":"https://image.freepik.com/free-photo/closeup-diverse-people-holding-hands_53876-47126.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.imgur.com/wBJjNyu.png"}}),a("b-carousel-slide",{attrs:{caption:"Police accountability",text:"Checks and balances for our larger justice system protect the people. The Stanford Open Policing Project examined almost 100 million traffic stops and found officers targeted areas larger in minority populations to fulfill a quota based system.","img-src":"https://go.tiffinohio.net/wp-content/uploads/2020/06/police-tear-gas-bw-web.jpg"}})],1)],1)]),a("div",{staticStyle:{padding:"20px"}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"100px","padding-bottom":"10px","background-color":"#966058"}},[a("a",{staticStyle:{color:"#ffffff"},attrs:{href:"https://airtable.com/shrYjsZT8NitBzXN5"}},[a("h4",[t._v("Add a learning resource ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[a("br"),t._v(" Show up as a student, in every medium ")])])}],r=(a("4de4"),a("ac1f"),a("466d"),a("841c"),{data:function(){return{hasContent:!1,search:"",searchCompleted:!0,searchResults:[],error:""}},methods:{CheckInputContent:function(){""!=this.search?this.hasContent=!0:this.hasContent=!1},RedirectToLink:function(t){window.open(t.contentLink)}},computed:{filteredCauses:function(){var t=this;return this.searchResults.filter((function(e){return e.Name.toLowerCase().match(t.search.toLowerCase())}))}},created:function(){var t=this;this.$http.get("https://murmuring-headland-63935.herokuapp.com/api/library").then((function(e){t.searchResults=e.body,console.log(t.searchResults)}),(function(t){}))}}),s=r,o=(a("baf9"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,null,null);e["default"]=c.exports},6547:function(t,e,a){var i=a("a691"),n=a("1d80"),r=function(t){return function(e,a){var r,s,o=String(n(e)),c=i(a),l=o.length;return c<0||c>=l?t?"":void 0:(r=o.charCodeAt(c),r<55296||r>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):r:t?o.slice(c,c+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(t,e,a){"use strict";var i=a("6547").charAt;t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},baf9:function(t,e,a){"use strict";var i=a("f83f"),n=a.n(i);n.a},f83f:function(t,e,a){}}]);
//# sourceMappingURL=educate.41bee99a.js.map