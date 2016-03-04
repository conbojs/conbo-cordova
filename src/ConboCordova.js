conbo('conbo.cordova', conbo, function(conbo, undefined)
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
