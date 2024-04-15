const selectMenu = document.querySelector("#major");

function displaySelector() {
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(`${selectedText}를 선택했습니다.`);
}

selectMenu.onchange = displaySelector;