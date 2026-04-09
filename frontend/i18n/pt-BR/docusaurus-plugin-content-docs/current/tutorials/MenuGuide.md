---
title: Guia de Menus
sidebar_label: Guia de Menus
---

Um breve tutorial que explica como usar o sistema de menus do jogo. Este sistema de menus é diferente dos diálogos do SA-MP e reflete melhor a interface tradicional do jogo original.

## Menus no SA-MP

Menus parecem muito complicados e difíceis de programar para a maioria dos jogadores, embora não seja. Aqui vou mostrar como criar um menu simples. No final, teremos criado um menu de teletransporte.

## Primeiros passos do menu

Primeiro precisamos criar um menu. O prefixo antes é `Menu:`, isso torna a variável a [tag](../scripting/language/Tags) correta. Existem diferentes tipos para diferentes usos, como `Float:` `bool:` `Text3D:` etc. Escreva o seguinte código perto do topo do seu script:

```pawn
new Menu:teleportmenu;
```

Ok, criamos a variável para armazenar o menu. Agora precisamos criar o menu e atribuir a variável que criamos ao menu. Digite isso em `OnGameModeInit`:

```pawn
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

Agora uma breve explicação sobre os argumentos de [CreateMenu](../scripting/functions/CreateMenu).

**Parâmetros:**

| Parâmetro       | Especifica                                                       |
| --------------- | ---------------------------------------------------------------- |
| title           | O cabeçalho do menu                                              |
| columns         | O número aqui define quantas colunas são usadas (2 é o máximo)   |
| Float:x         | A posição em altura do menu na tela (da esquerda para a direita) |
| Float:y         | A posição em largura do menu na tela (de cima para baixo)        |
| Float:col1width | A largura da primeira coluna                                     |
| Float:col2width | A largura da segunda coluna                                      |

## Adicionar alguns itens ao menu

Ok, agora temos o Menu, mas precisamos de alguns itens, entre os quais você pode escolher no menu. Você os adiciona abaixo do `CreateMenu` que fizemos anteriormente.

```pawn
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "LV");
AddMenuItem(teleportmenu, 0, "LV");

AddMenuItem(teleportmenu, 1, "Grove Street");
AddMenuItem(teleportmenu, 1, "Starfish Tower");
AddMenuItem(teleportmenu, 1, "Wheel Arch Angels");
AddMenuItem(teleportmenu, 1, "Jizzys");
AddMenuItem(teleportmenu, 1, "4 Dragons");
AddMenuItem(teleportmenu, 1, "Come-a-Lot");
```

A explicação para [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | O menuid do menu onde o item deve ser exibido |
| ------ | --------------------------------------------- |
| column | A coluna na qual o item deve ser mostrado     |
| text   | O texto do item                               |

## Criando os efeitos para os itens

Ok, agora que criamos um menu completo com itens, o que deve acontecer quando você escolhe um item? No nosso exemplo, queremos fazer um menu de teletransporte, então devemos ser teletransportados para a posição que escolhemos. Quando um jogador seleciona um item em um menu, o script chama o callback [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow). A melhor maneira de fazer isso é com um switch, que é como várias declarações if para verificar se uma variável vale certos valores. Mas primeiro, só queremos esses efeitos para o menu que queremos, então precisamos criar uma variável que armazena qual menu o jogador está vendo, isso é feito com `GetPlayerMenu`:

```pawn
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

Agora, quando alguém seleciona algo no menu, o menuid será salvo em `CurrentMenu`.

Agora precisamos verificar se o menu em que selecionaram é o menu que queremos:

```pawn
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        //coisas
    }
    return 1;
}
```

Agora, entre essas chaves é onde fica o `switch`, que verifica qual item o jogador selecionou ou `row`. Isso pode ser feito com declarações `if` verificando qual `row` é, mas o `switch` é uma forma muito mais simples de escrever.

```pawn
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo à Grove Street");
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo ao topo da Starfish Tower");
        }
        case 2: //Wheel Arch Angels
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo à oficina Wheel Arch Angels");
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo à boate Jizzy's!");
        }
        case 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo ao Cassino Four Dragons");
        }
        case 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Bem-vindo ao cassino Come-a-Lot!");
        }
    }
}
```

## Últimos passos

Agora precisamos de um comando para mostrar o menu. Este é o passo mais fácil. Apenas uma comparação com `strcmp` e um `ShowMenuForPlayer`. Isso é feito em `OnPlayerCommandText`. Ou, se você já tiver um processador de comandos, use-o para chamar `ShowMenuForPlayer`.

```pawn
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

Muito fácil, não foi?

## Palavras finais

Ok, depois de ler isso E entender, tente seu próprio menu. Como você pôde ver, não é tão difícil, mas vai impressionar os jogadores do seu servidor ainda mais. E você pode programar efeitos muito legais com isso. Também é muito legal para lojas gerais ou supermercados para as coisas que você pode comprar. Então você pode subtrair algum dinheiro como efeito e o preço é mostrado em outra coluna no menu. Mas agora, trabalhe no seu próprio.

Você também pode adicionar [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) com `false` após `ShowPlayerMenu` e [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) com `true` no final de `OnPlayerSelectedMenuRow` para que o jogador não possa se mover enquanto estiver navegando nos menus.

Espero que você tenha aprendido algo com este tutorial. Se tiver alguma dúvida, pergunte nos fóruns/discord.
