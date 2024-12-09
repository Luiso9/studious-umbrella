<template>
	<div class="grid">
		<label for="userName">
			<input class="cell input" type="text" name="userName" v-model="userName" />
		</label>
		<button @click="submitName" tpye="submit" class="cell button is-dark">
			Submit
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userName: "",
		};
	},
	methods: {
		submitName() {
			setTimeout(() => {
				if (this.userName.trim() === "") {
					alert("Please enter a name.");
				} else {
					this.$emit("name-submitted", this.userName);
				}
			}, 1000);
		},
	},
};
</script>
