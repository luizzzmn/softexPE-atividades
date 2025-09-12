
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
-----

# Atividade 03 - GameSHub
Este é um projeto de front-end desenvolvido como uma atividade acadêmica, criando uma interface web inspirada em plataformas como o SteamDB. O site permite que os usuários visualizem uma lista de jogos populares e vejam detalhes como preço e número de jogadores.

O projeto foi construído utilizando apenas HTML, CSS e JavaScript puro, com o objetivo de criar uma experiência de "Single Page Application" (SPA), onde a navegação entre as seções ocorre sem a necessidade de recarregar a página.

###  Recursos
Navegação Fluida: Três seções principais (Início, Jogos Populares e Contato) acessíveis através de um menu de navegação, sem recarregamento da página.

Tabela de Jogos Interativa: Uma lista de jogos que, ao serem clicados, revelam mais informações.

Modal de Detalhes: Uma janela pop-up exibe detalhes completos do jogo selecionado, como descrição, preço e estatísticas de jogadores.

Design Responsivo: A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis.

Formulário de Contato: Uma página de contato com um formulário funcional que exibe uma mensagem de sucesso ao ser enviado.

Componentes Modernos: Utiliza ícones e uma tipografia limpa para uma experiência de usuário agradável.

###  Tecnologias Utilizadas
HTML5: Para a estrutura semântica do site.

CSS3: Para estilização customizada, seguindo uma paleta de cores inspirada na Steam.

JavaScript (ES6+): Para toda a interatividade, manipulação do DOM e lógica da aplicação.

Tailwind CSS: Utilizado via CDN para agilizar a criação de layouts responsivos e componentes estilizados.

Feather Icons: Para os ícones vetoriais utilizados na interface.

###  Como Executar o Projeto
Para visualizar e interagir com este projeto em sua máquina local, é recomendado o uso de um servidor local. Isso garante que todos os recursos do JavaScript, como a busca por dados de jogos, funcionem corretamente, o que pode ser bloqueado por políticas de segurança do navegador ao abrir o arquivo index.html diretamente.

A maneira mais simples de fazer isso é com a extensão Live Server no Visual Studio Code.

Ou ainda acesse de forma online: https://softex-pe-atividades-uupf.vercel.app

Clone ou baixe este repositório:

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

Abra a pasta do projeto no Visual Studio Code.

Instale a extensão Live Server (de Ritwick Dey) a partir da aba de Extensões do VS Code.

Com a extensão instalada, clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

O site será aberto automaticamente no seu navegador padrão.

###  Estrutura de Pastas
O projeto está organizado da seguinte forma para manter o código limpo e de fácil manutenção:
```
/GameSHub/
|
|-- index.html          # Arquivo principal da estrutura
|-- /css/
|   |-- style.css       # Estilos customizados
|-- /js/
|   |-- script.js       # Lógica principal da aplicação
|-- /images/
    |-- (suas imagens)  # Imagens dos jogos e de fundo
```

🎨 Personalização
Alterar Jogos: Os dados dos jogos (nome, preço, descrição, etc.) podem ser facilmente modificados.

Mudar Imagens: As imagens dos jogos e o plano de fundo da página inicial podem ser trocados na pasta images/. Lembre-se de atualizar os caminhos nos arquivos correspondentes.

Ajustar Cores: As cores principais do tema estão definidas como variáveis CSS no topo do arquivo css/style.css, facilitando a personalização da paleta de cores.
