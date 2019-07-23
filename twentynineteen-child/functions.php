<?php
add_action( 'wp_enqueue_scripts', 'enqueue_child_theme_styles' );
function enqueue_child_theme_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_script( 'child-script', get_stylesheet_directory_uri() . '/assets/js/script.js', array('jquery'), false, true );

    wp_enqueue_script( 'aos-script', get_stylesheet_directory_uri() . '/assets/js/aos.js', array(), false, true );
    wp_enqueue_style( 'aos-style', get_stylesheet_directory_uri() . '/assets/css/aos.css' );

    wp_enqueue_script( 'fa-script', get_stylesheet_directory_uri() . '/assets/js/all.min.js', array(), false, true );
    wp_enqueue_style( 'fa-style', get_stylesheet_directory_uri() . '/assets/css/all.min.css' );

    wp_enqueue_style( 'flaticon-style', get_stylesheet_directory_uri() . '/assets/css/flaticon.css' );

}

/* CUSTOM WIDGET AREAS */
function header_widget_init() {
    register_sidebar( array(
        'name'          => 'Header Widget Area',
        'id'            => 'header-widget-area',
        'before_widget' => '<div class="hwa">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="hwa-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'header_widget_init' );

function custom_widget_init() {
    register_sidebar( array(
        'name'          => 'Custom Widget Area',
        'id'            => 'custom-widget-area',
        'before_widget' => '<div class="cwa">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="cwa-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'custom_widget_init' );

/**
 * Add SVG support
 */
function add_file_types_to_uploads($file_types){
$new_filetypes = array();
$new_filetypes['svg'] = 'image/svg+xml';
$file_types = array_merge($file_types, $new_filetypes );
return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');

?>
