function login ()  {
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: userName,
      password: password,
      // expiresInMins: 60, // optional
    })
  })
  .then(res => res.json())
  .then(data => {
    const token = data.token;
    if (token) {
      alert("dang nhap thanh cong")
      localStorage.setItem("login",token);
      window.location.assign("edit.html");
    }
    else {
      alert("dang nhap that bai")
      window.location.assign("loginPage.html")
    }
  });
}
const showLogOut = () => {
  var toggle = document.getElementById("sign-out")
  toggle.style.display = "block"
}

const logOutPage = () => {
  window.location.assign("loginPage.html");
}

const save = () =>{

}
