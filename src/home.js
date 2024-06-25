import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

async function login(event) {
  event.preventDefault();

  try {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    const response = await api.post("login", { email, password });

    console.log(response.data);

    alert("Login realizado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao realizar login. Verifique suas credenciais.");
  }
}

async function signup(event) {
  event.preventDefault();

  try {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const response = await api.post("signup", { email, password });

    console.log(response.data);

    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao realizar cadastro.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", login);
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", signup);
  }
});
