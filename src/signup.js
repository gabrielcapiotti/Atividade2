const api = axios.create({
  baseURL: "http://localhost:3333/",
});

async function signup(event) {
  event.preventDefault();

  try {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    const name = document.getElementById("floatingName").value;

    const response = await api.post("signup", { email, password, name });

    console.log(response.data);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "./home.html"; // Redireciona para a página de login
  } catch (error) {
    console.error(error);
    alert("Erro ao realizar cadastro.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", signup);
});
