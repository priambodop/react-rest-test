import { URL_LOGIN } from "../../helpers/path";
import base64 from "base-64";
import { LOGIN_ERROR_SERVER, LOGIN_ERROR_SOMETHING, LOGIN_INVALID_INPUT, POST } from "../../helpers/constant";
import { processGetItems } from "./DashboardActions";

let isAuthorized = false;

export function processLogin(uname, pass) {
  let headers = new Headers();

  headers.append(
    "Authorization",
    "Basic " + base64.encode(uname + ":" + pass)
  );

  fetch(URL_LOGIN, {
    method: POST,
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        alert(LOGIN_ERROR_SERVER);
      }
      return response.headers.get("authorization");
    })
    .then((data) => {
      localStorage.setItem('token', data);
      processGetItems();
    })
    .catch(() =>
      alert(LOGIN_ERROR_SOMETHING)
    );
}

function processLogin2(uname, pass){
  isAuthorized = handleUserInput(uname, pass);
  if(isAuthorized){
    processLogin2(uname, pass);
  }else{
    alert(LOGIN_INVALID_INPUT);
  }
}

function handleUserInput(uname, pass) {
  if (!uname || uname !== "test") {
    return false;
  } else if (!pass || pass !== "test") {
    return false;
  } else {
    return true;
  }
}
