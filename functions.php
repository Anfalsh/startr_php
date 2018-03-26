<?php

	function theme_script() {
		if ( ! is_admin() ) {
			wp_enqueue_script( 'theme_js', get_template_directory_uri() . '/dist/js/app.min.js' );
			wp_enqueue_style( 'theme_css', get_template_directory_uri() . 'dist/css/main.min.css' );
		}
	}

	add_action( 'wp_enqueue_scripts', 'theme_script' );







?>