$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1000,
      prevArrow: '<button type="button" class="slick-prev"><img src ="icons/left.svg"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src ="icons/right.svg"</button>',
      responsive:[
        {
          breakpoint: 1090,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
            breakpoint: 600,
            settings: {

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
    });
  });
  console.log("here");
      