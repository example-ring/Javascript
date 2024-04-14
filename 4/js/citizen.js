function hello() {

    return "안녕하세요";

}

function bye () {

    return "안녕히가세요";
}

function userCheck(name, fn) {

    console.log(`${name}님`, fn());
}

userCheck("박예린", hello);
userCheck("예린박", bye);