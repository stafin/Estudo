<?php

require_once "import.php";

//_getProdutos
if($_GET['action'] == '_getProdutos') {

	try {

		$connMysql = dbConnMysql::getConnection();
		$stmt = $connMysql->prepare("SELECT * FROM produtos");
		$stmt->execute();
		$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($r);

	} catch (PDOException $e) {

		echo json_encode($e);

	}

}


//_addCart
$post = file_get_contents("php://input");
if(!empty($post)){

	//$produto = json_decode($post);

	//echo $post->id;

	$produto = json_decode($post);
	$produto = get_object_vars($produto);

	//se ja existir o cookie
	if(isset($_COOKIE['cartAPI'])) {

		$array_produtos = unserialize($_COOKIE['cartAPI']);
		
		//verificar se ja esta adicionado
		$m = true;
		foreach ($array_produtos as $key => $value) {

			if(in_array($produto[id], $value)) {
				
				$m = false;

				break;

			}

			
		}
		
		//novo item no carrinho
		if($m) {

			$key = count($array_produtos) + 1;
			$array_produtos[$key] = $produto;
			$array_produtos[$key]['qtde'] = 1;
			setcookie('cartAPI', serialize($array_produtos));

		}

	} else {

		$array_produtos[] = $produto;
		$array_produtos[0]['qtde'] = 1;
		setcookie('cartAPI', serialize($array_produtos));
		
	}

	
}

//_getCart
if($_GET['action'] == '_getCart') {

	if(isset($_COOKIE['cartAPI'])) {

		$array_produtos = unserialize($_COOKIE['cartAPI']);
		
		echo json_encode($array_produtos);

	}


}