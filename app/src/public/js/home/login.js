const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
//DOM 이란? (Document Object Model) 일종의 인터페이스임. 
//질의 선택자 선택자를 통해서 html의 값을 받아올 수 있음.
//ejs파일의 태그들에 대한 정보. 임의로 선택자를 만들어줄 수 있음.
//어싱크는 비동기 디퍼는 순서대로 실행
loginBtn.addEventListener("click", login)
function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    }
    console.log(req)
}   