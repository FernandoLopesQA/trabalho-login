Trabalho da pós - Cadeira Programação para Automação de Testes

Desafio Valendo 2 Pontos na Nota Final

Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

Entrega:
Suba seu código no Github e entregue o link via plataforma do PGATS até o dia 10 de maio às 23:59:59.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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