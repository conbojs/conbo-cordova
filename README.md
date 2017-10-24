Cordova / PhoneGap utilities for ConboJS 4
==========================================

JavaScript library containing utility methods and custom attributes for use with [ConboJS](https://github.com/mesmotronic/conbo/releases) and Apache Cordova.

Getting started
---------------

**ES2015 / TypeScript**
```javascript
import 'conbo.cordova';
```

**CommonJS**
```javascript
require('conbo-cordova');
```

**AMD**
```javascript
define(['conbo-cordova'], function() { ... });
```

HTML attributes
---------------

**ccIhref**

Prevents HTML anchor links opening in a new window

```html
<a href="/example/url" cc-ihref>This link will open in the current iOS WebView instead of Safari!</a>
```
