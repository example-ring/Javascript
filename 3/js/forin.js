//for (변수 in 객체) {...}

const gitBook = {

    title : "모던 자바스크립트",
    pubDate : "2023-09-18",
    pages : 106,
    finished: true
}

for(key in gitBook) {
    document.write(`${key} : ${gitBook[key]}<br>`);
}