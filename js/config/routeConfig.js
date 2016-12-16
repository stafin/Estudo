angular.module("Compras").config(function ($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(false);
	
	$routeProvider.when('/listaDeProdutos', {

		templateUrl: 'view/listaDeProdutos.html',
		controller: 'listaDeProdutosCtrl'

	});

	$routeProvider.when('/', {

		templateUrl: 'view/listaDeProdutos.html',
		controller: 'listaDeProdutosCtrl'

	});

	$routeProvider.when('/carrinhoDeCompras', {

		templateUrl: 'view/carrinhoDeCompras.html',
		controller: 'carrinhoDeComprasCtrl'

	});

	
	$routeProvider.when('/error', {

		templateUrl: 'view/error.html',
		
	});
	
	
	$routeProvider.otherwise({redirectTo: '/error'});

});