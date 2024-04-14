function showData(name, age) {

    alert(`안녕하세요? ${name}님. 나이가 ${age}살입니다`);
}

function getData(callback) {
    let userName = prompt("이름을 입력");
    let userAge = prompt("나이를 입력");
    callback(userName, userAge);
}