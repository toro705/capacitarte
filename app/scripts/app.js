var App = function () {
	return {
		WOW: function () {
			new WOW().init();
		},
		preloader: function() {
                $('.preloader-container').css('opacity', 0, 100);
				setTimeout(function(){
			        $('.preloader-container').remove();
    			}, 200);		
		},
		
		navActive: function() {
			$('.navCollapse').click(function () {
				$('body').toggleClass('navActive');
			});
			$('body').keydown(function(e) {
			    if (e.keyCode == 27) {
					$('body').toggleClass('navActive');
			    }
			});			
	    	var $nav = $('nav');
	    	// console.log($nav);
			var previousScroll = 0;
			$(window).scroll(function(event){
			   var scroll = $(this).scrollTop();
			   if (scroll > previousScroll && scroll > 50){
			       $nav.addClass('ocultar');
			       //Cierra el menú cuando hay scroll
					$('#body').removeClass('navActive');
			   } else {
			      $nav.removeClass('ocultar');
			   }
			   previousScroll = scroll;
			});

		},
		dashboardResponsiveQuerys: function() {
				var size = $(window).outerWidth();
				if (size < 768) {
				    $('.dashboard__query').appendTo('.col-sm-7.visible-xs');
				    console.log('mobile')
				}
				else if (size >= 768) {
				    $('.dashboard__query').appendTo('.col-sm-7.hidden-xs');
				    console.log('else')
				}
				window.onresize = function() {
					var size = $(window).outerWidth();
					console.log(size);
					if (size < 768) {
					    $('.dashboard__query').appendTo('.col-sm-7.visible-xs');
					    console.log('mobile');
					}
					else if (size >= 768) {
					    $('.dashboard__query').appendTo('.col-sm-7.hidden-xs');
					    console.log('else');
					}
	 			}
		},
		textCounter: function(field, field2, maxlimit) {
			var countfield = document.getElementById(field2);
			 if ( field.value.length > maxlimit ) {
			  field.value = field.value.substring( 0, maxlimit ) * ' caracteres restantes';
			  return false;
			} else {
			  countfield.value = maxlimit - field.value.length + ' caracteres restantes';
			}
			console.log('textcounter');
		}, 		
		boxup: function() {
			setTimeout(function(){
				$('.boxup-container .boxup').queue(function() {
				        $(this).css('opacity', 0, 300);
						setTimeout(function(){
					        $('.boxup-container').remove();
					        
            			}, 3000);		
				   });				 
            }, 3000);			
		},
		PopOver: function() {
			jQuery('[data-toggle="popover"]').popover();
			// $('[data-toggle="popover"]').popover(({ trigger: "hover" }));
		},
		comment: function() {
			$('.comments__actions .triggerComment').click(function() {
				$(this).siblings().fadeOut();
				$(this).fadeOut();
				$(this).siblings('form').slideDown();
			});
			$('.comments__actions .cancelComment').click(function() {
				$(this).parent().parent().hide();
				$(this).parent().parent().siblings('button').fadeIn();
				$(this).parent().parent().siblings('a').fadeIn();
			});
		},
		fileInput: function() {
			$('.chatForm input[type="file"]').on('change', function () {
                var fileName= $(this).val().substr($(this).val().lastIndexOf('\\') + 1);
                if (fileName.length) {
                    $(this).parents('.btn-group').prev('.row').children('.file').html('').append('<span><i class="fa fa-paperclip"></i>'+fileName+'<a href="javascript:;" class="pull-right"><i class="fa fa-close"></i></a></span>');
                }
            });
			$(document).on('click', '.chatForm .file span a',function (e) {
                $(this).parents('.form-group').find('input[type="file"]').val(null).clone(true);
                $(this).parents('.file').html('');
            });			
		},
		customScroll: function () {
   			$('.scrollbar-outer').scrollbar();
		},
		infiniteScroll: function () {
			
			var courseBlocks = $('.course-block'),
				offset = 0.8;

			//hide course blocks which are outside the viewport
			hideBlocks(courseBlocks, offset);

			var lastScrollTop = 0;

			//on scolling, show/animate course blocks when enter the viewport
			$(window).on('scroll', function()
			{
				var st = $(this).scrollTop();
			   	if(st > lastScrollTop)
			   	{
			       	if(near_bottom_of_page())
			       	{
			       		$('#loader_bottom').show();

			       		console.log('trigger ajax next');
			       		// alert('trigger ajax next');
			       		// ** UNCOMMENT THIS **
						// $.ajax({
						//     url: "URL", 					// change this
						//     type: 'PUT', 					// POST | PUT | GET | etc
						//     data: { data: "data" }, 		// change this
						//     dataType: "json", 				// change the data type according to your needs
						//     success: function (response)	// if success do this
						//     {
						//     	console.log(response);
						// 		$('#loader_bottom').slideUp();
						// 		$.each(response, function(key, value)
						// 		{
						// 			$(".container").append(
						// 				'<div class="course-block">'+
						// 					'<div class="course-img 1">'+ // to change sides change 1 to 2
						// 						'<i class="fa fa-envelop fa-3x" style="line-height:27px; margin-left:-12px;"></i>'+
						// 					'</div>'+
						// 					'<div class="course-content">'+
						// 						'<h2>'+ value.title +'</h2>'+ // modify this according to your json response
						// 						'<p>'+ value.message +'</p>'+ // modify this according to your json response
						// 						'<span class="date"><%= message.time_sent.strftime("%e %B, %Y %I:%M%p") %></span>'+
						// 					'</div>'+
						// 				'</div>'
						// 			);
						// 		});
						//     },
						//     error: function (response)
						//     {
						//     	alert("Something appears to be wrong");
						//     }
						// });

						$('#loader_bottom').slideDown();
			       	}
			   	}
			   	else
			   	{
			   		if(top_of_page())
			   		{
			   			$('#loader_top').show();
						
						console.log('trigger ajax previous');
						// alert('trigger ajax previous');
						// ** UNCOMMENT THIS **
			   			// var firstMsg = $('.course-block:first');

					 	// // Where the page is currently:
					 	// var curOffset = firstMsg.offset().top - $(document).scrollTop();

						// $.ajax({
						//     url: "URL", 					// change this
						//     type: 'PUT', 					// POST | PUT | GET | etc
						//     data: { data: "data" }, 		// change this
						//     dataType: "json", 				// change the data type according to your needs
						//     success: function (response)	// if success do this
						//     {
						//     	console.log(response);
						// 		$('#loader_bottom').slideUp();
						// 		$.each(response, function(key, value)
						// 		{
						// 			$(".container").prepend(
						// 				'<div class="course-block">'+
						// 					'<div class="course-img 1">'+ // to change sides change 1 to 2
						// 						'<i class="fa fa-envelop fa-3x" style="line-height:27px; margin-left:-12px;"></i>'+
						// 					'</div>'+
						// 					'<div class="course-content">'+
						// 						'<h2>'+ value.title +'</h2>'+ // modify this according to your json response
						// 						'<p>'+ value.message +'</p>'+ // modify this according to your json response
						// 						'<span class="date"><%= message.time_sent.strftime("%e %B, %Y %I:%M%p") %></span>'+
						// 					'</div>'+
						// 				'</div>'
						// 			);
						// 		});
						//     },
						//     error: function (response)
						//     {
						//     	alert("Something appears to be wrong");
						//     }
						// });

						// // Offset to previous first message minus original offset/scroll
					 	// $(document).scrollTop(firstMsg.offset().top-curOffset);

						$('#loader_top').slideUp();
			   		}
			   	}

			   	lastScrollTop = st;

				(!window.requestAnimationFrame) ? setTimeout(function() { showBlocks(courseBlocks, offset); }, 100) : window.requestAnimationFrame(function() { showBlocks(courseBlocks, offset); });
			});

			function hideBlocks(blocks, offset)
			{
				blocks.each(function()
				{
					if($(this).offset().top > $(window).scrollTop()+$(window).height()*offset &&
						$(this).find('.course-img, .course-content'))
					{
						$(this).find('.course-img, .course-content').addClass('is-hidden');
					}
					else if($(this).offset().top < $(window).scrollTop()+$(window).height()*0 &&
						$(this).find('.course-img, .course-content'))
					{
						$(this).find('.course-img, .course-content').addClass('is-hidden');
					}
				});
			}

			function showBlocks(blocks, offset) {
				blocks.each(function(){
					if(
						(
						($(this).offset().top <= $(window).scrollTop()+$(window).height()*offset) &&
						($(this).offset().top >= $(window).scrollTop()+$(window).height()*0)
						) &&
						$(this).find('.course-img').hasClass('is-hidden') &&
						$(this).find('.course-img, .course-content')
					)
					{
						$(this).find('.course-img, .course-content').removeClass('is-hidden');
						$(this).find('.course-img, .course-content').addClass('bounce-in');
					}
				});
			}

			function top_of_page()
			{
				return $(window).scrollTop() == ($(window).height() - $(window).height())*0;
			}

			function near_bottom_of_page()
			{
				return $(window).scrollTop() >= ($(document).height() - $(window).height())*1;
			}

			// check_scroll();
		},
		textCounter: function (field,field2,maxlimit) {
			function textCounter(field,field2,maxlimit) {
				 var countfield = document.getElementById(field2);
				 if ( field.value.length > maxlimit ) {
				  field.value = field.value.substring( 0, maxlimit );
				  return false;
			 } else {
			  countfield.value = maxlimit - field.value.length;
			 }
			}	
		},
		onload: function () {
			App.preloader();
		},	
		onResize: function()	{

		},
		init: function () {
			App.WOW();
			App.navActive();
			App.boxup();
		}
	}
}();
jQuery(document).ready(function (){
	App.init();
})
 window.onload = function () {
	App.onload();
};
