var rsysclientesModulo = angular.module('rsysclientesModulo',[]);

rsysclientesModulo.controller("rsysclientesController", function ($scope) {
	$scope.rsysclientes = [
		{nome:'Romulo Pires', cpf:'999.999.999-99', telefone:'66666-6666', nascimento:'66/66/66', email:'roms@rsys.com', comentario:'no comment'},
		{nome:'Kellen Pires', cpf:'899.999.999-99', telefone:'56666-6666', nascimento:'56/66/66', email:'kell@rsys.com', comentario:'no comment2'},		
		{nome:'Neide', cpf:'799.999.999-99', telefone:'46666-6666', nascimento:'46/66/66', email:'neide@rsys.com', comentario:'no comment3'}
	];

	$scope.selecionaCliente = function(clienteSelecionado){
		$scope.cliente = clienteSelecionado;
	}

	$scope.limparCampos = function(){
		$scope.cliente =[];
	}

	$scope.salvar = function() {
		$scope.rsysclientes.push($scope.cliente);
		$scope.limparCampos();
	}

	$scope.excluir = function(){
		$scope.rsysclientes.splice($scope.rsysclientes.indexOf($scope.cliente),1);
		$scope.limparCampos();
	}
});
