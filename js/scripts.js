// $(document).ready(function() {
// // tabbed content
function kill_links(event) {
   event.preventDefault();
}
$('#tabbed nav a').click(kill_links);

// $('#tabbed section').hide();

$('#tabbed section:gt(0)').hide();

function tab_click() {
	$('#tabbed nav a').removeClass('chosen')
	$(this).addClass('chosen');

	var theHref = $(this).attr('href');

	$('#tabbed section').hide();
	$(theHref).show();
}

$('#tabbed nav a').click(tab_click);



// ajax 




/*-------------------------------------
| Gallery Image Hovers
-------------------------------------*/
// function manage_galleries() {
// 	$('#gallery img')
// 		.animate({'opacity':'.5'}, 1000)
// 		.hover(
// 		function(){
// 			$(this).stop().animate({'opacity':'1'}, 500);
// 		},
// 		function() {
// 			$(this).stop().animate({'opacity':'.5'}, 500);
// 		}
// 	);
// }

// manage_galleries();

/*-------------------------------------
| AJAX
-------------------------------------*/
// function targetFadeUp() {
// 	$('#sect1 .target').animate({'opacity':'1'}, 2000);
// 	manage_galleries();
// }

// function ajax_web(event) {
// 	event.preventDefault();

// 	$('#sect1 .target').stop(true).css({'opacity':'0'}).load('ajax-web.html #gallery', targetFadeUp);
// }

// $('#sect1 nav.ajax a.web').click(ajax_web);

// $('#sect1 nav.ajax a.web').trigger('click');

/*-------------------------------------
|  Random Tab: Slide
-------------------------------------*/

function sliding_slide() {
				var slide1 = $('#sliding .slide:eq(0)');
				var slide2 = $('#sliding .slide:eq(1)');

				slide1.delay(2000).animate({'left':'-600px'}, 1000, whenDone);
				slide2.delay(2000).animate({'left':'0px'}, 1000);

			}

			function whenDone() {
				var slide1 = $('#sliding .slide:eq(0)');
				slide1
					.css({'left':'600px'})
					.appendTo('#sliding');

				sliding_slide(); // keep the party going
			}


			sliding_slide(); //start the party

/*-------------------------------------
| 
-------------------------------------*/

// $('.gallery').hover(function(){
//             $(this).find('h5, p').stop().animate({
//                 opacity: '1',              
//                 marginLeft: '230px'
//             }, 300);
//         }, function(){
//             $(this).find('h5, p').stop().animate({
//                 opacity: '0',              
//                 marginLeft: '0px'
//             }, 100);
//         });

  	
//   $('.smooth').on('click', function() {
//     $.smoothScroll({
//         scrollElement: $('body'),
//         scrollTarget: '#' + this.id
//     });
    
//     return false;
// });



/*-------------------------------------
| Gallery Image Hovers
-------------------------------------*/
function manage_art() {
	$('.moreart img')
		.animate({'opacity':'.5'}, 1000)
		.hover(
		function(){
			$(this).stop().animate({'opacity':'1'}, 500);
		},
		function() {
			$(this).stop().animate({'opacity':'.5'}, 500);
		}
	);
}

manage_art();

/*-------------------------------------
| AJAX
-------------------------------------*/
function targetFadeUp() {
	$('#page3 .target').animate({'opacity':'1'}, 2000);
	manage_galleries();
}

function ajax_art(event) {
	event.preventDefault();

	$('#page3 .target').stop(true).css({'opacity':'0'}).load('ajax-art.html #moreart', targetFadeUp);
}

$('#page3 nav.ajax a.art').click(ajax_art);

$('#page3 nav.ajax a.art').trigger('click');


function ajax_etc(event) {
	event.preventDefault();

	$('#page3 .target').stop(true).css({'opacity':'0'}).load('ajax-etc.html #moreetc', targetFadeUp);
}

$('#page3 nav.ajax a.etc').click(ajax_etc);


/*-------------------------------------
| lightbox: Film Tab
-------------------------------------*/

	function light_on() {
				// get image for lightbox
				var newSrc 		= 	$(this).attr('src');
				var theTitle 	= 	$(this).attr('data-title');
				var theDesc 	= 	$(this).attr('data-desc');

				// update lightbox
				$('#lbox img').attr('src', newSrc);
				$('#lbox h1').html(theTitle);
				$('#lbox p').html(theDesc);

				// show the light
				$('#lbox').show();
			}

			/*-------------------------------------
			| Light Off
			-------------------------------------*/
			function light_off() {
				$('#lbox').hide();
			}

			/*-------------------------------------
			| Event Listeners
			-------------------------------------*/
			$('.posters img').click(light_on);
			$('#lbox').click(light_off);


/*-------------------------------------
| Hover : About Nerdica
-------------------------------------*/

function stage_over() {
	$('#page2 .me').attr('src', '_img/me.png');
}

$('.me').mouseover(stage_over);

function stage_out() {
	$('#page2 .me').attr('src', '_img/me_kat.png');
}

$('.me').mouseout(stage_out);

/*-------------------------------------
| Art Tab: 1
-------------------------------------*/


function point_over() {
	$('#art .wall').attr('src', '_img/visualtwo/watchingmona.jpg');
}

$('.wall').mouseover(point_over);

function point_out() {
	$('#art .wall').attr('src', '_img/visualtwo/wallart.jpg');
}

$('.wall').mouseout(point_out);

/*-------------------------------------
| Art Tab: 2
-------------------------------------*/


function again_over() {
	$('#art .drawing').attr('src', '_img/visualtwo/words.jpg');
}

$('.drawing').mouseover(again_over);

function again_out() {
	$('#art .drawing').attr('src', '_img/visualtwo/drawing.jpg');
}

$('.drawing').mouseout(again_out);



