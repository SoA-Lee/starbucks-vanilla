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
//윈도우 객체, 브라우저 창. 화면 자체 
window.addEventListener('scroll', function(){
  console.log('scroll!');
});