<template>
	<div id="app">
		<header class="site-header">
			<h1>
				<nuxt-link class="site-header__text" to="/"
					>Cards Against Humanity</nuxt-link
				>
			</h1>
		</header>

		<nuxt style="flex: 1;" />

		<footer class="footer" role="contentinfo">
			<div class="footer__wrapper">
				<ul class="footer__list">
					<li class="footer__item footer__item--first">
						<nuxt-link to="/imprint">Imprint</nuxt-link>
					</li>
					<li class="footer__item">
						<nuxt-link to="/privarcy">Privarcy</nuxt-link>
					</li>
					<!-- TODO: ADD SETTINGS WHEEL WITH DARK MODE SUPPORT AND V-IF STATEMENT -->
				</ul>
			</div>
		</footer>
	</div>
</template>
