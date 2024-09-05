# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1-Maximiliano Augusto tem 40 anos, atualmente é o analista de sistemas da Infracon Engenharia, uma empresa que atua no ramo na construção civil e vem crescendo cada dia mais. 
Graças a esse crescimento o número de pessoas trabalhando no escritório central teve um aumento significativo, e como consequência a demanda por vagas na garagem foi ficando cada vez maior. 
Max nem sempre vem todos os dias a empresa, porém sua presença é muito importante, portanto, ele tem a necessidade de possuir uma vaga exclusiva para estacionar seu carro, dada a situação, o ideal para ele e para a garagem do prédio seria um sistema em que as pessoas conseguissem reservar sua vaga, e informar a disponibilidade dela, facilitando a vida de todos no ambiente e evitando situações constrangedoras. 

2- Ana Luiza tem 32 anos, trabalha em uma agência de marketing e faz questão de chegar pontualmente em suas reuniões. Ela mora em um bairro movimentado e trabalha em uma área com poucas opções de estacionamento. A rotina diária de encontrar uma vaga próxima ao escritório é um desafio, especialmente em horários de pico. 
Ana valoriza a conveniência e a economia de tempo. Ela quer um aplicativo que a ajude a encontrar vagas de estacionamento rapidamente, sem precisar ficar circulando ou arriscando multas. Segurança e praticidade são essenciais para ela. 

3-João Pedro é um empresário de 45 anos, e um dos seus maiores empreendimento corresponde a um shopping no centro da cidade de São Paulo. 
Graças a sua localização privilegiada, a estrutura possui um grande fluxo de pessoas basicamente todos os dias, e apesar de ser muito lucrativo para o local, esse acontecimento vem gerando grandes problemas quando o assunto é vagas para estacionar. 
Os clientes do shopping saem de casa sem saber basicamente se vão conseguir colocar seu carro em um local seguro dentro do shopping, ou vão correr o risco de estacionar fora do estabelecimento, fazendo com que eles repensem se realmente é necessário ir até o ambiente comercial. 
Tendo essa situação o ideal para João seria a implementação de uma plataforma em que os clientes conseguissem agenda as vagas para estacionar com antecedência, evitando situações desagradáveis e sempre garantindo a praticidade e a tranquilidade para que eles possam se deslocar para o shopping. 

4- Roberto Carlos é gerente de um estacionamento no entorno da Raja Gabaglia, uma das avenidas mais movimentadas da Grande Belo Horizonte. 
Esse ponto específico da cidade é referência em carros e em qualquer coisa na area de mecânica automotiva, além de ser um grande polo empresarial também, por esses motivos o movimento na area é muito grande e Roberto muitas vezes perde o controle na administração do seu negócio. 
Para maximizar a ocupação de vagas no estacionamento e minimizar o tempo ocioso evitando o conflito entre os clientes, Roberto está em busca de uma ferramenta que simplifique a administração diária do estacionamento com um monitoramento de vagas e controle de reservas. 

5- Katarina Valentina tem 43 anos e é dona de um mercado em um bairro residencial na cidade de Belo Horizonte, o local conta com um estacionamento de porte médio com vaga para cerca de 23 veículos. 
O comercio de Katarina costuma ser bem movimentado por ser unanimidade na região, e graças a esse acontecimento muitas vezes a quantidade de vagas no seu estacionamento não é suficiente para suportar a carga de cliente em períodos de movimento maior, portanto para resolver essa situação ela busca uma solução para que os clientes consigam reservar suas vagas no estacionamento de acordo com o tempo que irão ficar no supermercado, fazendo com que seu empreendimento atenda a maior quantidade de clientes possível em um determinado dia. 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO...| QUERO/PRECISO ...  |PARA ...|
|--------------------|------------------------------------|----------------------------------------|
|Maximiliano Augusto | Reservar minha vaga no estacionamento da empresa               | Otimizar melhor o meu tempo|
|Ana Luiza       |Verificar as vagas de estacionamento proximas ao meu local de trabalho|Conseguir estacionar meu carro em um local seguro e sem perder muito tempo  |
|João Pedro       |Organizar a distrubuição de vagas no estacionamento do meu shopping| evitar a perca de tempo dos cliente que buscam visitar meu estabelecimento |
|Roberto Carlos      |Maximizar a ocupação de vagas no meu estacionamento|Melhorar a gestão do meu empreendimento|
|Katarina Valentina      |Organizar o estacionamento no meu mercado|Proporcionar mais conforto aos meus clientes|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o proprietário cadastre seu estabelecimento | ALTA |
|RF-002| Permitir que o proprietário crie e atualize as vagas  | ALTA |
|RF-003| Permitir que o proprietário visualize as vagas  | ALTA |
|RF-004| Permitir que o proprietário confirme uma reserva | ALTA |
|RF-005| Permitir que o proprietário cancele uma reserva | ALTA |
|RF-006| Permitir que o proprietário defina preços por hora, dia, ou mês para as vagas | ALTA |
|RF-007| Implementar um sistema de login | ALTA |
|RF-008| Permitir que o usuário pesquise vagas de estacionamento por local | ALTA |
|RF-009| Exibir para o usuário as vagas de estacionamento mais próximas a ele | ALTA |
|RF-010| Permitir que o usuário reserve uma vaga de estacionamento por hora, dia ou mês | ALTA |
|RF-011| Exibir o preço da vaga antes de concluir a reserva | ALTA |
|RF-012| Permitir que o usuário cancele uma reserva, com antecedência de até 1h | ALTA |
|RF-013| Notificar o usuário sobre o status de suas reservas (confirmada, cancelada, etc.) | ALTA |
|RF-014| Exibir um resumo para o proprietário de quantas vagas foram alocadas diariamente,semanalmente e mensalmente | MÉDIA |
|RF-015| Permitir que os usuários atualizem e visualizem seus perfis | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser responsivo para rodar em um dispositivos móvel | ALTA |
|RNF-002| A interface do usuário deve ser intuitiva e fácil de usar | ALTA |
|RNF-003| O banco de dados utilizado deve ser JSON-Server | ALTA |
|RNF-004| Para o serviço de geolocalização deve ser usada a API Places do Google | ALTA |
|RNF-005| Para estrutura do site utilizaremos HTML | ALTA |
|RNF-006| Para personalização do site utilizaremos CSS | ALTA |
|RNF-007| Para lógica do site utilizaremos Javascript | ALTA |
|RNF-008| As senhas de todos os usuários devem ser criptografadas com crypto-js | ALTA |
|RNF-009| Escalabilidade, o sistema deve ser capaz de lidar com um grande número de usuários simultâneos sem afetar o desempenho |MÉDIA|
|RNF-010| Segurança dos Dados práticas de segurança de dados| ALTA|
|RNF-011| Disponibilidade 99,9% do tempo, com exceção de manutenções programadas |ALTA|
|RNF-012| Compatibilidade com os principais navegadores (Chrome, Firefox, Safari, Edge)|ALTA|
|RNF-013| Conformidade com Lei Geral de Proteção de Dados garantindo o consentimento dos usuários para coleta de dados e oferecendo a opção de remover seus dados do sistema |ALTA|





Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não será possível efetuar pagamentos pela plataforma  |
|04| A plataforma só pode ser acessada via navegadores, não sendo permitido o desenvolvimento de um aplicativo nativo|
|05| A plataforma só será compatível com sistemas de pagamento externos, sem integração direta |
|06| O sistema poderá operar somente em língua portuguesa |
|08| O uso de APIs externas, seguindo os limites de chamadas gratuitas da API, sem versões pagas |
|09| O banco de dados deverá ser implementado localmente, como funcionaria |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
