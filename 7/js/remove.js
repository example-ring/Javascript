
//1. remove() 메소드 사용해서 제목 삭제하기

// const title = document.querySelector("h1");

// title.addEventListener("click", () => {
//     title.remove();
// });


//2. removeChild() 메소드 사용해서 자식 노드 삭제하기
//부모 노드.removeChild(자식 노드)

// const items = document.querySelectorAll("li");

// for(let item of items) {
//     item.addEventListener("click", function() {
//         this.parentNode.removeChild(this);
//     });
// }

//function() {}에 this를 사용할 경우 이벤트가 발생한 노드를 가리킴
//화살표 함수에서 this는 window를 가리킴, window 객체는 DOM의 최상위 객체

//3. 삭제 버튼을 클릭해서 항목 삭제하기

const bttns = document.querySelectorAll("li > span");

for (let bttn of bttns) {
    bttn.addEventListener("click", function () {
        this.parentNode.remove();
    });
}