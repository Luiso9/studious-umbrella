<template>
	<div class="box is-flex-mobile  is-mobile">
		<div class="checkboxes mt3 grid">
			<label class="checkbox cell">
				<input type="checkbox" @change="filter('Favorite')" />
				Favorite
			</label>
			<label class="checkbox cell">
				<input type="checkbox" @change="filter('Unlisted')" />
				Unlisted
			</label>
			<label class="checkbox cell">
				<input type="checkbox" @change="filter('Bought')" />
				Bought
			</label>
		</div>

		<table class="table">
            <thead>
                <tr>
                    <th title="Item">Item</th>
                    <th title="Favorite">Favorite</th>
                    <th title="Unlisted">Unlisted</th>
                    <th title="Bought">Bought</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.name">
                    <th> {{ item.name }}</th>
                    <th> {{ item.Favorite }}</th>
                    <th> {{ item.Unlisted }}</th>
                    <th> {{ item.Bought }}</th>
                </tr>
            </tbody>
		</table>

        
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ name: "Item 1", Favorite: true, Unlisted: false, Bought: false },
				{ name: "Item 2", Favorite: false, Unlisted: true, Bought: false },
				{ name: "Item 3", Favorite: true, Unlisted: false, Bought: false },
				{ name: "Item 4", Favorite: true, Unlisted: true, Bought: false },
				{ name: "Item 5", Favorite: false, Unlisted: true, Bought: true },
				{ name: "Item 6", Favorite: false, Unlisted: false, Bought: true },
			],

			filteredItem: [],
		};
	},
	computed: {
		filteredItems() {
			if (this.filteredItem.length === 0) {
				return this.items; // Fallback if filteredItems is empty
			}

			return this.items.filter((item) => {
				return this.filteredItem.every((property) => item[property]);
			});
		},
	},
	methods: {
		filter(property) {
			if (this.filteredItem.includes(property)) {
				this.filteredItem = this.filteredItem.filter(
					(itemFiltered) => itemFiltered !== property
				);
			} else {
				this.filteredItem.push(property);
			}
		},
	},
};
</script>
