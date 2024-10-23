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

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

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


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade | Status |
|-------|-------------------------|----|-----|
|RNF-001| O site deve ser responsivo para rodar em um dispositivos móvel | ALTA | Pendente |
|RNF-002| A interface do usuário deve ser intuitiva e fácil de usar | ALTA | Realizado |
|RNF-003| O banco de dados utilizado deve ser JSON-Server | ALTA | Pendente|
|RNF-004| Para o serviço de geolocalização deve ser usada a API Places do Google | ALTA | Pendente |
|RNF-005| Aplicação deve ser desenvolvida em HTML, CSS e Javascript | ALTA | Realizado |
|RNF-006| As senhas de todos os usuários devem ser criptografadas com crypto-js | ALTA | Pendente |
|RNF-007| Escalabilidade, o sistema deve ser capaz de lidar com um grande número de usuários simultâneos sem afetar o desempenho |MÉDIA| Pendente |
|RNF-008| Compatibilidade com os principais navegadores (Chrome, Firefox, Safari, Edge)|ALTA| Realizado |
|RNF-009| Conformidade com Lei Geral de Proteção de Dados garantindo o consentimento dos usuários para coleta de dados e oferecendo a opção de remover seus dados do sistema |ALTA| Pendente |

