import Vue from "vue";
import Router from "vue-router";
import SignIn from "./views/sign-in.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "SignIn",
			component: SignIn,
		},
		{
			path: "/create-or-join",
			name: "CreateOrJoin",
			component: () => import("./views/create-or-join.vue"),
		},
	],
});
