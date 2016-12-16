angular.module("Compras").controller("carrinhoDeComprasCtrl", function($scope, produtosAPI) {

	$scope.carrinho = [];
	
	var carregarCarrinho = function () {
		produtosAPI.getCart().then(function(value){
			$scope.carrinho = value.data;
		});
	};

	
	$scope.getTotal = function(){
		var total = 0;
		angular.forEach($scope.carrinho, function (item) {
			total += (item.valor * item.qtde);
		});
		return total;
	};


	carregarCarrinho();
	
	
});