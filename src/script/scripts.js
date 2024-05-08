// Função para cadastrar um novo funcionário
function cadastrarFuncionario(nome, email, senha, cargo, setor) {
  // Verifica se o armazenamento local contém dados de funcionários
  let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

  // Cria um novo funcionário
  let novoFuncionario = {
    nome: nome,
    email: email,
    cpf: cpf,
    senha: senha,
    cargo: cargo,
    setor: setor
  };

  // Adiciona o novo funcionário à lista
  funcionarios.push(novoFuncionario);

  // Salva a lista atualizada no armazenamento local
  localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

  console.log('Funcionário cadastrado com sucesso!');
}

// Função para realizar o login
function login(email, senha) {
  // Carrega os funcionários do armazenamento local
  let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

  // Procura o funcionário com o email fornecido
  let funcionario = funcionarios.find(f => f.email === email);

  // Verifica se o funcionário foi encontrado e se a senha está correta
  if (funcionario && funcionario.senha === senha) {
    console.log('Login bem-sucedido!');
  } else {
    console.log('Email ou senha incorretos.');
  }
}

