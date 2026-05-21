---
title: TextDrawShowForAll
sidebar_label: TextDrawShowForAll
description: "Mostra um textdraw para todos os jogadores."
tags: ["textdraw"]
---


## Descrição

Mostra um textdraw para todos os jogadores.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------------------------- |
| Text:textid | O ID do textdraw para mostrar.<br />Returned por [TextDrawCreate](TextDrawCreate). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o textdraw especificado não existe.

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
    return 0;
}
```
## Funções Relacionadas

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
