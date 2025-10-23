<div align="center">

# KLibras Website

### Landing Page do Projeto KLibras

[![TypeScript](https://img.shields.io/badge/TypeScript-94%25-3178C6.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.3-007FFF.svg)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Landing page moderna e responsiva para apresentar a plataforma KLibras**

[Características](#características) • [Início Rápido](#início-rápido) • [Estrutura](#estrutura) • [Deploy](#deploy) • [Contribuindo](#contribuindo)

</div>

---

## Visão Geral

O KLibras Website é uma landing page moderna e interativa desenvolvida com React, TypeScript e Material-UI. O site apresenta a plataforma KLibras de forma atraente, destacando suas principais funcionalidades e oferecendo download direto do aplicativo Android.

### Por que este Website?

- **Performance**: Construído com Vite para carregamento ultrarrápido
- **Design Moderno**: Interface limpa e profissional com Material-UI
- **Animações Fluidas**: Efeitos de scroll snap e animações suaves
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **TypeScript**: Código type-safe e mantível

---

## Características

### Interface do Usuário
- **Hero Section**: Apresentação impactante com call-to-action para download
- **Scroll Snap**: Navegação suave entre seções com scroll snap vertical
- **Animações de Texto**: Efeito de blur text para títulos destacados
- **Design Responsivo**: Layout adaptativo para todos os tamanhos de tela

### Seções da Landing Page
- **Apresentação Principal**: Slogan e botão de download do aplicativo
- **Aprenda com Diversão**: Destaque para a experiência interativa
- **Reconhecimento por Câmera**: Apresentação do diferencial tecnológico
- **Aprendizado Flexível**: Benefícios da plataforma
- **Gamificação e Progresso**: Sistema de rankings e pontos
- **Pronto para Começar**: Overview das funcionalidades principais
- **Footer**: Informações de copyright e links

### Experiência do Usuário
- **Navegação Intuitiva**: Header fixo com logo e branding
- **Imagens Ilustrativas**: Assets visuais que complementam o conteúdo
- **Tipografia Personalizada**: Fontes Josefin Sans e Roboto do Google Fonts
- **Cores Vibrantes**: Paleta de cores que reflete a identidade visual

---

## Início Rápido

### Pré-requisitos

- **Node.js 18+** ou superior
- **npm** ou **yarn** ou **pnpm**

### Instalação

#### 1. Clone o Repositório

```bash
git clone https://github.com/KLibras/website.git
cd website
```

#### 2. Instale as Dependências

```bash
# Usando npm
npm install

# Usando yarn
yarn install

# Usando pnpm
pnpm install
```

#### 3. Execute o Servidor de Desenvolvimento

```bash
# Usando npm
npm run dev

# Usando yarn
yarn dev

# Usando pnpm
pnpm dev
```

O site estará disponível em `http://localhost:5173`

#### 4. Build para Produção

```bash
# Usando npm
npm run build

# Usando yarn
yarn build

# Usando pnpm
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`

---

## Estrutura do Projeto

```
website/
├── public/                    # Assets estáticos
│   ├── logo.svg              # Logo do KLibras
│   ├── screen.png            # Screenshot do app
│   ├── download.svg          # Ícone de download
│   ├── guy_dancing.png       # Ilustrações
│   ├── guy_chair.png
│   ├── girl_phone.png
│   ├── girl_chilling2.png
│   └── ...                   # Outros assets
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── HeaderBar.tsx    # Barra de navegação
│   │   ├── Footer.tsx       # Rodapé
│   │   └── BlurText.tsx     # Componente de animação de texto
│   ├── pages/               # Páginas da aplicação
│   │   └── Home.tsx         # Página principal (landing page)
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   ├── theme.tsx            # Configuração do tema MUI
│   └── App.css              # Estilos globais
├── index.html               # Template HTML
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração TypeScript
├── tsconfig.app.json        # Config TS para app
├── tsconfig.node.json       # Config TS para Node
├── vite.config.ts           # Configuração Vite
└── eslint.config.js         # Configuração ESLint
```

---

## Stack Tecnológico

| Componente | Tecnologia | Versão |
|-----------|-----------|--------|
| **Framework** | React | 19.1.1 |
| **Linguagem** | TypeScript | 5.8.3 |
| **Build Tool** | Vite | 7.1.2 |
| **UI Library** | Material-UI | 7.3.2 |
| **Roteamento** | React Router DOM | 6.18.0 |
| **Animações** | Motion | 12.23.16 |
| **Ícones** | MUI Icons Material | 7.3.2 |
| **Estilização** | Emotion | 11.14.0 |
| **Linting** | ESLint | 9.33.0 |

---

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Compila TypeScript e faz build de produção

# Preview
npm run preview      # Preview do build de produção


## Contribuindo

Contribuições são bem-vindas! Por favor, siga estes passos:

1. Faça fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-secao`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova seção'`)
4. Push para a branch (`git push origin feature/nova-secao`)
5. Abra um Pull Request

### Diretrizes de Desenvolvimento

- Use TypeScript para type safety
- Siga as convenções do Material-UI
- Mantenha componentes pequenos e reutilizáveis
- Teste responsividade em diferentes tamanhos de tela
- Execute o linter antes de commitar: `npm run lint`

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## Suporte

- **Issues**: [GitHub Issues](https://github.com/KLibras/website/issues)
- **Discussões**: [GitHub Discussions](https://github.com/KLibras/website/discussions)

---

<div align="center">

**Landing page do projeto KLibras - Democratizando o acesso ao aprendizado de Libras**

[Reportar Bug](https://github.com/KLibras/website/issues) • [Solicitar Funcionalidade](https://github.com/KLibras/website/issues)

</div>