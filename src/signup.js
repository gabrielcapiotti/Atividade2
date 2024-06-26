const api = axios.create({
  baseURL: "http://localhost:3333/",
});

function signup(event) {
  event.preventDefault();

  try {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    const name = document.getElementById("floatingName").value;

    console.log("Sending signup request:", { email, password, name });

    api
      .post("signup", { email, password, name })
      .then((response) => {
        console.log("Signup response:", response.data);
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Signup error:", error);
        alert("Erro ao realizar cadastro.");
      });
  } catch (error) {
    console.error("Signup error:", error);
    alert("Erro ao realizar cadastro.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", signup);
  }
});
