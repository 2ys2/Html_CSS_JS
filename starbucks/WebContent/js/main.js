/* main.js */
//검색창 제어 - 요소 (search) 찾기
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
//검색창 클릭 이벤트 발생시 실행
searchEl.addEventListener('click', function() {
	searchInputEl.focus() //메소드라서 focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행될 내용
searchInputEl.addEventListener('focus', function(){
	searchEl.classList.add('focused')
	searchInputEl.setAttribute('placeholder', '검색어 입력')
})
//포커스가 해제(블러) 되면 실행
searchInputEl.addEventListener('blur', function(){
	searchEl.classList.remove('focused')
	searchInputEl.setAttribute('placeholder', '')
})
//페이지 스크롤에 따른 요소 제어 - bdges 제어
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
//스크롤이 지나치게 자주 발생하는 것을 조절(thorttle)
window.addEventListener('scroll', _.throttle(function(){
	if(window.scrollY > 500) {
		//Badge 요소 숨기기
		gsap.to(badgeEl, .6, {
			opacity:0,
			display:'none'
		})
		//상단으로 스크롤 버튼 보이기
		gsap.to(toTopEl, 2, {
			x: 0
		})
	} else {
		//Badge 요소 보이기
		gsap.to(badgeEl, .6, {
			opacity:1,
			display:'block'
		})
		//상단으로 스크롤 버튼 숨기기
		gsap.to(toTopEl, 2, {
			x: 100
		})
	}
}, 300))
//↑상단으로 가는 스크롤 모양 클릭하면
toTopEl.addEventListener('click', function(){
	gsap.to(window, .7, {
		scrollTo:0
	})
})

// 순서대로 나타나는 기능 - 나타날 요소 찾기(.fade-in)
const fadeEls = document.querySelectorAll('.visual .fade-in')

//이미지를 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl, index){
	gsap.to(fadeEl, 1, {
		delay:(index + 1) * .7,
		opacity: 1
	})
})

/**
 * 슬라이드 요소 관리
 */
new Swiper('.notice-line .swiper-container', {
	
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})





