const api = axios.create({
  baseURL: "http://localhost:3333/",
});

function signup(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const form = event.target;
  const email = form.elements["floatingInput"].value;
  const password = form.elements["floatingPassword"].value;
  const name = form.elements["floatingName"].value;

  axios
    .post("http://localhost:3333/signup", {
      email: email,
      password: password,
      name: name,
    })
    .then((response) => {
      alert("Signup Successful!");
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) {
        alert("Signup Failed: " + error.response.data.message);
      } else {
        alert("Signup Failed: Network Error");
      }
      console.error(error);
    });
}
