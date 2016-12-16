<?php


	/**
		- Define todos os arquivos e classes adicionais a serem carregados
		- Inicia sessão
		- Faz verificação se esta logado
	**/

	
	function __autoload ($classe) {
		
		
		require_once $classe.".php";


	}