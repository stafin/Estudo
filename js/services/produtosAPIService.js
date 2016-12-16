angular.module("Compras").factory("produtosAPI", function($http) {

	var _getProdutos = function() {

		return $http.get('process/produtosAPI.php?action=_getProdutos');

	};


	var _addCart = function(produto) {

		return $http.post('process/produtosAPI.php', produto);

	};


	var _getCart = function() {

		return $http.get('process/produtosAPI.php?action=_getCart');

	};
	

	return { 

		getProdutos: 	_getProdutos,
		addCart:        _addCart,
		getCart:        _getCart

	};

});