<?php
/*
Plugin Name: Commission Calculator
Plugin URI: https://cyberizegroup.com/
Description: Displays A Commission Calculator via Shortcodes
Version: 1.0
Author: Cyberize Group
Author URI: https://linkedin.com/ahmedmusawir
License: GPLv2 or later
Text Domain: cyberizeframework
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
 die;
}
// THE FOLLOWING VARIABLE NEEDS TO BE UPDATED FOR EACH PLUGIN
define('CG_CALCULATOR_URL', plugin_dir_url(__FILE__));

/**
 * ALL CSS AND JS SCRIPTS
 */
// Enqueue Plugin CSS
include plugin_dir_path(__FILE__) . 'includes/cyberize-styles.php';

// Enqueue Plugin JavaScript
include plugin_dir_path(__FILE__) . 'includes/cyberize-scripts.php';

/*
 * THE CALCULATOR CODE
 */

// Removing & Replacing Default Welcome Widgets
include plugin_dir_path(__FILE__) . 'includes/calculator-shortcode.php';