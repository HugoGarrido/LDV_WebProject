<?php
	/*$e= array();
	$e['error'] = "Formulaire non valide";

	if(isset($_POST['mailC'])){
		if(!filter_var($_POST['mailC'], FILTER_VALIDATE_EMAIL)){
			$e['email_invalide'] = 'email_invalide';
		}
		else{
			$e['error'] = "Ok";
			$objC = $_POST['objC'];
			$mailC = $_POST['mailC'];
			$messageC = $_POST['messageC'];

			$to='g.sylvain89@gmail.com';
			$sujet = '[SITE] Message de '.$mailC;
			$msg = 'Objet : '.$objC.'\n'.$messageC;

			//A tester sur un vrai serveur
			mail($to, $sujet, $msg);
		}
	}
	echo json_encode($e);*/

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$email = $request->email;
	$name = $request->name;
	$message = $request->message;

	$to='garrido.saez.hugo@gmail.com';
	$sujet = '[SITE] Message de '.$name;
	
	mail($to, $sujet, $message);

?>