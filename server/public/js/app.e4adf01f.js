(function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={app:0},s={app:0},o=[];function r(e){return l.p+"js/"+({about:"about",collaborate:"collaborate",contribute:"contribute",educate:"educate"}[e]||e)+"."+{about:"14b09657",collaborate:"5a80add3",contribute:"9030537e",educate:"f1d69d8d"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={collaborate:1,contribute:1,educate:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({about:"about",collaborate:"collaborate",contribute:"contribute",educate:"educate"}[e]||e)+"."+{about:"31d6cfe0",collaborate:"208ad8e7",contribute:"0fc17e43",educate:"46144c29"}[e]+".css",s=l.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===s))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===n||d===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[e],h.parentNode.removeChild(h),a(o)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(h);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,a[1](u)}s[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"041e":function(e,t,a){"use strict";var n=a("ac8e"),i=a.n(n);i.a},1:function(e,t){},4705:function(e,t,a){},"52b8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("28dd"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"}}),a("HeaderMobile"),a("div",{staticClass:"content",class:{open:e.showNav}},[a("div",{staticClass:"top-bar"},[e.mobileView?a("div",{attrs:{id:"navigation-icon"},on:{click:function(t){e.showNav=!e.showNav}}},[a("i",{staticClass:"fas fa-bars"})]):e._e()])]),e.mobileView?e._e():a("Header"),a("router-view"),a("Footer")],1)},o=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",[a("ul",[a("li",[a("a",{staticStyle:{"border-radius":"18px",border:"3px solid white","padding-left":"3px"},attrs:{href:"https://forms.gle/ZYGf77F4dMMiMdpx9"}},[e._v(" Subscribe ")])]),a("li",[a("a",{attrs:{href:""}},[e._v("Volunteer")])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Home"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"https://i.ibb.co/j4t3YL6/imageedit-8-6683678944.png",alt:"imageedit-8-6683678944",border:"0"}})])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Educate"}},[e._v("Educate ")])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Collaborate"}},[e._v("Elevate")])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Contribute"}},[e._v("Circulate")])]),a("li",{staticClass:"mainNav",staticStyle:{"padding-right":"400px"}},[a("a",{attrs:{href:"/Elevate"}},[e._v("Communicate")])])])])])])}],c={data:function(){return{}}},d=c,u=(a("7d24"),a("2877")),h=Object(u["a"])(d,r,l,!1,null,null,null),f=h.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[e._v(" How can we help? "),a("a",{attrs:{href:"https://forms.gle/xYmhA16RrbwzHCDU8"}},[a("div",{staticClass:"button"},[e._v(" Add Resources here ")])]),a("a",{attrs:{href:"https://forms.gle/KgK5f6hXrQz1Ciea9"}},[a("div",{staticClass:"button"},[e._v(" Stay Updated ")])])]),a("div",{staticClass:"footer-container resource text-white border-yellow"},[a("div",[e._v(" Educate "),a("button",{staticClass:"textbtn"},[e._v(" FAQ: Current Events")]),a("a",{staticClass:"textbtn",attrs:{href:"/Educate"}},[e._v(" Take a learning Path ")]),a("button",{staticClass:"textbtn"},[e._v(" Belonging within your team ")])]),a("div",[e._v(" Contribute "),a("button",{staticClass:"textbtn"},[e._v(" Say their Names: Families Affected ")]),a("button",{staticClass:"textbtn"},[e._v(" Submit a resource ")])]),a("div",[e._v(" Elevate "),a("button",{staticClass:"textbtn"},[e._v(" Say their Names ")]),a("button",{staticClass:"textbtn"},[e._v(" Reach local representatives ")]),a("button",{staticClass:"textbtn"},[e._v(" Submit a letter ")])]),a("div",[e._v(" Ally.Guide "),a("button",{staticClass:"textbtn"},[e._v(" About Us ")]),a("button",{staticClass:"textbtn"},[e._v(" Offer Services ")]),a("button",{staticClass:"textbtn"},[e._v(" Join Alley.Guide's efforts ")])])])])}],v={data:function(){return{}}},b=v,g=Object(u["a"])(b,p,m,!1,null,null,null),y=g.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header",[a("nav",[a("ul",[a("li",[a("a",{staticStyle:{"border-radius":"18px",border:"3px solid white","padding-left":"3px"},attrs:{href:"https://forms.gle/ZYGf77F4dMMiMdpx9"}},[e._v(" Subscribe ")])]),a("li",[a("a",{attrs:{href:""}},[e._v("Volunteer")])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Home"}},[a("img",{staticStyle:{width:"30px"},attrs:{src:"https://i.ibb.co/j4t3YL6/imageedit-8-6683678944.png",alt:"imageedit-8-6683678944",border:"0"}})])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Educate"}},[e._v("Educate ")])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Collaborate"}},[e._v("Elevate")])]),a("li",{staticClass:"mainNav"},[a("a",{attrs:{href:"/Contribute"}},[e._v("Circulate")])]),a("li",{staticClass:"mainNav",staticStyle:{"padding-right":"400px"}},[a("a",{attrs:{href:"/Elevate"}},[e._v("Communicate")])])])])])])}],C={},k=C,x=(a("5888"),Object(u["a"])(k,w,_,!1,null,null,null)),S=x.exports,E={data:function(){return{mobileView:!0,showNav:!1}},methods:{handleView:function(){this.mobileView=window.innerWidth<=990}},components:{Header:f,HeaderMobile:S,Footer:y},created:function(){this.handleView(),window.addEventListener("resize",this.handleView)}},A=E,T=(a("034f"),Object(u["a"])(A,s,o,!1,null,null,null)),j=T.exports,I=(a("d3b7"),a("8c4f")),M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Home"},[a("div",{staticClass:"buffer"}),a("div",{staticStyle:{"padding-left":"150px","padding-right":"150px","padding-bottom":"50px"}},[a("h1",[e._v(" Ally.Guide")]),a("h4",[e._v(" Wherever you're starting from in your allyship towards racial justice, we help you be consistent. ")])]),a("div",{staticClass:"tiles border-bottom border-white",staticStyle:{"background-image":"linear-gradient(90deg, #892819, black)"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"action-div a text-center"},[a("a",{staticClass:"elevate",attrs:{href:"/elevate"}},[a("div",{staticClass:"h-title"},[e._v("Communicate")]),a("div",{staticClass:"h-img",staticStyle:{"padding-top":"200px"}})])]),a("div",{staticClass:"action-div b"},[a("a",{staticClass:"distribute",attrs:{href:"/contribute"}},[a("div",{staticClass:"h-title"},[e._v("Circulate")]),a("div",{staticClass:"h-img"})])]),a("div",{staticClass:"action-div c"},[a("a",{staticClass:"educate",attrs:{href:"/educate"}},[a("div",{staticClass:"h-title"},[e._v("Educate")]),a("div",{staticClass:"h-img"})])]),a("div",{staticClass:"action-div d"},[a("a",{staticClass:"collaborate",attrs:{href:"/collaborate"}},[a("div",{staticClass:"h-title"},[e._v("Elevate")]),a("div",{staticClass:"h-img"})])])])])])}],N={name:"Home",components:{}},O=N,$=Object(u["a"])(O,M,P,!1,null,null,null),B=$.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"padding-top":"260px"}},[e._m(0),a("div",{staticClass:"searchbanner"},[e._m(1),a("div",{attrs:{id:"search-ui"}},[a("div",[a("b-form-input",{staticClass:"searchform",staticStyle:{width:"30%"},attrs:{type:"text",placeholder:"Enter a Zipcode"},on:{keyup:e.CheckInputContent},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("button",{staticClass:"btn btn-outline-warning",attrs:{type:"button"},on:{click:function(t){return e.CreateRepList()}}},[e._v("Search")])],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasContent,expression:"hasContent"}],attrs:{id:"government-contact-info"}},[a("div",e._l(e.congressMembers,(function(t){return a("b-card",{key:t.name,staticClass:"mb-2 cards elevate",staticStyle:{width:"24rem",display:"inline-block",margin:"10px",padding:"30px"},attrs:{title:t.name,"sub-title":t.title,"img-src":t.photoUrl,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("p",[a("i",{staticClass:"fas fa-map-marker-alt",staticStyle:{"font-size":"20px",width:"1.5rem"}}),e._v(" "+e._s(t.city)+" "+e._s(t.state)+" ")]),a("p",[a("i",{staticClass:"fas fa-envelope",staticStyle:{"font-size":"25px",width:"1.5rem"}}),e._v(" "+e._s(t.email)+" ")]),a("p",[a("i",{staticClass:"fab fa-facebook-square",staticStyle:{"font-size":"25px",width:"1.5rem"}}),e._v(" "+e._s(t.facebook)+" ")]),a("p",[a("i",{staticClass:"fab fa-twitter",staticStyle:{"font-size":"25px",width:"1.5rem"}}),e._v(" "+e._s(t.twitter)+" ")])]),a("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(a){return e.ToggleMessageUI(t)}}},[e._v("Send a Message")])],1)})),1)]),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showmessageUI,expression:"showmessageUI"}],attrs:{id:"message-ui"}},[e._m(2),a("div",[e._m(3),e._l(e.messages,(function(t){return a("div",{key:t.mid,staticClass:"m-2 d-inline"},[a("button",{staticClass:"btn-dark btn m-2",on:{click:function(a){e.component=t.component}}},[e._v(e._s(t.name))])])})),a("div",{staticClass:"outerdiv"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showmessageUI,expression:"showmessageUI"}],attrs:{id:"test"}},[a("h1",{staticClass:"p-2",staticStyle:{display:"block"}},[e._v("To "+e._s(e.selectedMember.name)+",")])]),a(e.component,{tag:"component"})],1)],2)])]),e._m(4)])},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"elevatetext",staticStyle:{"background-color":"#d2a07e"}},[a("h4",{staticStyle:{color:"#996b58"}},[e._v("Changes start by doing.")]),a("img",{attrs:{src:"https://i.ibb.co/4Fb74Kr/Screen-Shot-2020-07-16-at-11-50-58-PM.png"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",[a("br"),e._v("Elevate and amplify racial justice issues ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"selected-member"}},[a("div")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("br"),a("h2",[e._v("What would you like to do?")]),a("p",[e._v(" Click the buttons below to generate an email template. ")]),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"defundbanner"},[a("a",{attrs:{href:"https://defund12.org/"}},[e._v("#Defund12: Reach out to your county to defund police")])])}],G=(a("ac1f"),a("841c"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"output"},[a("br"),a("p",[e._v('I am writing to demand justice for George Floyd, Breonna Taylor, Trayvon Martin, and every other American whose life ended too soon at the hands of the police force. This week, U.S. Congressman Justin Amash, an independent from Michigan, is introducing the "Ending Qualified Immunity Act." This Act will eliminate qualified immunity and restore Americans’ ability to obtain relief when police officers violate their constitutionally secured rights. As Amash has stated, the "Civil Rights Act of 1871 gave individuals the right to sue local and state officials, including police officers, that violate their rights." But in 1967, the Supreme Court began gutting this law by creating the qualified immunity doctrine. The ACLU says "qualified immunity is one of the many barriers standing in the way of justice and accountability when the police use excessive force disproportionately against people of color."')]),e._v(" "),a("br"),a("p",[e._v(' Government actors should not be held to less of a standard than the general public, they should be held to an even higher standard because of the power they hold. George Floyd\'s murder is part of a much greater pattern of egregious police misconduct, and until police officers are no longer "legally, politically, and culturally insulated from consequences for violating the rights of the people they are sworn to protect," there can be no end to this pattern. Qualified Immunity is the first step to solving this problem, please sign the “Ending Qualified Immunity Act”. ')]),a("br"),a("br"),a("p",[e._v(" Best, ")])])}],W={data:function(){return{}}},U=W,q=Object(u["a"])(U,G,R,!1,null,null,null),F=q.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"output"},[a("br"),a("p",[e._v("Predatory policing, police brutality, and killing of Black men, women, girls, and boys is not news. The video capture of George Floyd’s arrest and murder, along with the subsequent outrage and protests highlight the need for change in the criminal justice system.")]),a("br"),a("p",[e._v("Historically, procedural police reforms prove ineffective. The time to reverse decades of expansion of the scope, the intensity of, and the militarization of policing is now. Below are some petitions that support the cause.")]),a("br"),a("p",[a("a",{attrs:{href:"https://www.change.org/p/national-action-against-police-brutality-and-murder"}},[e._v("National Action Against Police Brutality and Murder")]),e._v(", "),a("a",{attrs:{href:"https://act.colorofchange.org/sign/state-emergency-black-people-are-dying?source=coc_main_website"}},[e._v("End the War on Black People")]),e._v(", "),a("a",{attrs:{href:"https://peoplesbudgetla.com/"}},[e._v("LA City Council: Defund the Police")]),e._v(", "),a("a",{attrs:{href:"https://secure.everyaction.com/eR7GA7oz70GL8doBq19LrA2"}},[e._v("Tell Minneapolis City Council to Defund the Police")]),e._v(". ")]),a("br"),a("p",[e._v("Our ask is for acknowledgment and an end be put to the devaluation and dehumanization of Black lives at the hand of police. This acknowledgment looks like the arrest and firing of officers who enforce law unethically, defunding of police, and reorientation of tax dollars to prison abolition efforts.")]),a("br"),a("p",[e._v("We ask instead, that social workers, health workers, and education have more funding to deescalate situations they are better trained for than police while ensuring children have the resources to avoid school to prison pipeline. We don’t need police in schools or community centers, we need social workers and higher volumes of them which can only be ensured by decreasing policing funds and prioritizing health, education, and community groups. Black lives matter, please continue to reflect this sentiment with real actions towards the end of police brutality instead of verbal consolations.")]),a("br"),a("p",[e._v("Best,")])])}],V={data:function(){return{}}},K=V,J=Object(u["a"])(K,z,D,!1,null,null,null),Q=J.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"output"},[a("br"),a("p",[e._v(" I am writing to ask that you use your platform to investigate and restore checks and balances of the Army and other Department of Defense operations. Please implore US Senator Ted Cruz to open a congressional investigation into Vanessa Guillen’s disappearance off of the army base in Fort Hood and that her family has support during these trying times. ")]),e._v(" "),a("br"),a("p",[e._v(' U.S. Army investigators confirmed "partial human remains" Tuesday in Leon River, Texas, near where Guillen went missing in April. They did not confirm the body was Guillen\'s or offer a formal timetable for their "identification process."Just hours later, a suspect in Guillen\'s case killed himself as law enforcement was closing in. The Killeen Police Department said the suspect was another soldier stationed at Fort Hood who had left his post overnight. Natalie Khawam, the main attorney within this case has stated multiple times, “The base command did not provide us with the information they promised us. They were not transparent, or forthcoming. We got nothing.” It has been statedd over and over, there is suspected foul play as Guillen’s sexual harassment preceding this has been largely neglected up until her murder. ')]),e._v(" "),a("br"),a("p",[e._v(" Congress needs to do its job. The Department of Defense needs to do its job, to truly provide justice to the men and women who voluntarily serve our country and put their lives on the line. Our ask here is an official congressional investigation in parallel with outside investigators into HR practices within the Army along with financial support for Guillens family. ")]),e._v(" "),a("br"),a("p",[e._v("Sincerely, ")])])}],X={data:function(){return{}}},ee=X,te=Object(u["a"])(ee,Y,Z,!1,null,null,null),ae=te.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"output"},[a("p",[e._v(" As we’ve seen time and time again, cash bail does not promote safety and unfairly penalizes low-income defendants while those who can afford bail go free. We ask that you join us in the fight to abolish money bail and help bring about long overdue equality within our justice system for Black Americans. Prisons are currently overflowing due to poor minorities who were racially profiled and then have access to overworked pro bono officers. Many of these minorities are taken advantage of by moneybail officers, someone’s freedom shouldn’t rest on whether they have the money to buy it. ")]),e._v(" "),a("br"),a("p",[e._v("In the current climate as we request the justice system be reevaluated, the least we can do is drop cash bail systems while we protest for our right to organize and demand change. ")]),e._v(" "),a("br"),a("p",[e._v(" Tear gas has always been an inhumane method of dispersing protestors and controlling crowds and is an egregious attack on civil liberties and the right to peaceful assembly. However, the use of tear gas--which not only affects the nervous system, but also the pulmonary system-- is especially heinous during the time of a pandemic that weakens lung capacity and strength. Not only has this harmed protestors directly, many have had to remove their PPE (including face masks) to find relief from tear gas, leaving them completely exposed to COVID-19 and other pathogens. Free testing and treatment should be allocated to all. ")]),e._v(" "),a("br"),a("p",[e._v("Sincerely, ")])])}],se={data:function(){return{}}},oe=se,re=Object(u["a"])(oe,ne,ie,!1,null,null,null),le=re.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},de=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"output"},[a("br"),a("p",[e._v("I am writing to ask that you use your platform to bring reform to the policies that inherently advance the erasure of American Indian landmarks and treaties signed to return their land.“This place is very, very sacred to our people,” says Nick Tilsen, president and CEO of the NDN Collective. “Stealing our land and then carving the faces of four white men who were colonizers, who committed genocide against Indigenous people, is an egregious act of violence.” ")]),e._v(" "),a("br"),a("p",[e._v("Historically this has been the site of The Six Grandfathers and a sacred place for the Lakota-Sioux people. President Trumps ‘Freedom’ get together exacerbated the region as thousands descended without proper masks or social distancing protocol. All of this comes as Indian Country has been particularly hard hit by the coronavirus pandemic. ")]),e._v(" "),a("br"),a("p",[e._v(" After years of legal challenges, the Supreme Court in 1980 upheld the Indian Claims Commission's ruling that the taking of the Black Hills was illegal under the Fifth Amendment, based on the fact that 75% of the tribe’s men had not consented to the agreement. We want to echo that we need you to be accountable for reparations beginning with restoring Mount Rushmore to The Six Grandfathers, and providing medical supplies to the tribal governments of Lakota, Rosebud Sioux, Cheyenne River Sioux, and Oglala Sioux tribes")]),e._v(" "),a("br"),a("p",[e._v("Sincerely, ")])])}],ue={data:function(){return{}}},he=ue,fe=Object(u["a"])(he,ce,de,!1,null,null,null),pe=fe.exports,me={components:{EndPoliceImmunity:F,DefundPolice:Q,InvestigateTheArmy:ae,EndMoneyBail:le,RestoreSixGrandfathers:pe},data:function(){return{messages:[{name:"End Police Immunity",component:"EndPoliceImmunity"},{name:"Say their names",component:"DefundPolice"},{name:"Investigate the Army",component:"InvestigateTheArmy"},{name:"End Money Bail",component:"EndMoneyBail"},{name:"Restore Six Grandfathers",component:"RestoreSixGrandfathers"}],congressMembers:[],reps:[],component:"EndPoliceImmunity",selectedMember:{},showmessageUI:!1,showTextArea:!1,selectionMade:!1,showCongressInfo:!0,hasContent:!1,search:""}},methods:{CheckInputContent:function(){""!=this.search?this.hasContent=!0:this.hasContent=!1},ToggleMessageUI:function(e){this.selectedMember=e,this.showmessageUI=!0,this.hasContent=!1,this.search="",this.congressMembers=[]},ToggleTextArea:function(){this.showTextArea=!0},CreateRepList:function(){var e=this;this.congressMembers=[],this.$http.get("https://murmuring-headland-63935.herokuapp.com/api/elevate/"+this.search).then((function(t){console.log(t.data),e.congressMembers=t.data,e.hasContent=!0}),(function(e){}))},SendEmail:function(){this.$http.get("http://localhost:5000/api/email").then((function(e){console.log(e.data)}),(function(e){}))}},computed:{},created:function(){}},ve=me,be=Object(u["a"])(ve,L,H,!1,null,null,null),ge=be.exports;a("a074");n["default"].use(I["a"]);var ye=[{path:"/",name:"Home",component:B},{path:"/Home",name:"Home",component:B},{path:"/elevate",name:"Elevate",component:ge},{path:"/Library",name:"Library",component:function(){return a.e("educate").then(a.bind(null,"55a5"))}},{path:"/educate",name:"Educate",component:function(){return a.e("educate").then(a.bind(null,"a074"))}},{path:"/contribute",name:"Contribute",component:function(){return a.e("contribute").then(a.bind(null,"61d5"))}},{path:"/collaborate",name:"Collaborate",component:function(){return a.e("collaborate").then(a.bind(null,"99ce"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],we=new I["a"]({routes:ye,mode:"history"}),_e=we,Ce=a("2f62");n["default"].use(Ce["a"]);var ke=new Ce["a"].Store({state:{},mutations:{},actions:{},modules:{}}),xe=a("dbc7"),Se=a.n(xe),Ee=a("a7c1"),Ae=a.n(Ee),Te=a("5f5b");a("f9e3"),a("2dd8"),a("ab8b");n["default"].config.productionTip=!1,n["default"].use(i["a"]),n["default"].use(Te["a"]),new n["default"]({router:_e,store:ke,colors:Se.a,styles:Ae.a,render:function(e){return e(j)}}).$mount("#app")},5888:function(e,t,a){"use strict";var n=a("52b8"),i=a.n(n);i.a},"7d24":function(e,t,a){"use strict";var n=a("4705"),i=a.n(n);i.a},"85ec":function(e,t,a){},a074:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"200px"}},[a("h1",{staticStyle:{}},[e._v("Show up as a student.")]),a("div",{staticClass:"carousel-outer"},[a("div",{staticClass:"carousel-inn"},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:6e3,controls:"",indicators:"",background:"#ababab","img-width":"200","img-height":"400"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[a("b-carousel-slide",{staticClass:"caption",attrs:{caption:"Allyship is continual",text:"We're finding that the rate of police murders on a national level has remained consistent since #BlackLivesMatter first trended in 2013. Creating lasting change requires continual action, we need to continue asking for accountability.","img-src":"https://image.freepik.com/free-photo/closeup-diverse-people-holding-hands_53876-47126.jpg"}}),a("b-carousel-slide",{attrs:{"img-src":"https://i.imgur.com/wBJjNyu.png"}}),a("b-carousel-slide",{attrs:{caption:"Police accountability",text:"Checks and balances for our larger justice system protect the people. The Stanford Open Policing Project examined almost 100 million traffic stops and found officers targeted areas larger in minority populations to fulfill a quota based system.","img-src":"https://go.tiffinohio.net/wp-content/uploads/2020/06/police-tear-gas-bw-web.jpg"}})],1)],1)]),e._m(0),a("div",{staticClass:"FAQ-outer"},[a("div",{staticClass:"accordion-container"},[a("h2",{staticClass:"title"},[e._v("Are you aware?")]),a("div",[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("Why are the protests happening now?")]),a("b-collapse",{attrs:{id:"accordion-1"},model:{value:e.collapseStates[0],callback:function(t){e.$set(e.collapseStates,0,t)},expression:"collapseStates[0]"}},[a("div",{staticClass:"acc-body"},[e._v("In this current moment, we want to highlight the disproportionate violence that challenges whether Black lives matter. On a larger scale, this highlights the bleak and genocidal history of the US which is founded on stolen land and the labor of Indigenous and Black communities. This is why we see injustices that are rooted towards BIPOC (Black, Indigenous, People of Color) and is often the foundation of why we see social injustices as well intersectional of class, gender, ability, and beyond. ")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("But don't all lives matter?")]),a("b-collapse",{attrs:{id:"accordion-2"},model:{value:e.collapseStates[1],callback:function(t){e.$set(e.collapseStates,1,t)},expression:"collapseStates[1]"}},[a("div",{staticClass:"acc-body"},[e._v(" All lives should matter, but the different realities we live in show that this may not be in practice. If this is the first time you're hearing this question: Ashton Kutcher's breakdown: If you want to read and understand the history: We know all lives matter, but the worth of white lives has never been a question. We say \"Black Lives Matter\" to acknowledge the ways in which these lives are considered less than: "),a("br"),e._v("- Redlining neighborhoods where POC live "),a("br"),e._v("- Limited employment/education opportunities "),a("br"),e._v("- Voter disenfranchisement "),a("br"),e._v("- Racial disparities in imprisonment/sentencing for non-violent crimes "),a("br"),e._v("- Largely unregulated racially biased law enforcement "),a("br"),e._v("- De Facto Racism: laws that are racist in practice. "),a("br")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("What has ever been reached by violent protests?")]),a("b-collapse",{attrs:{id:"accordion-3"},model:{value:e.collapseStates[2],callback:function(t){e.$set(e.collapseStates,2,t)},expression:"collapseStates[2]"}},[a("div",{staticClass:"acc-body"},[e._v("Throughout history, the course of our liberties has been decided by our commitment to right for all. From having the weekends off, nuclear disarmament, reducing taxes to marches for Civil Rights, Women's Suffrage movement and the Stonewall Riots. We have the right to organize and we should exercise it. Here are some more "),a("a",{attrs:{href:"https://www.businessinsider.com/largest-marches-us-history-2017-1#the-anti-nuclear-march-in-new-york-citys-central-park-was-on-june-12-1982-protesters-sought-nuclear-disarmament-by-the-us-government-4"}},[e._v("examples")]),e._v(". ")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("How do I join a protest? ")]),a("b-collapse",{attrs:{id:"accordion-4"},model:{value:e.collapseStates[3],callback:function(t){e.$set(e.collapseStates,3,t)},expression:"collapseStates[3]"}},[a("div",{staticClass:"acc-body"},[e._v("Make sure to check out "),a("a",{attrs:{href:"https://www.highsnobiety.com/p/how-to-protest-safely/"}},[e._v("AOC's guidelines")]),e._v(" for starters. Remember to wear a mask, scrub the data of any pictures, wear protective gear, and always protect Black folx protesting by being a human shield if necessary.")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("How should I post about this on social media?")]),a("b-collapse",{attrs:{id:"accordion-4"},model:{value:e.collapseStates[3],callback:function(t){e.$set(e.collapseStates,3,t)},expression:"collapseStates[3]"}},[a("div",{staticClass:"acc-body"},[e._v("DO: Boost and contribute to local and national funds, share infographics around direct actions, and engage in dialogue questioning personal freedoms and biases. "),a("br"),e._v("DON'T: Photos and videos of police brutality towards black lives can be traumatic for anyone, and triggering for many POC. Avoid sharing this content as it increases to the dehumanization of black lives.")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("What kind of changes are we hoping to enact?")]),a("b-collapse",{attrs:{id:"accordion-5"},model:{value:e.collapseStates[4],callback:function(t){e.$set(e.collapseStates,4,t)},expression:"collapseStates[4]"}},[a("div",{staticClass:"acc-body"},[e._v("We hope to sustain allies' support after the attention of viral police brutality has died down. Ally.Guide hopes to help you unlearn unconscious biases, and build a new foundation of racial justice education thats connected to direct action.")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("Why are all cops bad?")]),a("b-collapse",{attrs:{id:"accordion-6"},model:{value:e.collapseStates[5],callback:function(t){e.$set(e.collapseStates,5,t)},expression:"collapseStates[5]"}},[a("div",{staticClass:"acc-body"},[e._v("This question often overlooks the extend that an infrastructure's culture will impact the individual. Looking at the infographic in the above infographic, we find that cops originally were started as a form of patrol towards folx that were enslaved. This create a systemic tone that reflects the type of training and environment is still set today even with cops of color. As the "),a("a",{attrs:{href:"https://journalism.stanford.edu/stanford-open-policing-project-analyzed-data-from-nearly-100-million-traffic-stops-in-the-us/"}},[e._v("Stanford Open Policing Study")]),e._v(" showcased, abuse of power is frequent without checks and balances with the Police Immunity Act. "),a("a",{attrs:{href:"https://theconversation.com/how-to-understand-police-violence-not-a-case-of-good-cop-vs-bad-cop-140039"}},[e._v("Read More ")])])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-7",modifiers:{"accordion-7":!0}}],staticClass:"mt-2",attrs:{block:""}},[e._v("How to support my friends of color?")]),a("b-collapse",{attrs:{id:"accordion-7"},model:{value:e.collapseStates[6],callback:function(t){e.$set(e.collapseStates,6,t)},expression:"collapseStates[6]"}},[a("div",{staticClass:"acc-body"},[e._v("When reaching out to friends, ask yourself if you want to feel better or provide support? If its through support, make it actionable - are you dropping off a care package, offering to do an errand, etc? We hope taking a Learning Path continues to be part of your journey as an ally long after the outrage. Continue to support black media, black initiatives and charities after the headlines have died down.")])])],1)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edu-nav"},[a("a",{staticClass:"btn-2",attrs:{href:"https://airtable.com/shrPlbsh5wMvA99rq"}},[e._v("Take a learning path")]),a("a",{staticClass:"btn-2",attrs:{href:"https://airtable.com/shrRo99oHE0aGMKOW"}},[e._v("Train your team")]),a("a",{staticClass:"btn-2",attrs:{href:"/Library"}},[e._v("Library")])])}],s=(a("d81d"),{data:function(){return{congressMembers:[],selectedMember:{},showmessageUI:!1,search:"",slide:0,sliding:null,collapseStates:[!1,!1,!1]}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1},ToggleMessageUI:function(e){},expandAll:function(){this.collapseStates=this.collapseStates.map((function(e){return!0}))},collapseAll:function(){this.collapseStates=this.collapseStates.map((function(e){return!1}))}},computed:{},created:function(){}}),o=s,r=(a("041e"),a("2877")),l=Object(r["a"])(o,n,i,!1,null,null,null);t["default"]=l.exports},a7c1:function(e,t,a){},ac8e:function(e,t,a){},dbc7:function(e,t,a){}});
//# sourceMappingURL=app.e4adf01f.js.map