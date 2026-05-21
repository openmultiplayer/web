---
title: GetPlayerGravity
sidebar_label: GetPlayerGravity
description: "Obtenha a gravidade de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a gravidade de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------- |
| playerid | O ID do jogador para obter a gravidade. |

## Retornos

A gravidade do jogador como flutuador.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mygravity", true))
    {
        new string[32];
        format(string, sizeof(string), "Your gravity is: %f", GetPlayerGravity(playerid));
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetPlayerGravity](SetPlayerGravity): Defina a gravidade de um jogador.
- [GetGravity](GetGravity): Obtenha a gravidade global atual.
- [SetGravity](SetGravity): Defina a gravidade para todos os jogadores.
