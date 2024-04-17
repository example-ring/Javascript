const button = document.querySelector("#bttn");

button.addEventListener("click", () => {
    const word = document.querySelector("#word").value; //텍스트 상자 내용
    const result = document.querySelector("#result"); // 결괏값 표시 영역
    let count = word.length; //문자열 길이 

    result.innerText = `${count}`; //결괏값 표시
});

//마우스 이벤트

//click : HTML 요소 클릭 시
//dbclick : HTML 요소 더블 클릭 시
//mousedown : 요소에서 마우스 버튼을 누를 시
//mousemove : 요소에서 마우스 포인터를 움직일 시
//mouseover : 마우스 포인터를 요소 위로 옮길 시
//mouseout : 마우스 포인터가 요소를 벗어날 시
//mouseup : 요소 위에 올려놓은 마우스 버튼에서 손을 뗄 시