(function() {
	var app = angular.module('store', []);
	app.controller('StoreController', function() {
		this.products = gems;
	});
	var gems = [ {
		name : 'Dodecahedron Gem',
		price : 2.95,
		description : 'Nice Dodecahedron Gem',
		canPurchase : true,
		soldOut : false,
		images : [ {
			full : 'img/dode-full.jpg',
			thumb : 'img/dode.jpg'
		}, {
			full : 'img/dode2-full.jpg',
			thumb : 'img/dode2.jpg'
		} ]
	}, {
		name : 'Pentagonal Gem',
		price : 9.95,
		description : 'Nice Pentagonal Gem',
		canPurchase : true,
		soldOut : false,
		images : [ {
			full : 'img/penta-full.jpg',
			thumb : 'img/penta.jpg'
		}, {
			full : 'img/penta2-full.jpg',
			thumb : 'img/penta2.jpg'
		} ]
	} ]
})();