const loginForm = document.querySelector("#login-form");
const loginId = document.querySelector("#login-form #user");
const loginPw = document.querySelector("#login-form #password");
const loginHidden = document.querySelector("#login-container");
const loginPass = document.getElementById("login-pass");
const logoutBtn = document.getElementById("logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const PASSWORD_KEY = "password";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginId.value;
  const password = loginPw.value;
  if (username === "user" && password === "password") {
    loginHidden.classList.add(HIDDEN_CLASSNAME);
    loginPass.innerHTML = `관리자 ${username}님 환영합니다.`;
    loginPass.classList.remove(HIDDEN_CLASSNAME);
  } else {
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(PASSWORD_KEY, password);
    loginHidden.classList.add(HIDDEN_CLASSNAME);
    paintUser(username);
  }
}

function showLogin() {
  alert("로그인 정보가 사라집니다.");
  loginId.value = "";
  loginPw.value = "";
  localStorage.clear();
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  loginPass.classList.add(HIDDEN_CLASSNAME);
  loginHidden.classList.remove(HIDDEN_CLASSNAME);
}

function paintUser(username) {
  loginPass.innerHTML = `"${username}"님 환영합니다.`;
  loginPass.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.addEventListener("click", showLogin);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginHidden.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // localStorage에 아이디 있는 경우
  paintUser(savedUsername);
}
