# Project

Este projeto utiliza Playwright com Javascript para testes automatizados e Allure para a geração de relatórios.

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando Testes](#executando-testes)
- [GitHub Actions](#github-actions)

## Visão Geral

Este projeto é configurado para executar testes automatizados usando Playwright e gerar relatórios com Allure. É ideal para validar a funcionalidade de uma aplicação web.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados. Você pode verificar se tem o Node.js e o npm instalados e suas versões com os seguintes comandos:

```bash
node -v
npm -v
```

## Instalação

Caso não tenha node instalado previamente, acesse: https://nodejs.org/en/download/package-manager

npm install
npx playwright install

## Executando Testes

O package.json contém os seguintes scripts que podem ser utilizados:

npm test: Executa os testes automatizados com Playwright.

npm run allure:report: Executa os testes e gera um relatório com Allure.

## Github Actions

O projeto está configurado para rodar testes automaticamente usando GitHub Actions. O workflow está definido em .github/workflows/playwright.yml e executa os testes em um ambiente Ubuntu.