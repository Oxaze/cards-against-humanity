<template>
	<div class="room-wrapper">
		<aside class="aside">
			<CzarDisplay v-if="getStarted" v-cloak>{{ getCzar }}</CzarDisplay>

			<div v-if="getUserIsOwner && !getStarted" class="start-game-wrapper">
				<form @submit.prevent="startGame" class="form">
					<button type="submit" class="btn btn--primary">Start Game</button>
				</form>
			</div>

			<ul class="scoreboard">
				<!-- <li class="scoreboard__item">
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
				</li> -->

				<li v-for="player in getPlayers" :key="player.name" class="scoreboard__item">
					<p>{{ player.name }}</p>
					<h2>{{ player.score }}/{{ getMaxPoints }}</h2>
				</li>
			</ul>

			<!-- TODO: Add chat -->
		</aside>
		<main class="main">
			<div class="picker">
				<div class="picker__statement">
					<h3>
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
import { mapActions, mapState, mapGetters } from "vuex";
import CzarDisplay from "@/components/CzarDisplay.vue";
import Card from "@/components/Card.vue";

export default {
	name: "Room",
	components: { Card, CzarDisplay },
	data() {
		return {
			id: this.$route.params.id,
			userIsOwner: null,
		};
	},
	beforeCreate() {
		// this.setPlayers();
		this.$store.dispatch("setRoomdata");
	},
	computed: {
		...mapGetters(["getPlayers", "getMaxPoints", "getUserIsOwner", "getStarted", "getCzar"]),
	},
	methods: {
		...mapActions(["setStarted", "setRoomdata"]),
		...mapState(["room", "user"]),
		startGame() {
			if (this.getUserIsOwner && !this.getStarted) {
				this.setStarted(true);
			} else {
				console.error("User is not the owner or game already started.");
			}
		},
	},
};
</script>
