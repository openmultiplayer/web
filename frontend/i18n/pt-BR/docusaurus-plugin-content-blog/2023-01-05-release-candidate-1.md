---
slug: release-candidate-1
title: Release Candidate 1
authors: y_less
---

Finalmente chegou! 🎉 Depois de anos de desenvolvimento, reescritas e desafios, estamos empolgados em apresentar o Release Candidate 1 (RC1) do servidor open.mp. Isso marca um grande passo rumo ao nosso lançamento oficial 1.0, trazendo atualizações, recursos e melhorias significativas.

<!-- truncate -->

Chegou!

Finalmente chegou!

Depois de quatro anos, duas reescritas, discussões e drama, e incontáveis outros obstáculos; finalmente chegou!

Release Candidate 1 (RC1) do servidor open.mp.

Isso, esperamos, representa a versão final do código para o nosso lançamento 1.0, e se tudo correr bem com esta versão poderemos finalmente **abrir** o chamado **open**.mp em apenas alguns dias a partir de agora.

Antes de entrar na parte principal do lançamento, quero primeiro agradecer sinceramente a cada membro da equipe open.mp por ajudar o mod a chegar tão longe. Não foi fácil, principalmente pelo quanto todos estavam realmente envolvidos - todos queríamos o melhor para o mod, para a comunidade, para o SA:MP, para nossos servidores e para nossos jogadores; não teríamos embarcado nessa jornada se não fosse assim. Infelizmente, opiniões fortes e divergentes sobre o que é **melhor** às vezes causam atrito. Mas estamos aqui agora. Então, a todos, um enorme obrigado:

- Amir
- Cheaterman
- Freaksken
- Graber
- Hual
- Josh
- JustMichael
- kseny
- Nexius
- pkfin
- Potassium
- Southclaws
- TommyB
- Y_Less
- Zeex
- E provavelmente mais...

Enfim, agora a parte com a qual você realmente se importa...

Agora que saímos do beta, estamos (se tudo correr bem esta semana) lançando no prazo. Então, junto com o próprio servidor, que você já viu uma dúzia de vezes antes, temos algumas novidades para vocês:

## Pawn

O download tem os includes oficiais, sem mais corrigir os includes antigos do SA:MP com `omp.inc`; agora estamos fazendo isso direito! Ele também tem um novo compilador. Já se perguntou quando a 3.10.11 chegaria? Bem, não espere mais (se você mesmo a compilou, pode pensar nesta como 3.10.12)! Com essa combinação, você provavelmente receberá muitos novos avisos, mas não se preocupe - também temos uma ferramenta para isso, para atualizar automaticamente uma boa quantidade de código, adicionando nomes de símbolos bem definidos, `const` e mais nos lugares certos. Talvez você já tenha notado isso, já vem usando há meses, mas a máquina virtual (a parte dentro do servidor) também foi atualizada! Ah, e todas aquelas natives de string que você conhece e adora, como `SendClientMessage` e `AddMenuItem`? Agora todas elas formatam. Todas elas[^1].

Uma lista completa do que está disponível:

- Limite de tamanho de símbolo aumentado para 64, sem mais `OnPlyrDoTheTing` para tentar encaixar seus nomes. Levando a...
- Várias natives descomprimidas - `Col` é abreviação de `Colour` ou `Collision`? Agora você sabe!
- Tags. Tags em todos os lugares. Veja a documentação incluída.
- Os includes oficiais finalmente estão const-correct. Sem mais reclamações de que algumas pessoas talvez não os tenham.
- Versão do compilador atualizada: `__nameof`, `__addressof`, correções e coisas demais para listar aqui.
- `switch` está muito mais rápido.
- Mais avisos para problemas anteriormente não detectados. Quanto mais problemas o compilador puder encontrar, menos você precisa encontrar.
- Uma ferramenta *upgrader* para adicionar tags e `const` ao código do usuário e corrigir vários novos avisos.
- Nomenclatura mais consistente. Cada native foi examinada de perto e comparada para garantir o máximo nível de similaridade e intuitividade na nomenclatura.
- Adicionado `{Float, _}:...` em todos os lugares. O que isso significa? Significa quase não precisar mais de `format()`[^2] - pense em y_va, mas nativamente.
- `-O2`, o nível mais alto de otimização do pawn, funciona ao usar o novo compilador e a nova VM. Alguns includes podem precisar ser atualizados, mas alguns já foram. Para ajudar nisso...
- A macro `__optimisation` foi adicionada para que o código possa se configurar quando compilado com -O2.

Documentação dos includes atualizados:  
https://github.com/openmultiplayer/omp-stdlib

Documentação do novo compilador:  
https://github.com/openmultiplayer/compiler/  
https://github.com/pawn-lang/compiler/

Documentação do qawno:  
https://github.com/openmultiplayer/qawno/

Documentação da ferramenta upgrader:  
https://github.com/openmultiplayer/upgrade

[^1]: Quase todas elas.

[^2]: Quase não precisar mais de `format()`.

## SDK

Pawn é a forma tradicional, e ainda oficial, de escrever modes para o seu servidor. Ela não vai desaparecer, mas para aqueles de vocês que querem mais controle, estamos finalmente lançando o SDK completo (o *S*oftware *D*evelopment *K*it). Esta é uma interface C++ para o servidor, a mesma usada por todos os componentes que compõem o código principal do open.mp. Qualquer coisa que eles possam fazer, você também pode fazer (comparado a plugins, que foram projetados apenas para fornecer funções ao pawn, não para escrever modes).

Temos alguma documentação em andamento; infelizmente isso leva tempo. Mas enquanto isso, aqui estão vários componentes de exemplo para aqueles de vocês que querem mergulhar direto. Todos são templates nos quais você pode se basear, e vão de basicamente nada até um componente totalmente funcional com os recursos mais comuns:

https://github.com/openmultiplayer/empty-template  
https://github.com/openmultiplayer/basic-template  
https://github.com/openmultiplayer/pawn-template  
https://github.com/openmultiplayer/full-template

Alguns termos para você começar, para que possa entender o que está lendo:

- *Component* - Uma peça lógica individual do servidor, como objects ou pickups. Aqueles de que você não precisa não precisam ser carregados.
- *Extension* - Código que estende outro pedaço de código. Você pode escrever component extensions, mas as mais comuns são player extensions, que definem alguma estrutura de dados a ser associada a um jogador além de todos os dados normais dele, como health e weapons.
- *UID* - *U*nique *ID*entifier, um número que representa o seu componente, e somente o seu componente. Isso é sempre obrigatório e pode ser obtido aqui: https://open.mp/uid
- *Entity* - Uma coisa, geralmente algo com que um jogador pode interagir e da qual você pode ter muitas. Objects são entities, mas outros jogadores também são entities; até commands em um processor poderiam ser chamados de entities.
- *Pool* - Algo que armazena entities. Quando você tem muitas, precisa conseguir acessá-las por nome ou ID de alguma forma; é isso que um pool faz.
- *Interface* - Components usam uma classe base abstrata como interface. Ela declara quais métodos um component tem, mas não contém o código desses métodos. Interfaces são passadas por aí para que components possam se comunicar entre si, mas as implementações são mantidas privadas.
- *SDK* - A coleção de todas as interfaces definidas pelo servidor core.
- *ABI* - Uma *A*pplication *B*inary *I*nterface é a forma como código compilado conversa com outro código compilado. As interfaces exportadas pelo SDK são *ABI stable*, o que significa que usar dois componentes compilados em momentos diferentes ainda funcionará em conjunto.
- *pawn-natives* - A biblioteca sobre a qual todas as declarações de natives são construídas. Usando um wrapper chamado *SCRIPT_API* ao redor desta biblioteca: https://github.com/openmultiplayer/pawn-natives
- *Event* - Algo que acontece externamente. Coisas como jogadores conectando e digitando comandos são events. Qualquer component pode definir events e avisar outros components quando esses events acontecem.
- *Handler* - Um component que quer saber quando um event acontece.

Se você tiver dúvidas, o melhor lugar provavelmente são os novíssimos (revividos) fóruns:  
https://forum.open.mp/

## Recursos

Além de todos os novos recursos anunciados para pawn, há vários recursos novos (e recém-anunciados) no servidor:

- Gang zones por jogador, como havia no YSF.
- Pickups por jogador, também como no YSF.
- `AttachPlayerObjectToPlayer`.
- Melhor suporte a PawnPlus.
- Suporte a `:memory:` e outros nomes especiais no SQLite.
- Flags de abertura do SQLite.
- Opção de configuração `exclude` para não carregar certos componentes.
- Mostrar erros de parsing de configuração, não apenas falhar silenciosamente.
- Verificação de versão major do SDK, só para o caso de algum dia fazermos grandes mudanças no servidor (esperamos que não).

## Correções

Houve alguns novos bugs introduzidos na beta 11, e alguns menores que sobraram de antes. Os corrigidos incluem:

- Aviso de `funcidx` já registrado.
- Plugins GDK (streamer etc) sem natives.
- Crash aleatório em GMX.
- Callbacks GDK às vezes não chamados.
- Sem logging quando solicitado no componente SQLite.
- Algumas configurações não eram redefinidas em GMX.
- NPCs estavam conectando quando havia muitos de uma vez.
- `.so` ainda era necessário em nomes de plugins legados no Linux.

## Links

Primeiro, claro, a nova versão do servidor:  
https://github.com/openmultiplayer/open.mp/releases

Segundo, os fóruns voltaram. Vá até lá para todas as suas perguntas:  
https://forum.open.mp/

Ou, se preferir:  
https://vk.com/open_mp

Em seguida, apesar de isso ter sido oferecido algumas vezes, resistimos explicitamente a qualquer dinheiro até este momento; porque não achávamos certo até termos provado nosso trabalho com um lançamento. Com este post, esse momento é agora, então se alguém quiser nos ajudar (todas as doações serão destinadas à infraestrutura e ao trabalho futuro de desenvolvimento do cliente), isso seria muito apreciado:

https://www.patreon.com/open_mp  
https://opencollective.com/openmultiplayer

E, claro, tudo ainda está em desenvolvimento ativo, então confira regularmente todos os links acima para ver o que há de novo.
