<template>
	<div class="room-wrapper">
		<aside class="aside">
			<!-- <div class="role"><h4>You are Czar!</h4></div> -->
			<CzarDisplay name="LeSupper"></CzarDisplay>

			<hr class="separator" />

			<ul class="scoreboard">
				<li class="scoreboard__item">
					<p>LeSupper</p>
					<h2>4/10</h2>
				</li>
				<li class="scoreboard__item">
					<p>
						<span class="icon icon-star"></span>
						Orange
					</p>
					<h2>7/10</h2>
				</li>
				<li class="scoreboard__item">
					<p>Opch</p>
					<h2>2/10</h2>
				</li>
				<li class="scoreboard__item">
					<p>Fernandes</p>
					<h2>6/10</h2>
				</li>
			</ul>

			<!-- TODO: Add chat -->
		</aside>
		<main class="main">
			<div class="picker">
				<div class="picker__statement">
					<h3 v-on:click="toto">
						In 1.000 Jahren, wenn Papiergeld nur eine entfernte Erinnerung ist, wird ______ unsere
						Währung sein.
					</h3>
				</div>

				<div class="picker__wrapper">
					<div class="picker__wrapper__container">
						<!-- Mockup: -->
						<card class="card--white" text="Halli"></card>
						<card class="card--white" text="Hallo"></card>
						<card class="card--white" text="Du dummer"></card>
						<card class="card--white" text="Hurensohn :)"></card>
					</div>
				</div>
			</div>

			<div class="gallery">
				<!-- Mockup: -->
				<card text="Ein homoerotischer Volleyball-Zusammenschnitt"></card
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
import { mapActions, mapState } from "vuex";
import CzarDisplay from "@/components/CzarDisplay.vue";
import Card from "@/components/Card.vue";
import { db } from "@/firebase.js";

export default {
	name: "Room",
	components: { Card, CzarDisplay },
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
		...mapState(["room"]),
		toto() {
			console.log("object");
			console.log(this.room(), true);
			db.collection("rooms")
				.doc(this.room().id)
				.update({ started: true });
		},
	},
};
</script>
