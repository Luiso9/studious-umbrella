<template>
	<div id="app" class="container">
		<NavBar :pages="pages" @pageSelected="setActivePage"></NavBar>
		<div class="mx-6 mt-6 grid">
			<div class="cell">
				<h1 class="title">
					{{ pages[activePage].pageTitle }}
				</h1>
				<p>
					{{ pages[activePage].content }}
				</p>
			</div>

			<!-- Todo ; show only specific component if specific page active. Conditional Rendering -->
			<article v-if="activePage === 0">
				<div class="cell">
					<ArticlePage active></ArticlePage>
				</div>
			</article>
			<article v-if="activePage === 1">
				<div class="cell">
					<GetUser @name-submitted="fetchName"> </GetUser>
					<p>Hello, {{ this.userName }}</p>
				</div>
			</article>

			<article v-if="activePage === 2">
				<PropsHandle v-model="textInput"></PropsHandle>
				<p>{{ textInput }}</p>
			</article>
		</div>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import GetUser from "./components/GetUser.vue";
import PropsHandle from "./components/PropsHandle.vue";
import ArticlePage from "./components/ArticlePage.vue";

export default {
	name: "App",
	components: {
		NavBar,
		ArticlePage,
		GetUser,
		PropsHandle,
	},
	data() {
		return {
			activePage: 0,
			pages: [
				{
					link: { text: "Homepage", href: "/", tooltip: "Homepage" },
					pageTitle: "Homepage",
					content: "This is a homepage. Hello there!",
				},
				{
					link: {
						text: "Documentation",
						href: "/docs",
						tooltip: "Documentation",
					},
					pageTitle: "Documentation",
					content:
						"This is the documentation page. You can find the latest updates and guides here.",
				},
				{
					link: { text: "About", href: "/docs", tooltip: "Documentation" },
					pageTitle: "About Page",
					content:
						"This is the about page. You can learn more about the project and its creators.",
				},
			],
			userName: "",
			textValue: "",
		};
	},
	methods: {
		setActivePage(index) {
			this.activePage = index;
			// console.log(this.activePage);
		},
		fetchName(userName) {
			this.userName = userName;
			console.log(this.userName);
		},
	},
	mounted() {},
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
</style>
