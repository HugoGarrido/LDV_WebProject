<?php
$funfacts = array(
		array('_id' => '001' , 'descriptionF' => "J'aime la galette, savez-vous comment? Quand elle est bien faite avec du beure dedans."),
		
		array('_id' => '002' , 'descriptionF' => "Le premier manga que j’ai lu, c’était un exemplaire de Naruto que mon père m’avait acheté."),

		array('_id' => '003' , 'descriptionF' => "Je suis quelqu'un de très appliqué, dans Pokémon j'avais un Aligateur niveau 100."),

		array('_id' => '004' , 'descriptionF' => "Mon super héros préféré c'est SpiderMan (même si je trouve Batman très classe aussi)"),

		array('_id' => '005' , 'descriptionF' => "J'aime bien cuisiné, je sais faire des tortillas."),

		array('_id' => '006' , 'descriptionF' => "Je suis sur SoundCloud, ce que j'écoute se trouve <a href='https://soundcloud.com/hugo-garrido-saez'>Ici</a>"),

		array('_id' => '007' , 'descriptionF' => "J'ai tout vu de la filmograhie des 90s de Jean Claude Van Damme grâce à M6"),

		array('_id' => '008' , 'descriptionF' => "La première série de comics que j'ai complété, c'était les Shock Rockets, une mini avec des vaisseaux extraterrestes."),

		array('_id' => '009' , 'descriptionF' => "Si vous ne savez pas quoi lire, lisez Amer Beton de ..."),

		array('_id' => '010' , 'descriptionF' => "J'aime aller au bout des choses, j'ai été jusqu'à la ceinture blanche-jaune en Judo"),

		array('_id' => '011' , 'descriptionF' => "Quand j'étais petit, j'avais les K7 de l'édition remasterisée de StarWars (la première et meilleur trilogie"),

		array('_id' => '012' , 'descriptionF' => "Même si j'aime les deux, je suis un peu plus Lego que Playmobil"),	

	);

	$json = array("funfacts" => $funfacts) ;
	echo  json_encode($json);
?>

