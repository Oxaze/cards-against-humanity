<template>
	<div>
		<keep-alive>
			<component v-bind:is="currentTab"></component>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: "SignIn",
	components: {
		SignInForm: () => import("@/components/SignInForm.vue"),
		SignOutForm: () => import("@/components/SignOutForm.vue"),
	},
	data() {
		return {
			currentTab: "",
		};
	},
	created() {
		this.setTab("SignInForm");
	},
	methods: {
		setTab(newTab) {
			this.currentTab = newTab;
		},
	},
};
</script>
