//1. 클래스 스타일 추가하기

// const title = document.querySelector("#title");

// title.onclick = () => {
//     title.classList.add("clicked");
// }



//2. 클래스 스타일 추가하고 삭제하기

// const title = document.querySelector("#title");

// title.onclick = () => {

//     if(!title.classList.contains("clicked")) {
//         title.classList.add("clicked");
//     } else {
//         title.classList.remove("clicked");
//     }
// }

//3. 클릭할 때마다 클래스 스타일 토글하기

const title = document.querySelector("#title");

title.onclick = () => {

    title.classList.toggle("clicked");
}

//4. 버튼을 클릭해서 다크 모드로 바꾸기

const bttn = document.querySelector("button");

bttn.onclick = function() {

    document.body.classList.toggle("dark");
}

//버튼 요소를 가져오고, 버튼을 클릭할 때마다 .dark 스타일을 토글한다.