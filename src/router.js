import Vue from "vue";
import Router from "vue-router";
import { auth } from "./firebase.js";
import SignIn from "./views/sign-in.vue";

Vue.use(Router);

const router = new Router({
	mode: "history",
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
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/room/:id",
			name: "Room",
			component: () => import("./views/room.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		// TODO: CREATE VIEW
		{
			path: "/page-not-found",
			name: "page-not-found",
			component: () => import("./views/page-not-found.vue"),
		},
		{
			path: "/page-not-found",
			component: () => import("./views/page-not-found.vue"),
			alias: "*",
		},
	],
});

router.beforeEach((to, from, next) => {
	// const { currentUser } = auth;
	// const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	// console.log("requiresAuth", requiresAuth);
	// console.log("currenUser", currentUser);

	// if (requiresAuth && !currentUser) {
	// 	console.log(1);
	// 	next("/");
	// } else if (!requiresAuth && currentUser) {
	// 	console.log(2);
	// 	next("/create-or-join");
	// } else {
	// 	console.log(3);
	// 	next();
	// }

	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	auth.onAuthStateChanged(user => {
		if (requiresAuth && !user) {
			next({
				path: "/",
				params: { redirectedThroughAuth: "true" },
			});
		} else {
			next();
		}
	});
});

export default router;

// -> https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
