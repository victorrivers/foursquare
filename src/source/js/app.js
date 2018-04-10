(function () {	
	var vm = new Vue({
		el: '.search-results',
		data: {
			place: '',
			category: ''			
		},
		methods: {
			explore: function() {
				console.log('RESULTS', this.place, this.category);
			}
		}
	});
})();