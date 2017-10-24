(function(factory)
{
	if (typeof define === 'function' && define.amd) 
	{
		define('conbo-cordova', ['conbo'], factory);
	}
	else if (typeof module !== 'undefined' && module.exports)
	{
		module.exports = factory(require('conbo'));
	}
	else
	{
		factory(window.conbo);
	}
}
(function(conbo)
{
	/**
	 * cc-ihref attribute
	 * Prevents HTML anchor links opening in a new window
	 * @author	Neil Rackett
	 */
	conbo.bindingUtils.registerAttribute('cbIhref', function(el)
	{
		if (el.tagName === 'A')
		{
			el.addEventListener('click', function(event)
			{
				window.location = el.href;
				
				event.preventDefault();
				return false;
			});
		}
	}, 
	true);

	return conbo;

}));
