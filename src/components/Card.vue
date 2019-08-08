<template>
	<div class="card">
		<p class="card__text">{{ text }}</p>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { db } from "@/firebase.js";

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
