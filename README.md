# Money Oracle

Projeto desenvolvido para analisar cotações atuais de moedas e ações com base nos dados da [HG Finance](https://hgbrasil.com/status/finance).

## Setup Local

Para startar o projeto localmente, precisa ser realizado o clone do projeto e instalação de dependências usando:

`npm install`

Para acesso da API de cotações, recomendo gerar uma [nova key](https://console.hgbrasil.com/documentation/finance#autenticacao-e-chave), pois as requisições diárias são limitadas e após atingido o limite, deverá ser criada uma nova key.

Todas URLs externas devem ficar em um `.env`.

Por fim, para iniciar o projeto bastar executar: `npm start`.
