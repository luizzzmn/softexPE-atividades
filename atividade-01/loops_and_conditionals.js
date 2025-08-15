
let alunos = ["João", "Maria", "Pedro", "Ana"];
let nota1Aluno = 8.5;
let notaA2luno = 7.0;

let media = (nota1Aluno + notaA2luno) / 2;

if (media >= 7) {
    console.log(`Aprovado com média ${media}`);
} else {
    console.log(`Reprovado com média ${media}`);
}

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno ${i + 1}: ${alunos[i]}`);
}

while (alunos.length > 0) {
    let alunoRemovido = alunos.pop();
    console.log(`Aluno removido: ${alunoRemovido}`);
}
