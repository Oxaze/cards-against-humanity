<template>
	<div class="main-wrapper">
		<CAHHeader></CAHHeader>
		<component v-bind:is="currentTab"></component>
	</div>
</template>

<script>
import CAHHeader from "@/components/Header.vue";
import CreateOrJoinSwitch from "@/components/CreateOrJoinSwitch.vue";
// import { auth, db } from "@/firebase.js";
// import { mapActions, mapGetters } from "vuex";

export default {
	name: "CreateOrJoin",
	components: {
		CAHHeader,
		CreateOrJoinSwitch,
	},
	data() {
		return {
			currentTab: "CreateOrJoinSwitch",
			tabs: ["CreateOrJoinSwitch"],
		};
	},
	// created() {},
	// computed: {},
	// methods: {},
};
</script>
