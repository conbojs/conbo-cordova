conbo('conbo.cordova', function(undefined)
{
	var cc = this;
	
	conbo.BindingUtils.registerAttribute('cbIhref', function(el)
	{
		if (el.tagName == 'A')
		{
			el.onclick = function(event)
			{
				window.location = el.href;
				
				event.preventDefault();
				return false;
			};
		}
	}, 
	true);
});
