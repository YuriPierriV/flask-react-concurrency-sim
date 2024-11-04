# Flask React Concurrency Sim

Projeto desenvolvido para simular cenários de concorrência usando Flask no backend e React no frontend. Este projeto inclui uma API em Flask que se comunica com um frontend em React. O projeto utiliza Docker para containerização, facilitando o setup e a execução em qualquer ambiente.

## Estrutura do Projeto

- **Frontend**: Next.js e React, com suporte a WebSockets (via Socket.IO).
- **Backend**: Flask, com suporte a WebSockets (via Flask-SocketIO) e configuração para comunicação CORS.
- **Containerização**: Docker configurado para fácil deploy e gerenciamento de serviços.

## Pré-requisitos

- **Docker** e **Docker Compose** instalados para execução via container.
- **Node.js** e **npm** para desenvolvimento e testes do frontend (caso necessário).
- **Python 3.8+** caso queira executar o backend fora do container.

## Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/seuusuario/flask-react-concurrency-sim.git
cd flask-react-concurrency-sim
```

### 2. Instale as dependências

Em seguida, instale as dependências do projeto com o npm:

```bash
npm install
```
### 3. Suba os serviços do Docker

O projeto depende de alguns serviços que são configurados e gerenciados via Docker. Para iniciar os serviços, execute:

```bash
npm run services:build
```

### 4. Execute o projeto em modo de desenvolvimento

Agora, para iniciar o servidor de desenvolvimento do Next.js, execute o comando:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3000.

Para acessar a versão de produção, você também pode visitar o seguinte link: https://flask-react-concurrency-sim.vercel.app/


## Autores

Este projeto foi desenvolvido por:

- **Yuri Pierri** - [GitHub](https://github.com/YuriPierriV)
- **Ednardo Luz** - [GitHub](https://github.com/EdLuz111)
