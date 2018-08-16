export function post(body) {
  const options = {
    method: "POST",
    mode: "no-cors",
    credentials: "include",
    body: "message=" + encodeURIComponent(JSON.stringify(body)),
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }

  return fetch("api/command/execute", options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => console.log(error))
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function parseJSON(response) {
  return response.json()
}
