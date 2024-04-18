const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
    alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});

//event 객체의 프로퍼티

//pageX : 현재 문서를 기준으로 이벤트가 발생한 가로 위치를 반환한다
//pageY : 현재 문서를 기준으로 이벤트가 발생한 세로 위치를 반환한다 