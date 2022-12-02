// const baseURL = 'http://www.jzhang.tk:8080';
const baseURL = 'http://localhost:8080';

export function loginGamerOrDeveloper(data, asGamer) {
  let url = asGamer
    ? `${baseURL}/authenticate/gamer`
    : `${baseURL}/authenticate/developer`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(data),
  }).then((response) => {
    if(response.status === 200) {
      // localStorage.setItem("authToken", response.json().token);
      localStorage.setItem("asGamer", asGamer);
      return response.json()
      // window.location = asGamer ? "/gamer" : "/create";
    }
    else {
      console.log("no")
    }
  });
}

export function registerGamerOrDeveloper(data, asGamer) {
  let url = asGamer
    ? `${baseURL}/register/gamer`
    : `${baseURL}/register/developer`;

  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if(response.status === 200) {
      localStorage.setItem("asGamer", asGamer);
      // return response.json()
    }
  });
}

export function getProfile(token) {
  let url = `${baseURL}/user`
  // let token = localStorage.getItem("authToken");
  return fetch(url, {
    method: "get",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
}

export function getGameList() {
  let token = localStorage.getItem("authToken");
  fetch(baseURL, {
    method: "get",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
    body: {},
  }).then((response) => {
    console.log("Try: " + response.json());
  });
}


export function fetchGameById(id) {
  let url = `${baseURL}/game/${id}`
  return fetch(url).then((response) => {
    return response.json();
  });
}
