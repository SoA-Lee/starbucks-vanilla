const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic..
  // input 요소에 focus 강제 적용
  searchInputEl.focus(); 
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  // 해당 element에 html 요소 지정
  searchInputEl.setAttribute('placeholder','통합검색'); 
});

searchInputEl.addEventListener('blur', function(){
  // focused 클래스 삭제
  searchEl.classList.remove('focused');
  // 해당 element에 html 요소 지정
  searchInputEl.setAttribute('placeholder',''); 
});

const badgeEl = document.querySelector('header .badges');
// 윈도우 객체, 브라우저 창. 화면 자체 
// 300 => 0.3초를 의미함
// 함수 수십개가 한번에 실행되는걸 0.3초 단위로 부하분산. throttle <- lodash 제공
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); 동작시키는 함수
    gsap.to(badgeEl, .6, {
      // 투명도. 시각적으로만 사라짐
      opacity: 0,
      display: 'none'
    });
  }else{
    // 배지 보이기
    badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      // 투명도
      opacity: 1,
      display: 'block'
    });
  }
},300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
// fadeEls 갯수만큼 함수로 실행이 된다.
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// 자바스크립트 클래스 생성자
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  // direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    delay: 5000 // 0.5초에 한번 씩 됨. 기본 값 3000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});