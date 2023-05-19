const login = () => {
  const userName = document.getElementById("userName");
  const password = document.getElementById("password");

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: 'minchellek',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
  .then(res => res.json())
  .then(data => {
    const token = token.data;
    if (token) {
      alert("dang nhap thanh cong")
      sessionStorage.setItem("login",token);
      window.location.assign("edit.html");
    }
    else {
      alert("dang nhap that bai")
      window.location.assign("home.html")
    }
  });
}
const showLogOut = () => {
  var toggle = document.getElementById("sign-out")
  toggle.style.display = "block"
}

const loginPage = () =>{
  window.location.assign("edit.html")
}
const logOutPage = () => {
  window.location.assign("loginPage.html")
}

