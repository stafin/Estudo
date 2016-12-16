angular.module("Compras").controller("listaDeProdutosCtrl", function($scope, produtosAPI) {

	var carregarProdutos = function () {
		produtosAPI.getProdutos().then(function(value){
			$scope.produtos = value.data;
		});
	};


	$scope.adicionarNoCarrinho = function(produto) {
		produtosAPI.addCart(produto).then(function(response) {
			console.log(response);		
		}, function (response){
			$scope.message = "Deu erro!" + response.data;
		});
	};


	$scope.verificarAdicionado = function(produto) {
		produtosAPI.getAdicionado(produto).then(function(response) {
			console.log(response);
			return (response == "true") ? true : false;
		}, function (response){
			$scope.message = "Deu erro!" + response.data;
		});
	};


	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarProdutos();	
	

});