<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="../assets/-z0K90G-kyiv-post.svg" alt="" />
			</a>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				:class="{ 'is-active': hamburgerClicked }"
				@click="toggleHamburger"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div
			id="navbarBasicExample"
			class="navbar-menu"
			:class="{ 'is-active': hamburgerClicked }"
		>
			<div class="navbar-start">
				<div
					v-for="(page, index) in pages"
					:key="index"
					class="navbar-start"
				>
				<!-- Conditional Rendering CSS Binding -->
					<a
						class="navbar-item is-hoverable"
						:class="{ 'is-active': selectPage === index}"  
						aria-content="page"
						:href="page.link.href"
						:title="page.link.tooltip"
						@click.prevent="selectPage(index)"
					>
						{{ page.link.text }}
					</a>
				</div>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light"> Log in </a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	props: {
		pages: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			activePage: 0,
			hamburgerClicked: false,
		};
	},
	methods: {
		selectPage(index) {
			this.$emit("pageSelected", index); // Emit the selected page index to the parent
		},
		toggleHamburger() {
			this.hamburgerClicked = !this.hamburgerClicked;
		},
		setActivePage(index) {
			this.activePage = index;
		},

	},
};
</script>
