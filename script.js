// Funções de Adicionar
  document.getElementById("adicionarAlunoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeAluno").value;
    const idade = parseInt(document.getElementById("idadeAluno").value);
    await adicionarAluno(nome, idade);
    fetchAlunos();
    document.getElementById("nomeAluno").value = "";
    document.getElementById("idadeAluno").value = "";
  });
  async function adicionarAluno(nome, idade) {
    const response = await fetch("http://localhost:3000/alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, idade }), // Dados enviados ao backend
    });
  
    if (!response.ok) {
      console.error("Erro ao adicionar aluno:", response.statusText);
    }
  
    return response.json();
  }
  
  document.getElementById("adicionarProfessorForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeProfessor").value;
    const materia = document.getElementById("materiaProfessor").value;
    await adicionarProfessor(nome, materia);
    fetchProfessores();
    document.getElementById("nomeProfessor").value = "";
    document.getElementById("materiaProfessor").value = "";
  });
  async function adicionarProfessor(nome, materia) {
    const response = await fetch("http://localhost:3000/professores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, materia }),
    });
    return response.json();
  }

  document.getElementById("adicionarDisciplinaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeDisciplina").value;
    const professorId = parseInt(document.getElementById("idProfessorDisciplina").value);
    await adicionarDisciplina(nome, professorId);
    fetchDisciplinas();
    document.getElementById("nomeDisciplina").value = "";
    document.getElementById("idProfessorDisciplina").value = "";
  });
  async function adicionarDisciplina(nome, professorId) {
    const response = await fetch("http://localhost:3000/disciplinas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, professorId }), // Dados enviados ao backend
    });
  
    if (!response.ok) {
      console.error("Erro ao adicionar disciplina:", response.statusText);
    }
  
    return response.json();
  }
  
  document.getElementById("adicionarBoletimForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const alunoId = parseInt(document.getElementById("idAlunoBoletim").value);
    const disciplinaId = parseInt(document.getElementById("idDisciplinaBoletim").value);
    const nota = parseFloat(document.getElementById("notaBoletim").value);
    await adicionarBoletim(alunoId, disciplinaId, nota);
    fetchBoletins();
    document.getElementById("idAlunoBoletim").value = "";
    document.getElementById("idDisciplinaBoletim").value = "";
    document.getElementById("notaBoletim").value = "";
  });
  async function adicionarBoletim(alunoId, disciplinaId, nota) {
    const response = await fetch("http://localhost:3000/boletins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alunoId, disciplinaId, nota }),
    });
    return response.json();
  }

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
    document.getElementById("nomeAluno").value = "";
    document.getElementById("idadeAluno").value = "";
  });
  async function atualizarAluno(id, nome, idade) {
    const response = await fetch(`http://localhost:3000/alunos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, idade }),
    });
    return response.json();
  }

  document.getElementById("atualizarProfessorForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idProfessorAtualizar").value);
    const nome = document.getElementById("nomeAlunoAtualizar").value;
    const materia = document.getElementById("materiaProfessorAtualizar").value;
    await atualizarProfessor(id, nome, materia);
    fetchProfessores();
    document.getElementById("nomeProfessor").value = "";
    document.getElementById("materiaProfessor").value = "";
  });
  async function atualizarProfessor(id, nome, materia) {
    const response = await fetch(`http://localhost:3000/professores/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, materia }),
    });
    return response.json();
  }
  
  document.getElementById("atualizarDisciplinaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idDisciplinaAtualizar").value);
    const nome = document.getElementById("nomeDisciplinaAtualizar").value;
    const professorId = document.getElementById("idProfessorDisciplinaAtualizar").value
      ? parseInt(document.getElementById("idProfessorDisciplinaAtualizar").value)
      : undefined;
    await atualizarDisciplina(id, nome, professorId);
    fetchDisciplinas();
    document.getElementById("nomeDisciplina").value = "";
    document.getElementById("idProfessorDisciplina").value = "";
  });
  async function atualizarDisciplina(id, nome, professorId) {
    const response = await fetch(`http://localhost:3000/disciplinas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, professorId }),
    });
    return response.json();
  }

  document.getElementById("atualizarBoletimForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idBoletimAtualizar").value);
    const alunoId = document.getElementById("idAlunoBoletimAtualizar").value
    ? parseInt(document.getElementById("idAlunoBoletimAtualizar").value)
    : undefined;
    const disciplinaId = document.getElementById("idDisciplinaBoletimAtualizar").value
    ? parseInt(document.getElementById("idDisciplinaBoletimAtualizar").value)
    : undefined;
    const nota = document.getElementById("notaBoletimAtualizar").value
    ? parseFloat(document.getElementById("notaBoletimAtualizar").value)
    : undefined;
    await atualizarBoletim(id, alunoId, disciplinaId, nota);
    fetchBoletins();
    document.getElementById("idAlunoBoletim").value = "";
    document.getElementById("idDisciplinaBoletim").value = "";
    document.getElementById("notaBoletim").value = "";
  });
  async function atualizarBoletim(id, alunoId, disciplinaId, nota) {
    const response = await fetch(`http://localhost:3000/boletins/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alunoId, disciplinaId, nota }),
    });
    return response.json();
  }
  
  // Funções de Remover
  document.getElementById("removerAlunoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idAlunoRemover").value);
    await deletarAluno(id);
    fetchAlunos();
    document.getElementById("idAlunoRemover").value = "";
  });
  async function deletarAluno(id) {
    const response = await fetch(`http://localhost:3000/alunos/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }

  document.getElementById("removerProfessorForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idProfessorRemover").value);
    await deletarProfessor(id);
    fetchProfessores();
    document.getElementById("idProfessorRemover").value = "";
  });
  async function deletarProfessor(id) {
    const response = await fetch(`http://localhost:3000/professores/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
  
  document.getElementById("removerDisciplinaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idDisciplinaRemover").value);
    await deletarDisciplina(id);
    fetchDisciplinas();
    document.getElementById("idDisciplinaRemover").value = "";
  });
  async function deletarDisciplina(id) {
    const response = await fetch(`http://localhost:3000/disciplinas/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }

  document.getElementById("removerBoletimForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("idBoletimRemover").value);
    await deletarBoletim(id);
    fetchBoletins();
    document.getElementById("idBoletimRemover").value = "";
  });
  async function deletarBoletim(id) {
    const response = await fetch(`http://localhost:3000/boletins/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
  
  // Funções para listar
  async function fetchAlunos() {
    const response = await fetch("http://localhost:3000/alunos");
    const alunos = await response.json();
    const list = document.getElementById("alunos");
    list.innerHTML = alunos
      .map((aluno) => `<li>${aluno.id} - ${aluno.nome} - ${aluno.idade} anos</li>`)
      .join("");
  }

  async function fetchProfessores() {
    const response = await fetch("http://localhost:3000/professores");
    const professores = await response.json();
    const list = document.getElementById("professores");
    list.innerHTML = professores
      .map((professor) => `<li>${professor.id} - ${professor.nome} - Matéria: ${professor.materia}</li>`)
      .join("");
  }
  
  async function fetchDisciplinas() {
    const response = await fetch("http://localhost:3000/disciplinas");
    const disciplinas = await response.json();
    const list = document.getElementById("disciplinas");
    list.innerHTML = disciplinas
      .map((disciplina) => `<li>${disciplina.id} - ${disciplina.nome} - Professor: ${disciplina.professor.nome}</li>`)
      .join("");
  }

  async function fetchBoletins() {
    const response = await fetch("http://localhost:3000/boletins");
    const boletins = await response.json();
    const list = document.getElementById("boletins");
    list.innerHTML = boletins
      .map(
        (boletim) =>
          `<li>ID: ${boletim.id} - Aluno: ${boletim.aluno.nome} - Disciplina: ${boletim.disciplina.nome} - Nota: ${boletim.nota}</li>`
      )
      .join("");
  }
  