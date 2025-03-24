class Aluno{
    nome = '';
    nota = '';

    constructor(nomeAluno, notaAluno){
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const alunos = [
    new Aluno('Maria', 10),
    new Aluno('Pedro', 4),
    new Aluno('Ana', 7)
]; 

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados); 