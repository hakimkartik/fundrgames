const baseURL = process.env.REACT_APP_API_BASE_URL;

export function loginGamerOrDeveloper(data, asGamer) {
  let url = asGamer
    ? `${baseURL}/authenticate/gamer`
    : `${baseURL}/authenticate/developer`;

  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  }).then((response) => {
    console.log("Try: " + response.json());
    //set local
    localStorage.setItem("authToken");
    window.location = "/gamer";
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
