const url = "http://localhost:5000/";
// const url = "https://signup-form-express.herokuapp.com/signup";

const signUp = () => {
  let uName = document.getElementById("name").value;
  let uEmail = document.getElementById("email").value;
  let uPassword = document.getElementById("password").value;

  const userData = {
    userName: uName,
    userEmail: uEmail,
    userPassword: uPassword,
  };
  console.log(userData);

  const Http = new XMLHttpRequest();

  Http.open("POST", url + "signup");

  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(userData));

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
  window.location.href = "login.html";

  return false;
};

const login = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userLoginData = {
    lEmail: email,
    lPassword: password,
  };

  const Http = new XMLHttpRequest();

  Http.open("POST", url + "login");

  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(userLoginData));

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    // let a = JSON.parse(Http.responseText);
    document.getElementById("uData").innerHTML = Http.responseText;
  };
  //   window.location.href = "/login.html";

  return false;
};

// const showData = () => {
//   const Http = new XMLHttpRequest();
//   const url = "http://192.168.50.236:3000/login";
//   Http.open("POST", url);

//   Http.setRequestHeader("Content-Type", "application/json");
//   Http.send(JSON.stringify(userLoginData));

//   Http.onreadystatechange = (e) => {
//     console.log(Http.responseText);
//   };
//   //   window.location.href = "/login.html";

//   return false;
// };
