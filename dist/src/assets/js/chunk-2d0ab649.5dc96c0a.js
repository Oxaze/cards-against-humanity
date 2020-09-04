(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab649"],{"14a1":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"sign-in-wrapper"},[t("v-wait",{attrs:{for:"loadingNext"}},[t("template",{slot:"waiting"},[t("div",{staticClass:"spinner"},[t("hollow-dots-spinner",{attrs:{"animation-duration":1125,"dot-size":18,"dots-num":3,color:"#3f51b5"}})],1)]),t("form",{staticClass:"form",on:{submit:function(n){return n.preventDefault(),e.signInUser(n)}}},[t("div",{staticClass:"form__input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"},{name:"validate",rawName:"v-validate",value:"required|alpha|min:4",expression:"'required|alpha|min:4'"}],staticClass:"form__input form__input--primary",attrs:{type:"text",autocomplete:"off",spellcheck:"false",required:"",name:"nickname",id:"nickname"},domProps:{value:e.nickname},on:{input:function(n){n.target.composing||(e.nickname=n.target.value)}}}),t("label",{staticClass:"form__lable",attrs:{for:"nickname"}},[e._v("Nickname")]),t("transition",{attrs:{name:"error-message__transition"}},[e.errors.has("nickname")?t("span",{staticClass:"error-message"},[e._v(e._s(e.errors.first("nickname")))]):e._e()])],1),t("button",{staticClass:"btn btn--secondary",attrs:{type:"submit"}},[e._v("Sign In")])])],2)],1)},a=[],i=(t("8e6e"),t("ac6a"),t("456d"),t("96cf"),t("3b8d")),s=t("bd86"),o=t("4583"),c=t("2f62"),l=t("dc59");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(t,!0).forEach(function(n){Object(s["a"])(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var d={name:"SignInFrom",components:{HollowDotsSpinner:o["a"]},data:function(){return{nickname:null}},methods:m({signInUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var n,t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.errors.has("nickname")||!this.nickname){e.next=9;break}return this.$wait.start("loadingNext"),e.next=4,this.isNicknameInDatabase();case 4:n=e.sent,n&&(this.$wait.end("loadingNext"),this.$validator.errors.add({field:"nickname",msg:"Nickname already assigned to another Player."})),n||l["a"].signInAnonymously().then(function(e){var n=e.user.uid,r=t.nickname;l["b"].collection("players").doc(n).set({nickname:r}),console.log("User is signed in with ID",n),t.addUserdata({nickname:r,uid:n}),t.$router.push("create-or-join"),t.$wait.end("loadingNext")}).catch(function(e){t.$wait.end("loadingNext"),console.error("Error 3",e.code,e.message),t.$validator.errors.add({field:"nickname",msg:e.message})}),e.next=10;break;case 9:console.error("Error 1");case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),isNicknameInDatabase:function(){var e=this;return new Promise(function(n,t){l["b"].collection("players").where("nickname","==",e.nickname).get().then(function(e){n(!!e.docs.length)}).catch(function(e){console.error("Case 2",e),t(e)})})}},Object(c["b"])(["addUserdata"]))},p=d,f=t("2877"),b=Object(f["a"])(p,r,a,!1,null,null,null);n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0ab649.5dc96c0a.js.map