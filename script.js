function test() {
  const loginId = document.getElementById('userid');
  const loginPw = document.getElementById('userpass');

      if( loginId.value.indexOf("@")==-1 || loginId.value.indexOf(".")==-1){
      alert("이메일에 필수 기호 '@' '.' 를 넣어 작성하십시오 ");
    }


      else if(loginPw.value.length<8){
      alert("비밀번호를 8자 이상 작성하십시오");
    }
      else{
        alert("로그인 성공")
      }
}
