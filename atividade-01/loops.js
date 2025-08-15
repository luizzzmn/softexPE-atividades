// atividade-01/loops.js
// Exemplo de uso de loops em JavaScript
let alunos = ["João", "Maria", "Pedro", "Ana"];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno ${i + 1}: ${alunos[i]}`);
}

while (alunos.length > 0) {
    let alunoRemovido = alunos.pop();
    console.log(`Aluno removido: ${alunoRemovido}`);
}
