'use strict';
angular.
    module('mainPageEn').
        component('mainPageEn', {
            templateUrl: 'scripts/main-page-en/main-page-en.template.html',
            controller: ['$http', function mainPageRoController($http) {

                var self = this;
                self.test = "traklalalalala";
                var wheight = $(window).height()-100;
                var wwidth = $(window).width();

        $('.fullHeight').css('height', wheight);
        console.log("slider ba");

        $('#myCarousel .item img').each(function() {
                var imgSrc = $(this).attr('src');
            console.log(imgSrc);
                $(this).parent().css({'background-image': 'url('+imgSrc+')'});
                $(this).remove();
                console.log("a mers");
            });

        $(window).resize(function(){
                wheight = $(window).height();
                $('.fullHeight').css('height', wheight);
            });
        $('.carousel').carousel({
          interval: 5000
        });
                //mouse Coordinates
                $("body section:not('#testimonials')").on( "mousemove", function( event ) {
                    if(event.pageX<wwidth/2) {

                        $('#nav2 ul li:first-child a').addClass('activeHover');
                        $('#nav2 ul li:last-child a').removeClass('activeHover');
                    }
                    else {
                        $('#nav2 ul li:last-child a').addClass('activeHover');
                        $('#nav2 ul li:first-child a').removeClass('activeHover');
                    }

                });

                $("body section#testimonials").on( "mousemove", function( event ) {
                    $('#nav2 ul li:last-child a').removeClass('activeHover');
                });

                //affix activation
                $('#nav2').affix({
                  offset: {
                    top: wheight+650,
                    bottom: function () {
                      return (this.bottom = $('.footer').outerHeight(true))
                    }
                  }
                });

                //test function
                this.clickedMe = function() {
                    alert('tralala');
                }
                //language selection
                $('.nav-lang a:first-child').removeClass('active');
                $('.nav-lang a:last-child').addClass('active');
                $('li span.nameSection').each(function() {
                  if(this.innerHTML=='Despre noi') this.innerHTML = 'About Us';
                  if(this.innerHTML=='Testimoniale') this.innerHTML = 'Testimonials';
                });


                /*
                $http.get('phones/phones.json').then(function(response) {
                    self.phones = response.data;
                });
                */
            }]
});
