![ESTUDANTINDER](https://raw.githubusercontent.com/Estudantinder/estudantinder-mobile/main/.github/README.png)

# Estudantinder Web App

O Estudantinder lida com a procura e encontro de outros alunos, de forma a desenvolver cada vez mais sua autonomia nos estudos. Veja o [site oficial do Estudantinder](https://estudantinder.com.br) para mais informações

## Formas de usar

### Site

Simplesmente acesse o site https://estudantinder.com.br por onde você achar melhor, pode ser pelo celular, notebook, desktop ou até mesmo pela TV!

## Instalação

Você vai precisar de algumas ferramentas para rodar o projeto localmente. Caso queira só acessar o site, veja o tópico [Formas de Usar](#formas-de-usar)

### GIT

- Instale o git em sua máquina: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Com o git instalado na sua máquina, clone o repositório usando o botão **Code** em https://github.com/Cauaspinheiro/estudantinder-web

### NodeJS

- Baixe a versão LTS do node em <https://nodejs.org/en/>
- Para testar se o node está instalado na sua maquina, rode o seguinte comando `node -v`. Deverá aparecer a versão do NodeJS

### Yarn

- Baixe a versão mais nova do yarn em <https://classic.yarnpkg.com/en/docs/install>
- Para testar se o yarn está instalado na sua maquina, rode o seguinte comando `yarn -v`. Deverá aparecer a versão do Yarn

### Instalação dos pacotes

- Dentro na pasta do projeto, rode o seguinte comando: `yarn`

### Criar estilização de desenvolvimento

- Dentro da pasta do projeto, rode o seguinte comando: `yarn dev`

### Abrindo o arquivo index.html

- Abra o arquivo src/index.html no seu navegador favorito

---

**Pronto!** Você já pode começar a testar o aplicativo, vá para a aba [Scripts](#scripts) para ver quais scripts estão disponíveis para uso

## Scripts

Todos esses scripts pode ser rodados na sua máquina usando o yarn

Os parâmetros dos scripts serão representados com um prefixo `$`

### dev

```shell script
yarn dev
```

Cria o arquivo src/styles.css para criar toda a estilização do tailwindCSS, use esse comando somente no caso de modificação do arquivo tailwind.config.js

### build

```shell script
yarn build
```

Cria o arquivo src/styles.css para criar toda a estilização **usada** no arquivo src/index.html

**Depois de rodar o script**: Copia todos os arquivos da pasta src para a pasta public

## Ferramentas utilizadas

Você pode ver todas as dependências do projeto no seguinte link: https://github.com/Cauaspinheiro/estudantinder-web/network/dependencies

## Aplicativo Mobile

Você pode ver o aplicativo mobile da aplicação no seguinte repositório: https://github.com/Estudantinder/estudantinder-mobile

## Rest API (Backend)

Você pode ver o backend da aplicação no seguinte repositório: https://github.com/Estudantinder/estudantinder-api
