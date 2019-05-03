// @ts-ignore
import Vue from "vue";
import NProgress from "vue-nprogress";
import VueWait from "vue-wait";
import VeeValidate from "vee-validate";
import router from "./router";
import store from "./store";

// @ts-ignore
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
	events: "change",
	classes: true,
	classNames: {
		invalid: "form__input--invalid",
	},
});
Vue.use(NProgress);
Vue.use(VueWait);

const nprogress = new NProgress({ parent: "#app" });
const wait = new VueWait({ useVuex: true });

// @ts-ignore
new Vue({
	router,
	store,
	nprogress,
	wait,
	render: h => h(App),
}).$mount("#app");
