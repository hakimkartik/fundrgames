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

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if(response.status === 200) {
      localStorage.setItem("asGamer", asGamer);
      return response.json()
    }
  });
}

// export function PostData() {
//   const fd = new FormData({
//     Username: "test@usc.edu",
//     Password: "123",
//   });
//   fetch(baseURL, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: fd,
//   }).then((response) => {
//     console.log("Try: " + response.json());
//   });
// }

export function getGameList() {
  let token = localStorage.getItem("authToken");
  fetch(baseURL, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authentication: `Bearer ${token}`,
    },
    body: {},
  }).then((response) => {
    console.log("Try: " + response.json());
  });
}
