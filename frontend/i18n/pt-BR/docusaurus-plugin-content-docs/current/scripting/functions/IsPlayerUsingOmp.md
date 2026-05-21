---
title: IsPlayerUsingOmp
sidebar_label: IsPlayerUsingOmp
description: "Verifique se o jogador está usando o inicializador open.mp."
tags: ["player"]
---


<VersionWarn version='omp 1.4.0.2779' />

## Descrição

Verifique se o jogador está usando o inicializador open.mp.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

Retorna 1 se o jogador estiver usando o inicializador open.mp, caso contrário, 0.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    // O jogador está usando o iniciador open.mp
    if(IsPlayerUsingOmp(playerid))
    {
        SendClientMessage(playerid, -1, "You are using the open.mp launcher.");
    }

    // O jogador não está usando o inicializador open.mp
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You don't seem to be using the open.mp launcher");
        Kick(playerid);
    }

    return 1;
}
```
## Funções Relacionadas

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): Verifique se o jogador está usando o cliente oficial SA-MP.
- [SendClientCheck](SendClientCheck): Execute uma verificação de memória no cliente.
