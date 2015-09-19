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