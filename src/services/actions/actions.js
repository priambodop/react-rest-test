import { URL_LOGIN } from "../../helpers/path";
import base64 from "base-64";
import { LOGIN_ERROR_SERVER, LOGIN_ERROR_SOMETHING, LOGIN_INVALID_INPUT } from "../../helpers/constant";

export function processLogin(uname, pass) {
  let headers = new Headers();

  if (handleUserInput(uname, pass)) {
    headers.append(
      "Authorization",
      "Basic " + base64.encode(uname + ":" + pass)
    );

    fetch(URL_LOGIN, {
      method: "POST",
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
      })
      .catch(() =>
        alert(LOGIN_ERROR_SOMETHING)
      );
  } else {
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
