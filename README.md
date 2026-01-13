
# Teste Técnico - Lune UI Component Library

## 🎯 Objetivo

Bem-vindo(a) ao desafio técnico da Lune UI! Este teste vai avaliar sua habilidade de domar uma biblioteca de componentes UI selvagem. Sua missão, caso decida aceitá-la, é: configurar o ambiente de desenvolvimento, buildar o projeto sem quebrar nada (promete?) e integrá-lo em uma aplicação de exemplo. Parece fácil? Spoiler: é mesmo! 😉

## 📋 Pré-requisitos

> [!IMPORTANT]
> Antes de começar esta aventura épica, certifique-se de ter no seu arsenal:
> - [Node.js](https://nodejs.org/en/) (versão 18 ou superior - sim, aquela mesma versão que você jurou atualizar mas nunca atualizou)
> - Um gerenciador de pacotes (npm, yarn ou pnpm - escolha seu veneno favorito)

A biblioteca Lune UI não é exigente, mas tem alguns amigos especiais:
- [Sass](https://www.npmjs.com/package/sass) - `v1.94`
- [TypeScript](https://www.npmjs.com/package/typescript) - `v5.9`
- [React](https://www.npmjs.com/package/react) - `v19.2`
- [React DOM](https://www.npmjs.com/package/react-dom) - `v19.2`

## 🚀 Instruções de Instalação

### 1. Clone o Repositório (a.k.a. Baixe o Código Mágico)

```bash
git clone <repository-url>
cd luneui
```

### 2. Instale as Dependências

```bash
npm install
```

*Hora do cafezinho enquanto o npm faz a mágica dele... ☕*

### 3. Build do Projeto (a.k.a. Transformando Código em Arte)

Agora vem a parte emocionante! Para compilar a biblioteca e ver a mágica acontecer, execute:

```bash
npm run build:pkg
```

Este comando fará uma série de mágicas nos bastidores:
- ✨ Compilar os componentes TypeScript/React (transformando seu código em JavaScript puro)
- 🎨 Processar os arquivos SCSS (porque CSS vanilla é coisa do passado)
- 📝 Gerar os tipos TypeScript (para que o IntelliSense seja seu melhor amigo)
- 📦 Criar os arquivos de distribuição na pasta `dist/` (aquela pastinha linda que aparece do nada)

### 4. Link Local com npm link (o Truque do Desenvolvedor Esperto)

Para testar a biblioteca localmente sem ter que publicar no npm e descobrir que quebrou tudo depois, use o comando `npm link`:

```bash
# No diretório do luneui
npm link
```

### 5. Conecte a Biblioteca ao Projeto de Exemplo (Agora as Coisas Ficam Interessantes)

```bash
# Navegue até o projeto de exemplo
cd ../luneui-example

# Instale as dependências do projeto de exemplo
npm install

# Linke a biblioteca luneui
npm link luneui
```

> [!TIP]
> **Dica de Ouro:** Sempre que fizer alterações no código da biblioteca, execute `npm run build:pkg` novamente para recompilar. Esquecer disso e ficar 30 minutos se perguntando por que as mudanças não aparecem é um clássico do desenvolvimento. Não seja essa pessoa! 😅

### 6. Execute o Projeto de Exemplo (Momento da Verdade)

```bash
npm run dev
```

*Se tudo deu certo, você deveria ver algo bonito na tela. Se não... bem, é por isso que existe o Stack Overflow! 🤓*

## ⚙️ Setup no Projeto

Crie um arquivo SCSS global no seu projeto (ex: `src/boniteza.scss`) para configurar os estilos padrão e fontes:

```scss
@use 'luneui/boniteza' as *;
@include setup((
    // Define paths for your fonts
    fontRegular: '/fonts/Quicksand-Regular.ttf',
    fontBold: '/fonts/Quicksand-Bold.ttf'
));
```

### Personalização de Estilos (Porque Você é Único ❄️)

Você pode sobrescrever as variáveis CSS padrão para deixar tudo com a sua cara:

```scss
html body {
    // Scrollbars
    --luneui-scrollbar-bg: var(--luneui-color-primary-60);
    --luneui-scrollbar-fg: var(--luneui-color-primary-50);

    // Override border-radius
    --luneui-sm-radius: 2px;
    --luneui-md-radius: 5px;
    --luneui-lg-radius: 10px;
    --luneui-xl-radius: 15px;
}
```

## 🎨 Usando os Componentes

Agora vem a parte divertida! Importe e utilize os componentes da biblioteca em seu código React:

```tsx
import { Button } from 'luneui/ds'

function App() {
  return (
    <div>
      <Button theme="secondary">Este botão é secundário</Button>
    </div>
  )
}
```

## 🛠️ Scripts Disponíveis (Seus Novos Melhores Amigos)

```bash
npm run build:pkg    # Compila a biblioteca (use e abuse!)
npm run lint         # Verifica o código com ESLint (encontra aquelas vírgulas perdidas)
```

## 🆘 Troubleshooting (Quando as Coisas Dão Errado)

### Erro ao linkar a biblioteca

Se encontrar erros ao usar `npm link` (acontece com os melhores), tente este ritual de limpeza:

```bash
# Deslinkar (apagar o passado)
npm unlink luneui

# Limpar cache do npm (resetar o universo)
npm cache clean --force

# Tentar novamente (porque desistir não é uma opção)
npm link
```

### Alterações não refletem no projeto de exemplo

Essa é clássica! Lembre-se de **sempre** executar `npm run build:pkg` na biblioteca após fazer alterações. Gravar isso na memória agora vai te poupar horas de debugging depois. Confia! 🙏

## 📁 Estrutura do Projeto (Um Tour Rápido)

```
luneui/
├── src/              # Código-fonte (onde a mágica acontece)
│   ├── components/   # Componentes React/Astro/Svelte (as estrelas do show)
│   ├── scss/         # Estilos globais e mixins (deixando tudo bonito)
│   └── utils/        # Utilitários (os heróis não reconhecidos)
├── scripts/          # Scripts de build (a engrenagem da máquina)
├── dist/             # Arquivos compilados (gerados após build, não mexa aqui!)
└── package.json      # Dependências e scripts (o mapa do tesouro)
```
