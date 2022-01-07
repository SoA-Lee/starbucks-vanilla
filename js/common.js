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

/* 올해가 몇 년도인지 계산 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()