const api = axios.create({
  baseURL: "http://localhost:3333/",
});

async function signup(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário de submeter a página

  try {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    const name = document.getElementById("floatingName").value;

    const response = await api.post("signup", { email, password, name });

    console.log(response.data); // Exemplo: Se a API retornar um objeto com o usuário cadastrado, você pode manipulá-lo aqui

    // Redirecionar para outra página ou realizar ações após o cadastro
    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao realizar o cadastro. Verifique os dados informados.");
  }
}

const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", signup);
