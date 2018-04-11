(function () {

	var vm = new Vue({
		el: '.search-results',
		data: {
			place: '',
			category: '',
			items: []
		},
		methods: {
			explore: function() {
				console.log('RESULTS', this.place, this.category);
			}
		}
	});
	
	data.venues('New York', '', function(result) {
		vm.items = result;
		console.log(result);
	});
	
})();