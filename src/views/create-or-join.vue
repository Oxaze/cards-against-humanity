<template>
	<div class="news-view">
		<CAHHeader></CAHHeader>
	</div>
</template>

<script>
import CAHHeader from "@/components/Header.vue";
import { auth, db } from "@/firebase.js";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "SignIn",
	components: {
		CAHHeader,
	},
	data() {
		return {};
	},
	// created() {},
	// computed: {},
	methods: {},
};
</script>
