# FlaskReactConcurrency

Este é o projeto **FlaskReactConcurrency**, desenvolvido para simular um ambiente de concorrência visual onde múltiplos usuários podem visualizar e interagir com o movimento de um quadrado em tempo real. O backend é implementado em Flask, com comunicação via WebSocket, e o frontend é desenvolvido em React, proporcionando uma interface interativa.

## Descrição do Projeto

O objetivo deste projeto é aplicar conceitos de concorrência em uma aplicação visual, onde apenas um usuário pode mover o quadrado na tela por vez, enquanto os demais observam o movimento em tempo real. Esse controle é gerenciado com travas e semáforos no backend para garantir que apenas um usuário por vez manipule o quadrado.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

## Instalação

### 1. Clone o repositório

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/YuriPierriV/flask-react-concurrency.git
cd flask-react-concurrency

Autores

Este projeto foi desenvolvido por:

    Yuri Pierri - GitHub
    Ednardo Luz - GitHub
