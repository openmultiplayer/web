---
title: GetPlayerScore
sidebar_label: GetPlayerScore
description: "Esta função retorna a pontuação de um jogador conforme foi definida usando SetPlayerScore."
tags: ["player"]
---


## Descrição

Esta função retorna a pontuação de um jogador conforme foi definida usando SetPlayerScore

| Nome | Descrição |
| -------- | ------------------------------- |
| playerid | O jogador do qual obter a pontuação. |

## Retornos

A pontuação do jogador.

## Exemplos

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext, "/score", true))
    {
        new string[32];
        format(string, sizeof(string), "Your score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetPlayerScore](SetPlayerScore): Define a pontuação de um jogador.
- [GetPlayerPing](GetPlayerPing): Obtenha o ping de um jogador.
