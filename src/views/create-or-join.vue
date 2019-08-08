<template>
	<div class="main-wrapper">
		<CAHHeader></CAHHeader>
		<keep-alive>
			<component v-bind:is="currentTab()"></component>
		</keep-alive>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CAHHeader from "@/components/Header.vue";
import CreateOrJoinSwitch from "@/components/CreateOrJoinSwitch.vue";

export default {
	name: "CreateOrJoin",
	components: {
		CAHHeader,
		CreateOrJoinSwitch,
		Create: () => import("@/components/Create.vue"),
	},
	created() {
		this.SET_TAB("CreateOrJoinSwitch");
	},
	methods: {
		...mapState(["currentTab"]),
		...mapMutations(["SET_TAB"]),
	},
};
</script>
