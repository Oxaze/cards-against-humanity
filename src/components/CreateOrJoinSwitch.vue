<template>
	<div class="create-or-join-wrapper">
		<router-link class="btn btn--primary" tag="button" to="/create">Create</router-link>
		<router-link class="btn btn--primary" tag="button" to="/join">Join</router-link>
	</div>
</template>

<script>
export default {
	name: "CreateOrJoinSwitch",
};
</script>
