export function sendEmail(data, callback) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      callback(response.message);
    })
    .catch((err) => {
      callback(err.toString());
    });
}
