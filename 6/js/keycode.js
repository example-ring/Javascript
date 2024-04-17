const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
    result.innerHTML = `
    code : ${e.code},
    key : ${e.key}
    `;
});

//키보드 이벤트의 종류

//keydown : 키를 누르는 동안
//keypress : 키를 눌렀을 때
//keyup : 키에서 손을 뗄 때