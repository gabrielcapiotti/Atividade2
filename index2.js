const api = axios.create({
  baseURL: "http://localhost:3333/",
});

async function login(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário de submeter a página

  try {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    const response = await api.post("login", { email, password });

    console.log(response.data); // Exemplo: Se a API retornar um token, você pode armazená-lo ou manipulá-lo aqui

    // Redirecionar para outra página ou realizar ações após o login
    alert("Login realizado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao realizar login. Verifique suas credenciais.");
  }
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);
