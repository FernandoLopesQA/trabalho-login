# Trabalho da pós - Função de Login com testes unitários
Projeto desenvolvido para a cadeira de Programação para Automação de Testes.

O objetivo do projeto é implementar uma função de login que valida e-mail, senha e status da credencial de um usuário a partir de uma lista de usuários cadastrados.

## Descrição do trabalho solicitado

Desafio Valendo 2 Pontos na Nota Final

* Foram corrigidos alguns pontos de texto do enunciado original para melhorar a leitura.
* * Pontos ajustados: boleano -> booleano, usuarios -> usuários, função de para -> função para

Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (booleano, pode ser true ou false). Adicione ao menos um dos usuários como expirado sendo true.

Desafio:
Construa uma função para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuário não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

Entrega:
Suba seu código no Github e entregue o link via plataforma do PGATS até o dia 10 de maio às 23:59:59.

## Pensamento computacional

Decomposição:
- Criar uma lista que armazena usuários com dados de identificação
- Receber os dados de e-mail e senha de um usuário
- Verificar na lista se e-mail do usuário está cadastrado. Caso não esteja, retornar mensagem de credenciais incorretas
- Verificar na lista se e-mail cadastro está expirado. Caso esteja, retornar mensagem de credenciais expiradas
- Verificar na lista se a senha está correta para o usuário do e-mail informado. Caso esteja errada, deve retornar mensagem que a senha está incorreta para aquele e-mail
- Retornar mensagem de login realizado com sucesso para usuário e senha válidos que não esteja expirado com base nos dados da lista

Padrões:
- Verificação de dados

Representação de Dados e Abstração:
- Representação dos Dados: id, nome, email, senha e expirado
- Abstração: email, senha e expirado (Considera somente esses para função e abstrai o resto)

Pensamento Lógico:
- Entradas: 
  + E-mail
  + Senha
- Regras: 
  + Deve verificar se e-mail está cadastrado na lista
  + Se cadastrado, deve verificar se usuário está com cadastro expirado
  + Deve verificar se a senha está correta
- Processamento:
  + Verifica se e-mail está cadastrado na lista
  + Verifica se cadastro do e-mail está expirado
  + Verifica se a senha está correta
- Saídas:
  + Mensagem de login com sucesso para usuários que atenderem as condições exigidas
  + Mensagem de erro para usuário inexistente, expirado ou com senha incorreta

Algoritmo:
  1 - Recebe e-mail e senha do usuário
  2 - Compara os dados recebidos com dados da lista
  3 - Se e-mail informado não estiver na lista, retornar mensagem de credenciais incorretas
  4 - Se e-mail informado estiver na lista, verificar campo expirado. Sendo true, retornar mensagem de credenciais expiradas
  5 - Se e-mail informado estiver na lista e expirado igual a false, verifica se a senha recebida é igual a senha do usuário na lista. Se não for, deve retornar mensagem que a senha está incorreta para aquele e-mail
  6 - Se e-mail estiver cadastrado, não expirado e a senha estiver correta, retornar mensagem de login realizado com sucesso


## Tecnologias utilizadas

- JavaScript
- Node.js
- Mocha
- Mochawesome

## Versões utilizadas

- Mocha: 11.7.5
- Mochawesome: 7.1.4

As dependências de teste estão configuradas como `devDependencies`, pois são utilizadas apenas durante o desenvolvimento e execução dos testes.

## Estrutura do projeto

src/
  login.js
test/
  login.test.js
package.json
README.md


### Funcionalidades

A função de login realiza as seguintes validações:
- Verifica se o e-mail e a senha foram informados.
- Verifica se o e-mail existe na lista de usuários.
- Verifica se a credencial do usuário está expirada.
- Verifica se a senha informada está correta.
- Retorna mensagem de sucesso quando o login é realizado corretamente.

### Cenários de teste

Os testes automatizados cobrem os seguintes cenários:
- Login realizado com sucesso.
- Credencial expirada.
- Usuário/e-mail não encontrado.
- Senha incorreta para usuário existente.
- E-mail não informado.
- Senha não informada.


### Como executar os testes

Os testes são executados com o Mocha e o relatório é gerado com o Mochawesome.

Execute o comando abaixo:
npx mocha - Executa os testes e retorna resultado apenas no terminal sem gerar o report do Mochawesome
npm test - Executa os testes com a geração do report do Mochawesome

### Relatório de testes
Após a execução dos testes, o Mochawesome gera um relatório na pasta:
mochawesome-report/

Essa pasta é gerada automaticamente e não precisa ser enviada para o repositório, já configurado no .gitignore

## Pipeline de CI

Foi criada uma pipeline no GitHub Actions com execução híbrida, configurada no arquivo `.github/workflows/01-hybrid-exec.yaml`.

A pipeline possui os seguintes gatilhos:
- Execução manual pelo `workflow_dispatch`.
- Execução automática por `push` na branch `main`.
- Execução agendada pelo `schedule`, toda sexta-feira à meia-noite.

Durante a execução, a pipeline realiza as seguintes etapas:
- Faz o checkout do repositório.
- Configura o Node.js.
- Instala as dependências com `npm ci`.
- Executa os testes unitários com geração de relatório JUnit.
- Publica o sumário dos testes na execução da pipeline com a action `dorny/test-reporter`.
- Gera o relatório HTML com o Mochawesome.
- Publica o relatório HTML como artefato com a action `actions/upload-artifact`.

Os relatórios gerados na pipeline são:
- Sumário dos testes exibido diretamente na execução do GitHub Actions.
- Artefato `relatorio-mochawesome`, contendo o relatório HTML gerado pelo Mochawesome.
