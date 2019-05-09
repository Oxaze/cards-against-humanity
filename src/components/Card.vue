<template>
	<div class="card">
		<p class="card__text">{{ text }}</p>
	</div>
</template>

<script>
import { db } from "@/firebase.js";
import { mapActions, mapState } from "vuex";

export default {
	name: "Card",
	props: { text: String },
	// data() {
	// 	return {};
	// },
	// created() {},
	// computed: {},
	// methods: {},
};
</script>
