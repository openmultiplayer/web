---
title: TextDrawHideForAll
sidebar_label: TextDrawHideForAll
description: "Oculta um sorteio de texto para todos os jogadores."
tags: ["textdraw"]
---


## Descrição

Oculta um sorteio de texto para todos os jogadores.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------------------------- |
| Text:textid | O ID do textdraw a ser ocultado.<br />Returned por [TextDrawCreate](TextDrawCreate). |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showtd", true))
    {
        TextDrawShowForAll(gMyTextdraw);
        return 1;
    }
    if (!strcmp(cmdtext, "/hidetd", true))
    {
        TextDrawHideForAll(gMyTextdraw);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
