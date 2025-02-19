---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: Chamado quando um jogador realiza um clique duplo em um jogador no placar.
tags: ["player"]
---

## Descrição

Chamado quando um jogador realiza um clique duplo em um jogador no placar.

| Nome            | Descrição                                      |
| --------------- | ---------------------------------------------- |
| playerid        | O ID do jogador que clicou em outro no placar. |
| clickedplayerid | O ID do jogador que foi clicado.               |
| source          | A fonte do clique do jogador.                  |

## Retornos

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new message[32];
    format(message, sizeof(message), "Você clicou no jogador %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Notas

:::tip

Há atualmente apenas um 'source' (0 - CLICK_SOURCE_SCOREBOARD). A existência deste argumento sugere que mais 'sources' podem ser adicionadas no futuro.

:::

## Funções Relacionadas

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Chamado quando um jogador clica em uma TextDraw.
