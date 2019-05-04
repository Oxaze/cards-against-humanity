<template>
	<div class="server-wrapper">
		<aside class="aside"></aside>
		<main class="main">
			<p>Test</p>
		</main>
	</div>
</template>

<script>
import { db } from "@/firebase.js";
import { mapActions, mapState } from "vuex";

export default {
	name: "Server",
	// components: {},
	data() {
		return {
			id: this.$route.params.id,
		};
	},
	// created() {},
	// computed: {},
	// methods: {},
};
</script>
