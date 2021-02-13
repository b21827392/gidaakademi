&lt;noscript&gt;
 &lt;iframe src="PARDOT_FORM_URL" width="100%" height="500" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"&gt;&lt;/iframe&gt;
&lt;/noscript&gt;

&lt;script type="text/javascript"&gt;
 var form = 'PARDOT_FORM_URL';
 var params = window.location.search;
 var thisScript = document.scripts[document.scripts.length - 1];
 var iframe = document.createElement('iframe');

 iframe.setAttribute('src', form + params);
 iframe.setAttribute('width', '100%');
 iframe.setAttribute('height', 500);
 iframe.setAttribute('type', 'text/html');
 iframe.setAttribute('frameborder', 0);
 iframe.setAttribute('allowTransparency', 'true');
 iframe.style.border = '0';

 thisScript.parentElement.replaceChild(iframe, thisScript);
&lt;/script&gt;
