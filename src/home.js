const api = axios.create({
  baseURL: "http://localhost:3333/",
});

async function login(event) {
  event.preventDefault();

  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Sending login request:", { email, password });

    const response = await api.post("login", { email, password });

    console.log("Login response:", response.data);

    alert("Login realizado com sucesso!");
  } catch (error) {
    console.error("Login error:", error);
    alert("Erro ao realizar login. Verifique suas credenciais.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", login);
  }
});
