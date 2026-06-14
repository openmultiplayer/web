---
slug: debugging
title: Testes no open.mp
authors: y_less
---

Testar no SA:MP sempre foi desafiador, mas o open.mp introduz novas ferramentas para tornar isso mais fácil e eficiente. Com uma base de código open-source, ferramentas de depuração aprimoradas e uma nova e poderosa biblioteca de "mock" para simular interações de jogadores, os testes agora são mais automatizados e confiáveis do que nunca.

<!-- truncate -->

:::warning

O conteúdo do post a seguir está desatualizado e não reflete o estado atual do open.mp. O post está publicado aqui para fins de arquivamento.

:::

Testar no SA:MP não é muito fácil. Na maior parte do tempo é só conectar ao servidor e colocar prints em todos os lugares. Bibliotecas como y_testing tornam a escrita de testes unitários muito mais fácil, mas apenas para código razoavelmente "puro" - isto é, código que roda no servidor sem muita interação de jogadores. Dá para testar uma quantidade surpreendente de comportamento assim, mas ainda é limitado e não ajuda a isolar problemas quando eles aparecem.

Então como o open.mp resolve isso? Bem, para começar, o código é open-source, então você tem à disposição toda a variedade de ferramentas de depuração existentes, como GDB e Visual Studio, para percorrer e inspecionar o código. Também temos planos de adicionar ferramentas parecidas para os próprios scripts pawn.

Mas a maior adição é a biblioteca "mock". De forma bem simples, ela permite criar jogadores falsos que agem exatamente como jogadores reais, mas sem nenhum cliente conectado. Assim, qualquer ação feita neles por um script pode ser lida e analisada por outro script. Vamos pegar o exemplo mais simples possível para uma primeira demonstração - mostrar um checkpoint a um jogador e confirmar que ele foi enviado. Com y_testing você faz a ação e depois precisa realmente perguntar ao jogador se aconteceu, o que é lento, não repetível e simplesmente tedioso:

```c
PTEST__ SetPlayerCheckpoint(playerid)
{
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);
    ASK("Do you see a checkpoint in the middle of the world?");
}
```

Usar uma biblioteca como "Pawn.RakNet" pode remover a pergunta, automatizando a verificação de pacotes enviados, mas ainda exige um jogador conectado, então não pode ser automatizado e repetido:

```c
static
    gCheckpointPlayer,
    Float:gX,
    Float:gY,
    Float:gZ,
    Float:gS;

PTEST__ SetPlayerCheckpoint(playerid)
{
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);
    ASSERT(gX == 0.0);
    ASSERT(gY == 0.0);
    ASSERT(gZ == 4.0);
    ASSERT(gS == 5.0);
    ASSERT(gCheckpointPlayer == playerid);
}

OPacket:107(playerid, BitStream:bs)
{
    gCheckpointPlayer = playerid;

    BS_IgnoreBits(bs, 8);
    BS_ReadFloat(bs, gX);
    BS_ReadFloat(bs, gY);
    BS_ReadFloat(bs, gZ);
    BS_ReadFloat(bs, gS);

    return 1;
}
```

Com o open.mp, temos uma API parecida com a do Pawn.RakNet, mas com jogadores falsos. Então você cria um jogador, sem uma instância do jogo, e o usa exatamente como um jogador normal:

```c
TEST__ SetPlayerCheckpoint()
{
    new playerid = Mock_CreatePlayer("Mr Mock");

    // Limpa todos os pacotes existentes para facilitar a busca.
    Mock_PurgeSent(playerid);

    // Mostra um checkpoint normalmente.
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);

    // Verifica se um pacote "SetCheckpoint" foi visto.
    new MockPacket:packet = Mock_GetPacket(playerid, "SetCheckpoint");
    ASSERT(packet);
    if (!packet) return;

    // Verifica se o pacote tem 4 componentes, cada um com 32 bits.
    ASSERT(MockPacket_Components(packet) == 4);
    ASSERT(MockPacket_Bits(packet) == 4 * 32);

    // Verifica os vários componentes.
    new Float:tmp;
    ASSERT(MockPacket_ReadFloat(packet, 0, tmp));
    ASSERT(tmp == 0.0);
    ASSERT(MockPacket_ReadFloat(packet, 1, tmp));
    ASSERT(tmp == 0.0);
    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));
    ASSERT(tmp == 4.0);
    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));
    ASSERT(tmp == 5.0);
}
```

Esse código é totalmente testável de forma repetível, autocontido (sem variáveis globais e callbacks extras) e simples de expandir.

Mas às vezes não é tão simples assim. Se você cria um objeto, não pode simplesmente verificar que ele foi enviado instantaneamente a um jogador, porque talvez ele não esteja perto o bastante e, portanto, o streamer embutido ainda não o enviou. Para resolver isso, primeiro precisamos fazer um pequeno desvio para explicar como a sincronização básica funciona para coisas como `SetPlayerPos`. Quando você define a posição de um jogador com `SetPlayerPos`, o servidor NÃO atualiza imediatamente a posição dele internamente e para todos os outros jogadores. Em vez disso, um comando `SET POSITION` é enviado para aquele jogador que está sendo movido, ele é teleportado para a nova posição e então informa a nova posição de volta ao servidor no próximo pacote de sincronização. O motivo é basicamente lag - pode haver um ou mais pacotes de sincronização ainda em trânsito com a posição antiga depois de definir a nova posição. Então o que isso significa para jogadores mock? Significa que você não pode realmente definir a posição deles, pelo menos não da forma normal. Não há cliente real, então não há nada recebendo pacotes (ou seja, o comando de definir posição), e não há nada sincronizando esses dados de volta para o servidor.

Podemos gerar qualquer dado de sincronização mock para o servidor a partir de jogadores mock, então essa é uma forma de atualizar a posição deles, mas pode ser um pouco trabalhoso para apenas uma operação comum; por isso existe `Mock_SetPlayerPos` exatamente para esse caso de uso. Mas isso ainda não é a história completa, porque precisamos que o streamer rode e atualize com a nova posição deles, o que acontece apenas periodicamente (a cada poucos milissegundos, dependendo da taxa de ticks do servidor). Para isso temos outra função mock - `Mock_Tick`, que avança o tempo do servidor em um determinado número de microssegundos (NÃO milissegundos). Isso absolutamente não deve ser usado em servidores ao vivo, pois pode criar todo tipo de comportamento estranho com timers e outros códigos sensíveis ao tempo, mas pode ser usado para simular a passagem do tempo em testes. Observe que `Mock_Tick(10000)` não vai aguardar 10ms; em vez disso, vai avançar o tempo em 10 milissegundos instantaneamente.

```c
TEST__ SetPlayerCheckpoint()
{
    new playerid = Mock_CreatePlayer("Mr Mock");

    // Limpa todos os pacotes existentes para facilitar a busca.
    Mock_PurgeSent(playerid);

    // Cria um objeto.
    CreateObject(1337, 100.0, 100.0, 4.0);

    // Simula a atualização da posição do jogador mock para o servidor, perto do objeto.
    Mock_SetPlayerPos(playerid, 105.0, 105.0, 4.0);

    // Agora SIMULA a passagem de algum tempo, para que o streamer possa rodar (50ms deve bastar).
    Mock_Tick(50000);

    // Verifica se um pacote "CreateObject" foi visto.
    new MockPacket:packet = Mock_GetPacket(playerid, "CreateObject");
    ASSERT(packet);
    if (!packet) return;

    // Verifica se o pacote tem 4 componentes, cada um com 32 bits.
    ASSERT(MockPacket_Components(packet) > 5);

    // Verifica alguns dos componentes do pacote.
    new int;
    new Float:tmp;
    ASSERT(MockPacket_ReadInt32(packet, 1, int));
    ASSERT(int == 1337);
    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));
    ASSERT(tmp == 100.0);
    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));
    ASSERT(tmp == 100.0);
    ASSERT(MockPacket_ReadFloat(packet, 4, tmp));
    ASSERT(tmp == 4.0);
}
```

Uma observação importante sobre `Mock_Tick`. Se você chamá-lo como, digamos, `Mock_Tick(100000)` e tiver um timer de 1ms rodando, isso acionará instantaneamente o timer, mas o timer pensará que perdeu seu tempo por uma grande margem (100ms) e se enfileirará novamente. Durante a chamada a `Mock_Tick`, o timer será disparado uma vez, mas depois que o teste atual terminar o timer será enfileirado mais 99 vezes, uma por tick, porque ele acha que perdeu 100 invocações.

Mais tarde abordaremos algumas técnicas de depuração de nível mais alto para que você possa ler e escrever pacotes falsos com mais facilidade, em vez de um componente por vez como nesse código, mas isso apresenta o básico sobre o qual todo o resto é construído. Esperamos que isso torne o desenvolvimento e os testes de código mais fáceis para todos (e também garanta que o servidor seja mais estável).

Também vamos falar muito mais sobre o design da API do open.mp amanhã. Ela é totalmente compatível com versões anteriores do SA:MP, mas isso não significa que não haja espaço paralelo para melhorias.
