<?php
add_action('rest_api_init', function () {
  remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');

  if (defined('REST_REQUEST') && REST_REQUEST) {
    // Add all WPML language translations to rest api when type is page
    add_action('parse_query', function ($q) {
      if ($q->query_vars['post_type'] == 'page') {
        $q->query_vars['suppress_filters'] = true;
      }
    });
  }
});

// if (!function_exists('acf_nullify_empty')) {
//   /**
//    * Return `null` if an empty value is returned from ACF.
//    * Because otherwise GraphQL would get two different types for same field. object and boolean
//    * Now it will return `null` if translation is not added and not `false` as boolean value.
//    *
//    * @param mixed $value
//    * @param mixed $post_id
//    * @param array $field
//    *
//    * @return mixed
//    */
//   function acf_nullify_empty($value, $post_id, $field)
//   {
//     if (empty($value)) {
//       return null;
//     }
//     return $value;
//   }
// }
// add_filter('acf/format_value', 'acf_nullify_empty', 100, 3);
