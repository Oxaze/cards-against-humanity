(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"src/assets/js/"+({}[e]||e)+"."+{"chunk-2d0b90b0":"dd3a1317","chunk-2d0ba81e":"b917c670","chunk-2d0c9555":"e308bb11","chunk-6c57af68":"abbc2886","chunk-2d0ab649":"5dc96c0a","chunk-2d0cca24":"acf9bce1","chunk-2d0bdba4":"2cc1fb70","chunk-2d231232":"9f709e8b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6c57af68":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="src/assets/css/"+({}[e]||e)+"."+{"chunk-2d0b90b0":"31d6cfe0","chunk-2d0ba81e":"31d6cfe0","chunk-2d0c9555":"31d6cfe0","chunk-6c57af68":"dda77fbc","chunk-2d0ab649":"31d6cfe0","chunk-2d0cca24":"31d6cfe0","chunk-2d0bdba4":"31d6cfe0","chunk-2d231232":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],l.parentNode.removeChild(l),n(c)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"site-header"},[n("h1",[n("router-link",{staticClass:"site-header__text",attrs:{to:{path:"/"}}},[e._v("Cards Against Humanity")])],1)])},o=[],a={name:"CAHHeader"},c=a,i=n("2877"),u=Object(i["a"])(c,r,o,!1,null,null,null);t["a"]=u.exports},"51f7":function(e,t,n){"use strict";var r=n("71b5"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("5637"),a=n.n(o),c=n("f2d6"),i=n.n(c),u=n("7bb1"),s=n("8c4f"),d=n("dc59"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrapper"},[n("CAHHeader"),n("keep-alive",[n(e.currentTab(),{tag:"component"})],1)],1)},l=[],p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),m=n("2f62"),h=n("0418");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(p["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v={name:"SignIn",components:{CAHHeader:h["a"],SignInForm:function(){return Promise.all([n.e("chunk-6c57af68"),n.e("chunk-2d0ab649")]).then(n.bind(null,"14a1"))},SignOutForm:function(){return Promise.all([n.e("chunk-6c57af68"),n.e("chunk-2d0cca24")]).then(n.bind(null,"4f84"))}},created:function(){var e=this;d["a"].onAuthStateChanged(function(t){t?e.SET_TAB("SignOutForm"):t||e.SET_TAB("SignInForm")})},methods:g({},Object(m["e"])(["currentTab"]),{},Object(m["d"])(["SET_TAB"]))},y=v,_=n("2877"),O=Object(_["a"])(y,f,l,!1,null,null,null),E=O.exports;r["a"].use(s["a"]);var S=new s["a"]({mode:"history",routes:[{path:"/",name:"SignIn",component:E},{path:"/create-or-join",name:"CreateOrJoin",component:function(){return n.e("chunk-2d0b90b0").then(n.bind(null,"30eb"))},meta:{requiresAuth:!0}},{path:"/room/:id",name:"Room",component:function(){return n.e("chunk-2d0c9555").then(n.bind(null,"5961"))},meta:{requiresAuth:!0}},{path:"/page-not-found",name:"page-not-found",component:function(){return n.e("chunk-2d0ba81e").then(n.bind(null,"3803"))}},{path:"/page-not-found",component:function(){return n.e("chunk-2d0ba81e").then(n.bind(null,"3803"))},alias:"*"}]});S.beforeEach(function(e,t,n){var r=e.matched.some(function(e){return e.meta.requiresAuth});d["a"].onAuthStateChanged(function(e){r&&!e?n({path:"/",params:{redirectedThroughAuth:"true"}}):n()})});var k=S,T=(n("7f7f"),n("bfa9")),w=new T["a"]({reducer:function(e){return{user:e.user,room:e.room}}});r["a"].use(m["a"]);var A=new m["a"].Store({state:{user:{nickname:"",uid:""},currentTab:"",room:{id:"",players:[],maxPoints:null,owner:null,started:null,czar:null}},mutations:{SET_USER:function(e,t){e.user=t},SET_TAB:function(e,t){e.currentTab=t},SET_ROOM:function(e,t){e.room=t},SET_ROOM_REALTIMEDATA:function(e){var t=[];d["b"].collection("rooms/".concat(k.currentRoute.params.id,"/players")).onSnapshot(function(n){t=[],n.forEach(function(e){t.push({name:e.data().name,score:e.data().score,isCzar:e.data().isCzar,uid:e.id})}),e.room.players=t}),d["b"].collection("rooms").doc(k.currentRoute.params.id).onSnapshot(function(t){e.room.czar=t.data().czar?e.room.players.filter(function(e){return e.uid===t.data().czar.id}).map(function(e){return e.name})[0]:"LeSupper",e.room.started=t.data().started})},SET_ROOM_METADATA:function(e){d["b"].collection("rooms").doc(k.currentRoute.params.id).get().then(function(t){e.room.maxPoints=t.data().maxPoints,e.room.owner=t.data().owner.id,e.room.id=t.id}).catch(function(e){console.error(e)})},SET_ROOM_STARTED:function(e,t){e.room.started=t},DELETE_USER:function(e){e.user.nickname="",e.user.uid=""}},actions:{addUserdata:function(e,t){var n=e.commit,r=t.nickname,o=t.uid;if(!r||!o)throw new Error("Either nickname or UID not defined.");n("SET_USER",{nickname:r,uid:o})},addRoomdata:function(e,t){var n=e.commit,r=t.id;if(!r)throw new Error("Room ID not defined.");n("SET_ROOM",{id:r})},setRoomdata:function(e){var t=e.commit;t("SET_ROOM_REALTIMEDATA"),t("SET_ROOM_METADATA")},setStarted:function(e,t){var n=e.commit,r=e.state;if("boolean"!==typeof t)throw new Error("Argument is not a boolean.");d["b"].collection("rooms").doc(r.room.id).update({started:!0}).then(function(){n("SET_ROOM_STARTED",t),console.log("Started game successfully.")}).catch(function(e){console.error(e)})}},getters:{getPlayers:function(e){return e.room.players},getMaxPoints:function(e){return e.room.maxPoints},getUserIsOwner:function(e){return e.room.owner===e.user.uid},getStarted:function(e){return e.room.started},getCzar:function(e){return e.room.czar}},plugins:[w.plugin]}),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nprogress-container"),n("router-view",{staticStyle:{flex:"1"}}),n("footer",{staticClass:"footer",attrs:{role:"contentinfo"}},[n("div",{staticClass:"footer__wrapper"},[n("ul",{staticClass:"footer__list"},[n("li",{staticClass:"footer__item footer__item--first"},[n("router-link",{attrs:{to:{path:"/imprint"}}},[e._v("Imprint")])],1),n("li",{staticClass:"footer__item"},[n("router-link",{attrs:{to:{path:"/privacy"}}},[e._v("Privacy")])],1),n("li",{staticClass:"footer__item",on:{click:e.test}},[n("a",{attrs:{href:"#"}},[e._v("destory")])])])])])],1)},P=[],C=n("4d37"),R={components:{NprogressContainer:C["a"]},methods:{test:function(){d["a"].currentUser.delete(),console.log("User delted",d["a"].currentUser)}}},x=R,M=(n("51f7"),Object(_["a"])(x,j,P,!1,null,null,null)),D=M.exports;r["a"].config.productionTip=!1,r["a"].use(u["a"],{events:"change",classes:!0,classNames:{invalid:"form__input--invalid"}}),r["a"].use(a.a),r["a"].use(i.a);var I=new a.a({parent:"#app"}),U=new i.a({useVuex:!0});new r["a"]({router:k,store:A,nprogress:I,wait:U,render:function(e){return e(D)}}).$mount("#app")},"71b5":function(e,t,n){},dc59:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n("59ca"),o=n.n(r),a=(n("e71f"),n("ea7b"),{apiKey:"AIzaSyDB-nJjEAJz-vMU-APxliYcrfeftf3wlEY",authDomain:"cards-against-humanity-4b4f4.firebaseapp.com",databaseURL:"https://cards-against-humanity-4b4f4.firebaseio.com",projectId:"cards-against-humanity-4b4f4",storageBucket:"cards-against-humanity-4b4f4.appspot.com",messagingSenderId:"167154479802"});o.a.initializeApp(a);var c=o.a.firestore(),i=o.a.auth()}});
//# sourceMappingURL=app.1f670aa8.js.map