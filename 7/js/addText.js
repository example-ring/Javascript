const orderButton = document.querySelector("#order"); //주문하기 버튼
const orderInfo = document.querySelector("#orderInfo"); //주문 정보 영역
const title = document.querySelector("#container > h2"); //책 제목 요소

orderButton.addEventListener("click", () => { //버튼을 클릭할 시 실행될 수 있도록~
    let newP = document.createElement("p");         //새로운 p 요소 노드
    let textNode = document.createTextNode(title.innerText); //텍스트 노드 생성
    newP.appendChild(textNode);     //텍스트 노드를 p 요소 노드에 추가
    newP.style.color = "pink";
    newP.style.fontSize = "0.8em";
    orderInfo.appendChild(newP);        //p 요소를 orderInfo에 추가
    

}, {once: true}); //한 번만 실행됨         

//요소 노드 만들기- createElement() 메소드
//텍스트 노드 만들기- createTextNode() 메소드
//자식 노드 연결하기- appendChild() 메소드 //부모 노드.appendChild(자식 노드)
