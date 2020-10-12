const axios = require("axios");

export function sendRequest(method, headers = null, url, payload = null) {
  let param;

  if (method.toUpperCase() === "POST") {
    param = {
      method: method,
      headers,
      url: url,
      data: payload
    };
  } else {
    param = {
      method: method,
      url: url
    };
  }

  return axios(param).then(response => {
    return response.data;
  });
}
