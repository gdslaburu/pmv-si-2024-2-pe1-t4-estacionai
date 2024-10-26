# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos e Pendentes

A tabela que se segue apresenta os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir que o proprietário cadastre seu estabelecimento | Pedro Augusto | cadastroReserva.html |
|RF-002| Permitir que o proprietário crie e atualize as vagas  | Rayana Eppenstein | cadastrovagas.html |
|RF-003| Permitir que o proprietário visualize as vagas  | Mateus Mendes | --- |
|RF-004| Permitir que o proprietário confirme uma reserva | Pedro Salman | aprovacao.html |
|RF-005| Permitir que o proprietário cancele uma reserva | Pedro Salman | aprovacao.html |
|RF-006| Permitir que o proprietário defina preços por hora, dia, ou mês para as vagas | Mateus Mendes | --- |
|RF-007| Implementar um sistema de login | Pedro Augusto | login.html |
|RF-008| Permitir que o usuário pesquise vagas de estacionamento por local | Matheus Bon | home.html |
|RF-009| Exibir para o usuário as vagas de estacionamento mais próximas a ele |  Matheus Bon | home.html |
|RF-010| Permitir que o usuário reserve uma vaga de estacionamento por hora, dia ou mês |  Matheus Bon | home.html |
|RF-011| Exibir o preço da vaga antes de concluir a reserva |  Matheus Bon | home.html |
|RF-012| Permitir que o usuário cancele uma reserva |  David Gerardo | --- |
|RF-013| Notificar o usuário sobre o status de suas reservas (confirmada, cancelada, etc.) | Matheus Bon | home.html |
|RF-014| Exibir um resumo para o proprietário de quantas vagas foram alocadas diariamente,semanalmente e mensalmente | David Gerardo | --- |
|RF-015| Permitir que os usuários atualizem e visualizem seus perfis | Rayana Eppennstein | MeusDados.html |
|RF-016| Permitir que o proprietário defina um tempo limite de cancelamento | --- | --- |
|RF-017| A aplicação deve permitir que qualquer usuári com ou sem login visualize "Sobre Nós" | Raquel Ribeiro | Sobrenos.html |
|RF-018| Permitir que qualquer usuário com ou sem login visualize "Equipe" | Raquel Ribeiro | fundadores.html |
|RF-019| Permitir que qualquer usuári contate a equipe através de formulário | Rayana Eppenstein | Contatenos.html |
|RF-020| Permitir que qualquer usuário com ou sem login visualize as perguntas frequentes | Raquel Ribeiro | Contatenos.html |


## Descrição das estruturas:

## Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Usuário        | Texto             |Campo para que o usuario possa acessar sua conta|Jose_Alberto                               | 
| Senha          | Texto             |Campo para que o usuario consiga se autenticar no site| Jos2233@                            |


## Usuário Reservar vagas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
|Id              |Número inteiro     |Chave primária única que serve como identificador|1                                         |
|Nome            | Texto             |Nome do usuário                            |Edson                                           | 
|Sobrenome       | Texto             |Sobrenome do usuário                       |Arantes do Nascimento                           |
|CPF             | Texto             |CPF usuário                                |255.137.564-11                        |
|Placa do carro          |Texto            |Placa do carro registrado no site    |RIO-2A18                 |
|Modelo do carro        |Texto            |descrição do modelo do carro do usuário    |VOLKSWAGEN GOL 2020                 |
|Cor        |Texto            |Cor predominante no carro do usuário    |Vermelho                 |
|e-mail     |Texto            |E-mail de registro da conta    |teste_22@gmail.com                |


## Usuário cadastrar vagas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id        | Número inteiro            |Chave primaria única que serve como identificador|2                            | 
|Nome         | Texto             |Nome do estacionamento que ficará visivél para os clientes|Estacionamento - supermercados Guarani|
|CPF/CNPJ         | Texto             |Informação para identificação do fornecedor de vagas|45.222.123/0001-88|
|Quantidade de vagas         |Número inteiro             |Quantidade de vagas diponibilizadas no estacionamento|50|
|E-mail         |Texto             |E-mail de registro da conta|teste_22@gmail.com|





## Usuário cadastrar quantidade de Vagas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome / Razão Social      | Texto            | Identificação de usuário| José Maria | 
|CPF/CNPJ         | Texto             |Informação para identificação do fornecedor de vagas|45.222.123/0001-88|
|Quantidade de vagas         | Número inteiro             |Quantidade de vagas diponibilizadas no estacionamento| 50 |

## Formulário - Fale Conosco 
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome Completo | Texto | Identificação de pessoa física ou jurídica usuário ou não usuário | José Maria / Estacionamento PareAqui | 
|E-mail |Texto |E-mail para contato com pessoa física ou jurídica usuário ou não usuário | teste_22@gmail.com |
| Telefone | Texto | Telefone para contato com o usuário (campo opcional) | +555 11 98888-8888 |
| Assunto | Texto | Motivo do contato do usuário ou não usuário | Texto livre |
|Mensagem  | Texto |Pergunta ou dúvidas do usuário ou não usuário| Texto Livre |

## Meus Dados
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome de Usuário | Texto | Identificação de pessoa física ou jurídica usuário ou não usuário | José Maria / Estacionamento PareAqui | 
|E-mail |Texto |E-mail para contato com pessoa física ou jurídica usuário ou não usuário | teste_22@gmail.com |
|CPF/CNPJ         | Texto             |Informação para identificação do fornecedor de vagas|88.888.888/8888-88|
| Senha          | Texto             |Campo para que o usuario consiga se autenticar no site| Jos2233@ |
| Logradouro com Nº | Texto | Endereço do usuário com número | Rua J, 88 |
| Cidade | Texto | Cidade do usuário pessoa física ou jurídica | São Paulo |
| Estado | Texto | Estado do usuário pessoa física ou jurídica | SP |
| Telefone para Contato | Texto | Telefone para contato com o usuário | +55 11 98888-8888 |
| CEP | Texto | Identificação de local do usuário | 88888-888 |
