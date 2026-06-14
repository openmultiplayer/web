---
title: IsPlayerWidescreenToggled
sidebar_label: IsPlayerWidescreenToggled
description: "Verifica se a tela widescreen do jogador está ligada ou desligada."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se a tela widescreen do jogador está ligada ou desligada.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

**true** - A tela widescreen do jogador está ligada.

**false** - A tela widescreen do jogador está desligada.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreencheck", true))
    {
        SendClientMessage(playerid, -1, "Wide Screen: %s", IsPlayerWidescreenToggled(playerid) ? "On" : "Off");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [TogglePlayerWidescreen](TogglePlayerWidescreen): Alterna a tela widescreen do jogador.
