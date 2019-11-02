(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231232"],{eeea:function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"sign-in-wrapper"},[r("div",{staticClass:"back-button__wrapper"},[r("button",{staticClass:"btn-back",on:{click:function(a){return e.changeTab()}}},[r("span",{staticClass:"icon-back icon-arrow-left"})])]),r("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),e.createRoom(a)}}},[r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.roomName,expression:"roomName"},{name:"validate",rawName:"v-validate",value:"required|alpha|min:4",expression:"'required|alpha|min:4'"}],staticClass:"form__input form__input--primary",attrs:{type:"text",autocomplete:"off",spellcheck:"false",required:"",name:"roomName",id:"roomName"},domProps:{value:e.roomName},on:{input:function(a){a.target.composing||(e.roomName=a.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"roomName"}},[e._v("Room Name")]),r("transition",{attrs:{name:"error-message__transition"}},[e.errors.has("roomName")?r("span",{staticClass:"error-message"},[e._v(e._s(e.errors.first("roomName")))]):e._e()])],1),r("br"),r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"form__input form__input--primary",attrs:{type:"password",autocomplete:"off",spellcheck:"false",required:"",name:"password",id:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"password"}},[e._v("Password")]),r("transition",{attrs:{name:"error-message__transition"}},[e.errors.has("password")?r("span",{staticClass:"error-message"},[e._v(e._s(e.errors.first("password")))]):e._e()])],1),r("br"),r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPlayers,expression:"maxPlayers"},{name:"validate",rawName:"v-validate",value:"required|decimal|max_value:10",expression:"'required|decimal|max_value:10'"}],staticClass:"form__input form__input--primary",attrs:{type:"number",autocomplete:"off",spellcheck:"false",required:"",name:"maxPlayers",id:"maxPlayers"},domProps:{value:e.maxPlayers},on:{input:function(a){a.target.composing||(e.maxPlayers=a.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"maxPlayers"}},[e._v("Maximal Players")]),r("transition",{attrs:{name:"error-message__transition"}},[e.errors.has("maxPlayers")?r("span",{staticClass:"error-message"},[e._v(e._s(e.errors.first("maxPlayers")))]):e._e()])],1),r("br"),r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPoints,expression:"maxPoints"},{name:"validate",rawName:"v-validate",value:"required|decimal|max_value:100|min_value:1",expression:"'required|decimal|max_value:100|min_value:1'"}],staticClass:"form__input form__input--primary",attrs:{type:"number",autocomplete:"off",spellcheck:"false",required:"",name:"maxPlayers",id:"maxPoints"},domProps:{value:e.maxPoints},on:{input:function(a){a.target.composing||(e.maxPoints=a.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"maxPlayers"}},[e._v("Maximal Points")]),r("transition",{attrs:{name:"error-message__transition"}},[e.errors.has("maxPoints")?r("span",{staticClass:"error-message"},[e._v(e._s(e.errors.first("maxPoints")))]):e._e()])],1),r("button",{staticClass:"btn btn--secondary",attrs:{type:"submit"}},[e._v("Create Room")])])])},t=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62"),n=r("dc59");function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function m(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(r,!0).forEach(function(a){Object(o["a"])(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}var c={name:"Create",data:function(){return{roomName:null,password:null,maxPlayers:null,maxPoints:null}},methods:m({createRoom:function(){var e=this,a=this.roomName,r=this.password,s=this.maxPlayers,t=this.maxPoints,o=this.user().uid?n["b"].collection("players").doc(this.user().uid):null,i=n["b"].collection("rooms").doc();!this.errors.has("roomName")&&!this.errors.has("password")&&!this.errors.has("maxPlayers")&&!this.errors.has("maxPoints")&&a&&r&&s&&t&&n["b"].collection("rooms").where("name","==",a).get().then(function(n){!n.docs.length&&o?(i.set({name:a,password:r,maxPlayers:parseInt(s),owner:o,started:!1,czar:null,locked:!1,maxPoints:parseInt(t)}),i.collection("players").doc(e.user().uid).set({isCzar:!1,name:e.user().nickname,score:0}),o.update({room:i}),console.log("Created Room with ID ".concat(i.id," successfully")),e.$router.push("room/".concat(i.id))):o?e.$validator.errors.add({field:"roomName",msg:"Room name already exists."}):e.$validator.errors.add({field:"roomName",msg:"User not logged in."})}).catch(function(e){console.log(e)})},changeTab:function(){this.SET_TAB("CreateOrJoinSwitch")}},Object(i["e"])(["user"]),{},Object(i["d"])(["SET_TAB"]))},u=c,p=r("2877"),d=Object(p["a"])(u,s,t,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d231232.9f709e8b.js.map