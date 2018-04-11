var data = {};

(function() {
	data.venues = function(place, category, callback) {
		var baseUrl = 'https://api.foursquare.com/v2/venues/explore?';
		var clientId = 'client_id=DO5JJHGXBODWHZUZ2W45T0S35PKJH3MCLC1SKF5U4X3VF4YA';
		var cs = 'client_secret=GF0PDCNGEKSU2GI4ANGBGBKTEUU0G3E3QYPO5YWFXRV33GY5';
		var version = 'v=20180323';
		var venuePhotos = 'venuePhotos=1';
		var nearPlace = 'near=' + place.replace(" ","+");
		var category = 'query=' + category;	  
		var limit = 'limit=10';
		var and = '&';

		var url = baseUrl + clientId + and + cs + and + version + and + venuePhotos + and + limit + and + nearPlace + and + category;
		
		$.ajax({
			url: url,
			success: function(result) {
				console.log(result.response.groups[0].items);
				var items = [];
				$.each(result.response.groups[0].items, function(index, item) {
					items.push({
						name: item.venue.name,
						rating: item.venue.rating,
						ratingColor: item.venue.ratingColor
					});
				})
				
				callback(items);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR, textStatus, errorThrown);
			}
		});
	}
})();