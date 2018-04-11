<?php

	/*
	*
	*	Theme Setup
	*
	*	1. Menu item in wp-admin
	*	2. Support for post-thumbnail
	*	3. Disable admin bar
	*
	*/

	add_action( 'after_setup_theme', 'themeSetup' );
	function themeSetup() {
		add_theme_support( 'menus' );
		add_theme_support( 'post-thumbnails' );
		add_filter( 'show_admin_bar', '__return_false' );
	}
	






?>