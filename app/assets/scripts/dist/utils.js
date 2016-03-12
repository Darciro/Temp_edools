var encodeShareURL = function (e, socialMedia){
	// e.preventDefault();
	console.info('Init');
	var origin = escape( e.getAttribute('data-link-origin') ),
		mediaURL;

	switch (socialMedia){
		case 'facebook':
			mediaURL = 'https://www.facebook.com/sharer/sharer.php?u=';
			break
		case 'linkedin':
			mediaURL = 'https://www.linkedin.com/shareArticle?mini=true&url=';
			break
		case 'twitter':
			mediaURL = 'https://twitter.com/home?status=';
			break
	}

	window.open(mediaURL + origin);
	return false;
};
PubSub.subscribe( 'INIT', encodeShareURL );

var formUtils = function (){
	console.log('Some other function');
};
// Edools.events.subscribe( 'school.home', formUtils );
// Edools.events.subscribe( 'shcool.auth', formUtils );
// Edools.events.subscribe('school.auth', formUtils );
