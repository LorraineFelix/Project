$(document).ready(function(){

				var lightbox = $('#lightbox');

				lightbox.find('.images img').click(function(){
					var theSrc = $(this).attr('src');
					lightbox.find('.light img').attr('src',theSrc);
					lightbox.find('.light').show();
					lightbox.find('.dark').show();
				});

				lightbox.find('.dark, .light button').click(function(){
					lightbox.find('.light').hide();
					lightbox.find('.dark').hide();
				});
			});

function rolling_over() {
				var theRel = $(this).attr('rel');
				var theSrc = $(this).attr('src');

				$(this).attr('src',theRel);
				$(this).attr('rel',theSrc);
			}

			$('#rollovers img').mouseover(rolling_over);
			$('#rollovers img').mouseout(rolling_over);

			




			/*-------------------------------------
			| Greater than the first
			-------------------------------------*/
			$('#sliding img:gt(0)').css({'left':'600px'});

			/*-------------------------------------
			| sliding
			-------------------------------------*/
			function sliding_slide() {
				$('#sliding img:eq(0)').delay(3000).animate({'left':'-600px'}, 1000, whenDone);
				$('#sliding img:eq(1)').delay(3000).animate({'left':'0px'}, 1000);

				function whenDone() {
					$('#sliding img:eq(0)').appendTo('#sliding').css({'left':'600px'});
					sliding_slide(); //keep the party going
				}
			}

			sliding_slide(); //start the party


