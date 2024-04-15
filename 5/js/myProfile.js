const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("#contents img");


title.onclick = () => {
    title.innerText = "🖤😈💜";
    title.style.background = "black";

}

userName.onclick = () => {

    userName.innerHTML = `이름: <b>Kuromi</b>`
    userName.style.background = "black";
    userName.style.color = "white";
}
pfImage.onclick = () => pfImage.src = "img/kuromi.jfif";