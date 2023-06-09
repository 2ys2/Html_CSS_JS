// day0609.js


$(function(){
    $('.slick_sd').slick({
		slide: '.swiper-slide',
    	infinite: true, // 무한여부
        slidesToShow: 4, // 보여질 슬라이드 갯수
        slidesToScroll: 1, // 스크롤할 슬라이드 갯수
        speed : 100,	 // 버튼 누르고 화면 뜨는데 걸리는 시간
        arrows : true,	// 화살표 여부
        preArrow: "<button type='button' class='slick-prev'>Previous</button>",
		nextArrow: "<button type='button' class='slick-next'>Next</button>",
        dots : true,	// 페이지네이션 여부
        autoplay : true,	// 자동 스크롤 여부
        autoplaySpeed : 2500, 	// 자동 스크롤 시 넘어가는데 걸리는 시간
        pauseOnHover : true,	// 마우스 호버하면 슬라이더 멈추는 설정
        vertical : false,	// 세로 방향 슬라이드 옵션
        draggable : true, 	// 드래그 가능 여부
    });
  });


const imageEls = document.querySelectorAll('.left-side img');
var rhimg = document.querySelector('#rimg');

imageEls.forEach((el) => {
		el.addEventListener("click", () => {
			rhimg.src = el.src;
		})
	})

/*
var rhimg = document.querySelector('#rimg');
var lfimg1 = document.querySelector('#limg1');
lfimg1.onclick = showImg;
var lfimg2 = document.querySelector('#limg2');
lfimg2.onclick = showImg;
var lfimg3 = document.querySelector('#limg3');
lfimg3.onclick = showImg;

function showImg() {
	var newImg = this.src; //클릭 이벤트가 발생한 대상의 src 속성 값을 가져옴
	//rhimg.setAttribute('src', newImg);  //newImg 값을 큰 이미지의 src 속성 값에 할당
	rhimg.src = newImg; //도 가능
}

*/

/*
var ul = document.querySelector('.slide_wrap');

  function move(){
 
            var curIndex = 0;
 
            setInterval(function(){
                ul.style.transition = '0.2s';
                ul.style.transform = "translate3d(-"+200*(curIndex+1)+"px, 0px, 0px)";
 
                curIndex++;
 
                if(curIndex === 5){
                    setTimeout(function(){
                        ul.style.transition = '0s';
                        ul.style.transform = "translate3d(0px, 0px, 0px)";
                    },201)
                    curIndex = 0;
                }
 
            },1000);
        }

document.addEventListener("DOMContentLoaded", function() {
	move();
});

  var ul = document.querySelector('.slide_wrap');
        var firstItemClone = ul.firstElementChild.cloneNode(true);
        ul.appendChild(firstItemClone);
        */

/*
// Swiper
var swiper = new Swiper(".mySwiper", {
	//direction: 'horizontal',
	slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수
	spaceBetween: 10, // 슬라이드 사이 여백
	//slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
	loop: true,
	loopAdditionalSlides : 1,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	},
});
*/
/*
$(function () {
	   $('#limg1').click(function () {
		   $('.right-side').load('#limg1');
	   });
   });
*/


