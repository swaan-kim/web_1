function test() {
  const loginId = document.getElementById('userid');
  const loginPw = document.getElementById('userpass');

      if(loginPw.value.length<8 || loginId.value.indexOf("@")!==-1 || loginId.value.indexOf(".")!==-1){
      alert("이메일의 @ .기호 ,비밀번호 8자 이상 작성하십시오");
    }

}
