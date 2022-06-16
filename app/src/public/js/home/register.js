const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),  //공백표시를 대문자, - 으로 한다는데 뭔소린지...
    registerBtn = document.querySelector("#button");
//DOM 이란? (Document Object Model) 일종의 인터페이스임. 
//질의 선택자 선택자를 통해서 html의 값을 받아올 수 있음.
//ejs파일의 태그들에 대한 정보. 임의로 선택자를 만들어줄 수 있음.
//어싱크: 비동기, 디퍼: 순서대로 실행
registerBtn.addEventListener("click", register)
function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    }
    console.log(req)
    // fetch("/register", {
    //     method: "POST", //body를 통해서 데이터를 전달할 때는 http메소드인 포스트로 전달해야함.
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(req),//stringify는 데이터를 문자열로 바꿔주는 메소드
    // })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         if(res.success) {
    //             location.href = "/"; //로케이션 사용법? -> success했을 경우 "/"경로로 이동.
    //         }
    //         else {
    //             alert(res.msg) //화면에 창으로 띄워줌.
    //         }
    //     })
    //     .catch((err) => {
    //         console.error(new Error("로그인 중 에러 발생"))
    // })
}   