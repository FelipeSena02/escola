// Funções de Adicionar
document.getElementById("adicionarAlunoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeAluno").value;
    const idade = parseInt(document.getElementById("idadeAluno").value);
    await adicionarAluno(nome, idade);
    fetchAlunos();
  });
  
  document.getElementById("adicionarDisciplinaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeDisciplina").value;
    const professorId = parseInt(document.getElementById("idProfessorDisciplina").value);
    await adicionarDisciplina(nome, professorId);
    fetchDisciplinas();
  });
  
  // Funções de Atualizar
  document.getElementById("atualizarAlunoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idAlunoAtualizar").value);
    const nome = document.getElementById("nomeAlunoAtualizar").value;
    const idade = document.getElementById("idadeAlunoAtualizar").value
      ? parseInt(document.getElementById("idadeAlunoAtualizar").value)
      : undefined;
    await atualizarAluno(id, nome, idade);
    fetchAlunos();
  });
  
  document.getElementById("atualizarDisciplinaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idDisciplinaAtualizar").value);
    const nome = document.getElementById("nomeDisciplinaAtualizar").value;
    const professorId = document.getElementById("idProfessorDisciplinaAtualizar").value
      ? parseInt(document.getElementById("idProfessorDisciplinaAtualizar").value)
      : undefined;
    await atualizarDisciplina(id, nome, professorId);
    fetchDisciplinas();
  });
  
  // Funções de Remover
  document.getElementById("removerAlunoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idAlunoRemover").value);
    await deletarAluno(id);
    fetchAlunos();
  });
  
  document.getElementById("removerDisciplinaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idDisciplinaRemover").value);
    await deletarDisciplina(id);
    fetchDisciplinas();
  });
  
  // Funções para listar Alunos e Disciplinas
  async function fetchAlunos() {
    const response = await fetch("http://localhost:3000/alunos");
    const alunos = await response.json();
    const list = document.getElementById("alunos");
    list.innerHTML = alunos
      .map((aluno) => `<li>${aluno.nome} - ${aluno.idade} anos</li>`)
      .join("");
  }
  
  async function fetchDisciplinas() {
    const response = await fetch("http://localhost:3000/disciplinas");
    const disciplinas = await response.json();
    const list = document.getElementById("disciplinas");
    list.innerHTML = disciplinas
      .map((disciplina) => `<li>${disciplina.nome} - Professor: ${disciplina.professor.nome}</li>`)
      .join("");
  }
  