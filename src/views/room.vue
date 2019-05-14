<template>
	<div class="room-wrapper">
		<aside class="aside">
			<div class="role"><h4>You are Czar!</h4></div>
		</aside>
		<main class="main">
			<div class="picker">
				<div class="picker__statement">
					<h3>
						In 1.000 Jahren, wenn Papiergeld nur eine entfernte Erinnerung ist, wird ______ unsere
						Währung sein.
					</h3>
				</div>
				<card class="card--white"></card>
				<card class="card--white"></card>
				<card class="card--white"></card>
				<card class="card--white"></card>
			</div>
			<div class="gallery">
				<card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
				><card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card>
			</div>
		</main>
	</div>
</template>

<script>
import Card from "@/components/Card.vue";
import { db } from "@/firebase.js";
import { mapActions, mapState } from "vuex";

export default {
	name: "Room",
	components: { Card },
	data() {
		return {
			id: this.$route.params.id,
			players: [],
		};
	},
	// created() {},
	// computed: {},
	methods: {
		// ...mapState("user.uid");
	},
};
</script>
