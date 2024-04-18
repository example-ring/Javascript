const container = document.querySelector("#container");
const imgs = [`ditto.jpg`, `ditto2.jpg`, `ditto3.jpg`, `ditto4.jpg`, `ditto5.jpg`];

container.style.backgroundImage = `url(img/${imgs[0]})`; //첫번째 이미지 기본 표시


const arrows = document.querySelectorAll(".arrow");
let i = 0; 

arrows.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left") { //왼쪽 화살표 클릭한 경우
            i--;                    //이전 페이지로 이동
            if(i < 0) {             //첫 번째 이미지인 경우
                i = imgs.length -1; //마지막 이미지로 이동(5번째)
            }
        }
        else if (e.target.id === "right") {  //오른쪽 화살표 클릭한 경우
        i++;                               //다음 이미지로 이동
        if(i >= imgs.length) {             //마지막 이미지인 경우
                i = 0;                     //첫 번째 이미지로 이동
            }
        }

        container.style.backgroundImage = `url(img/${imgs[i]})` //현재 이미지 표시
    });

});

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    alert("오른쪽 버튼을 사용할 수 없습니다.");
});


//event 객체 -> target : 이벤트가 발생한 대상을 반환
//event 객체의 메소드 -> preventDefault : 기본 동작을 취소
