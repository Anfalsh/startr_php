<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	
	<title><?php bloginfo( 'name' ); echo ' | '; wp_title( '', true, 'right'); ?></title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<meta name="description" content="description">
	<meta name="keywords" content="keywords">

	<meta property="og:type" content="website">
	<meta property="og:url" content="https://url">
	<meta property="og:title" content="Title">
	<meta property="og:description" content="description">
	<meta property="og:image" content="https://url/assets/site/1200-630.png">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@compte">
	<meta name="twitter:url" content="url">
	<meta name="twitter:title" content="Title">
	<meta name="twitter:description" content="description">
	<meta name="twitter:image" content="assets/site/1200-630.png">

	<link rel="icon" type="image/png" href="https://url/assets/site/favicon.png">
	<link rel="apple-touch-icon" size="180x180" href="assets/site/apple-touch-icon.png">

	<link rel="stylesheet" type="text/css" href="public/css/main.min.css"/>
	<script src="public/js/app.min.js" defer></script>

	<?php wp_head(); ?>
</head>
	<body <?php body_class(); ?>>
		<main>
			<header>

			</header>

			<nav class="">
				<?php wp_nav_menu( array( 'menu_id' => '' )); ?>
			</nav>


	
	
