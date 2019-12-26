<template>
	<form class="form">
		<div class="form__input-group">
			<input
				type="text"
				autocomplete="off"
				spellcheck="false"
				required
				name="nickname"
				id="nickname"
				class="form__input form__input--primary"
			/>
			<label for="nickname" class="form__lable">Nickname</label>
			<transition name="error-message__transition">
				<span class="error-message"></span>
			</transition>
		</div>

		<button type="submit" class="btn btn--secondary">Sign In</button>
	</form>
</template>

<script>
export default {};
</script>
