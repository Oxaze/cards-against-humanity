(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231232"],{eeea:function(a,e,r){"use strict";r.r(e);var s=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"sign-in-wrapper"},[r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),a.createRoom(e)}}},[r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.roomName,expression:"roomName"},{name:"validate",rawName:"v-validate",value:"required|alpha|min:4",expression:"'required|alpha|min:4'"}],staticClass:"form__input form__input--primary",attrs:{type:"text",autocomplete:"off",spellcheck:"false",required:"",name:"roomName",id:"roomName"},domProps:{value:a.roomName},on:{input:function(e){e.target.composing||(a.roomName=e.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"roomName"}},[a._v("Room Name")]),r("transition",{attrs:{name:"error-message__transition"}},[a.errors.has("roomName")?r("span",{staticClass:"error-message"},[a._v(a._s(a.errors.first("roomName")))]):a._e()])],1),r("br"),r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"form__input form__input--primary",attrs:{type:"password",autocomplete:"off",spellcheck:"false",required:"",name:"password",id:"password"},domProps:{value:a.password},on:{input:function(e){e.target.composing||(a.password=e.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"password"}},[a._v("Password")]),r("transition",{attrs:{name:"error-message__transition"}},[a.errors.has("password")?r("span",{staticClass:"error-message"},[a._v(a._s(a.errors.first("password")))]):a._e()])],1),r("br"),r("div",{staticClass:"form__input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.maxPlayers,expression:"maxPlayers"},{name:"validate",rawName:"v-validate",value:"required|decimal|max_value:10",expression:"'required|decimal|max_value:10'"}],staticClass:"form__input form__input--primary",attrs:{type:"number",autocomplete:"off",spellcheck:"false",required:"",name:"maxPlayers",id:"maxPlayers"},domProps:{value:a.maxPlayers},on:{input:function(e){e.target.composing||(a.maxPlayers=e.target.value)}}}),r("label",{staticClass:"form__lable",attrs:{for:"maxPlayers"}},[a._v("Maximal Players")]),r("transition",{attrs:{name:"error-message__transition"}},[a.errors.has("maxPlayers")?r("span",{staticClass:"error-message"},[a._v(a._s(a.errors.first("maxPlayers")))]):a._e()])],1),r("button",{staticClass:"btn btn--secondary",attrs:{type:"submit"}},[a._v("Create Room")])])])},o=[],t=r("cebc"),i=r("dc59"),m=r("2f62"),l={name:"Create",data:function(){return{roomName:null,password:null,maxPlayers:null}},methods:Object(t["a"])({createRoom:function(){var a=this,e=this.roomName,r=this.password,s=this.maxPlayers,o=this.user().uid?i["b"].collection("players").doc(this.user().uid):null,t=i["b"].collection("rooms").doc();!this.errors.has("roomName")&&!this.errors.has("password")&&!this.errors.has("maxPlayers")&&e&&r&&s&&i["b"].collection("rooms").where("name","==",e).get().then(function(i){!i.docs.length&&o?(t.set({name:e,password:r,maxPlayers:s,owner:o,players:[a.user().nickname]}),o.update({room:t}),a.addRoomdata(t.id),console.log("Created Room with ID ".concat(t.id," successfully")),a.$router.push("room/".concat(t.id))):o?a.$validator.errors.add({field:"roomName",msg:"Room name already exists."}):a.$validator.errors.add({field:"roomName",msg:"User not logged in."})}).catch(function(a){console.log(a)})}},Object(m["d"])(["user"]),Object(m["b"])(["addRoomdata"]))},n=l,d=r("2877"),u=Object(d["a"])(n,s,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d231232.91202dd0.js.map