

$(document).ready(function() {
console.time('analyze')
	
	var totalScrolled = 0
	function amountScrolled() {
		var winheight = $(window).height()
		var docheight = $(document).height()
		var scrollPos = $(window).scrollTop()
		var trackLength = docheight - winheight
		var	pctScrolled = Math.floor(scrollPos/trackLength * 100)
		// console.log(pctScrolled + '% scrolled')
		if (pctScrolled > totalScrolled) {
			totalScrolled = pctScrolled
		}

	}

	$(window).on("scroll", function(){
	    amountScrolled()

	})

	var count = 0;
	$('#first').on('keydown', function(eventData) {
		// console.log('the keypressed is: ', eventData.key);
		var vowels = ['a', 'e', 'i', 'o', 'u']
		if (vowels.includes(eventData.key)) {
			count ++;
		}

	})

	// console.timeEnd('analyze');
	var aTagHoverTime
	$('body>a').mouseover(function(event) {
		aTagHoverTime = new Date.now()
	})

	$('body>a').mouseleave(function(event) {
		aTagHoverTime = new Date.now() - aTagHoverTime
	})
	$('body>label').mouseover(function(event) {
		labelTagHoverTime = new Date.now()
	})

	$('body>label').mouseleave(function(event) {
		labelTagHoverTime = new Date.now() - aTagHoverTime
	})

	$('body>p').mouseover(function(event) {
		pTagHoverTime = new Date.now()
	})

	$('body>p').mouseleave(function(event) {
		pTagHoverTime = new Date.now() - aTagHoverTime
	})

	$('body>textarea').mouseover(function(event) {
		textTagHoverTime = new Date.now()
	})

	$('body>textarea').mouseleave(function(event) {
		textTagHoverTime = new Date.now() - aTagHoverTime
	})
	$('body>img').mouseover(function(event) {
		imgTagHoverTime = new Date.now()
	})

	$('body>img').mouseleave(function(event) {
		imgTagHoverTime = new Date.now() - aTagHoverTime
	})
	$('a').on('click', function(event) {
		console.log(event.target.attributes[0].nodeValue);
	})

	$(window).on('unload', function(event) {
		console.log('totalScrolled: ', totalScrolled)
		console.log('count: ', count)
		console.log('timeHovered: ', 'a-tag: ' aTagHoverTime, 'label-tag: 'labelTagHoverTime, 'p-tag: ', pTagHoverTime, 'text-tag: ', textTagHoverTime, 'img-tag: ', imgTagHoverTime)
	})

})
