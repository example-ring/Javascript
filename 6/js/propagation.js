const elements = document.querySelector('*');

//event.target과 event.currentTarget의 태그명 표시

for (let element of elements) {
    element.addEventListener("click", e =>
        console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`)
    );
}