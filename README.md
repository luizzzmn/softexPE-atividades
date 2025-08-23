
-----

# Atividade 02 - Funções

### 1\. verificarParImpar(numero)

Essa função serve para descobrir se um número é par ou ímpar. Bem simples.

**Como usar:**
Você passa um número para ela, e ela retorna um texto dizendo se ele é "Par" ou "Ímpar".

```javascript
// Exemplo com número par
verificarParImpar(10); // Retorna: "O número 10 é Par."

// Exemplo com número ímpar
verificarParImpar(7); // Retorna: "O número 7 é Ímpar."
```

-----

### 2\. calcularFatorial(numero)

Essa calcula o fatorial de um número. Por exemplo, o fatorial de 5 é `5 * 4 * 3 * 2 * 1`, que dá 120.

**Como usar:**
Ela recebe um número e devolve o resultado. Se você passar o número 0, ela retorna 1. Se mandar um número negativo, ela avisa que não dá pra calcular.

```javascript
calcularFatorial(5); // Retorna: 120

calcularFatorial(0); // Retorna: 1

calcularFatorial(-3); // Retorna: "Erro: Fatorial não é definido para números negativos."
```

-----

### 3\. encontrarMaiorNumero(listaDeNumeros)

Use esta função para achar o maior número dentro de um array (uma lista).

**Como usar:**
Você entrega uma lista de números para ela, e ela te devolve qual é o maior de todos. Se a lista estiver vazia, ela te avisa.

```javascript
const numeros = [15, 7, 99, 42, 8, 23];

encontrarMaiorNumero(numeros); // Retorna: 99

encontrarMaiorNumero([]); // Retorna: "O array está vazio."
```
