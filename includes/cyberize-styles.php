<?php

// Conditionally load CSS on plugin settings pages only
function cg_framework_admin_styles($hook)
{
 // LOADING BOOTSTRAP 4 ON THE WP ADMIN SIDE
 wp_register_style(
  'wpplugin-admin-bootstrap',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  [],
  time()
 );

 wp_enqueue_style('wpplugin-admin-bootstrap');

 // LOADING MAIN PLUGIN ADMIN SIDE STYLES
 wp_register_style(
  'cg-framework-admin',
  CG_CALCULATOR_URL . 'admin/assets/dist/css/admin.min.css',
  [],
  time()
 );

 wp_enqueue_style('cg-framework-admin');
}

// add_action('admin_enqueue_scripts', 'cg_framework_admin_styles');

// Load CSS on the frontend
function cg_framework_frontend_styles()
{

// LOADING BOOTSTRAP 4 ON THE WP ADMIN SIDE
 wp_register_style(
  'wpplugin-frontend-bootstrap',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  [],
  time()
 );

 wp_enqueue_style('wpplugin-frontend-bootstrap');

 // LOADING CUSTOM FRONEND STYLES
 wp_register_style(
  'cg-framework-frontend',
  CG_CALCULATOR_URL . 'frontend/assets/dist/css/frontend.min.css',
  [],
  time()
 );

 wp_enqueue_style('cg-framework-frontend');
}

add_action('wp_enqueue_scripts', 'cg_framework_frontend_styles', 100);