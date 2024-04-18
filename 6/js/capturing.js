const elements = document.querySelectorAll('*');  

 // 모든 요소 순회하면서 click 이벤트 발생했을 때 
 // event.target과 event.currentTarget의 태그명 표시
for (let element of elements) {
  element.addEventListener("click", e => 
    console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`, true)
  );
}

//이벤트가 발생한 영역은 p 영역이지만 currentTarget이 최상위 요소인 HTML부터 시작
