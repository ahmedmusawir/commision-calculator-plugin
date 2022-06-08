<?php
 /*
 PROPERTY LIST DISPLAY SHORTCODE
  */

 // If this file is called directly, abort.
 if (!defined('WPINC')) {
  die;
 }

 /**
  *
  * Adding Custom Shortcode for Property or any CPT list
  *
  */

 function cg_calculator($atts)
 {

  $atts = shortcode_atts(

   array(

    'width' => 'w-75',
    'align' => 'center'

   ),

   $atts
  );

  extract($atts);

  ob_start(); // OUTPUT BUFFERING

 ?>

<main class="CG-CALCULATOR-SHORTCODE d-flex justify-content-<?php echo $align; ?>">

  <?php
   include plugin_dir_path(__FILE__) . 'views/calculator-view.php';
   ?>

</main>


<?php

  $module_contents = ob_get_contents();

  ob_end_clean();

  return $module_contents;
 }

add_shortcode('commission_calculator', 'cg_calculator');