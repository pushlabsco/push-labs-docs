---
id: disable-siteorigin
title: Disable SiteOrigin Integration
sidebar_title: Disable SiteOrigin
---

If you need to disable the SiteOrigin Page Builder integration, you could do so using this filter:

```php
<?php
/**
 * Disable Video Background Pros SiteOrigin Page Builder Integration
 *
 * @since 3.0.0
 * @author Push Labs
 * @param Boolean $is_enabled Boolean decisison to enable/disable the integration
 * @return Boolean $is_enabled
 */
function themeprefix_vidbgpro_disable_siteorigin( $is_enabled ) {
  $is_enabled = false;
  return $is_enabled;
}
add_filter( 'vidbgpro_enable_siteorigin', 'themeprefix_vidbgpro_disable_siteorigin' );
```