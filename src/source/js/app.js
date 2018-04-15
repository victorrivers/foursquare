(function () {

	var rawData = [];
	var vm = new Vue({
		el: '.main',
		data: {
			place: '',
			category: '',
			displayItems: 10,
			loading: true
		},
		computed: {
			items: function(){
				return rawData.slice(0, this.displayItems);
			}
		},
		methods: {
			explore: function() {
			}
		}
	});

	data.venues('New York', '', function(result) {
		rawData = result;
		vm.loading = false;
	});
})();