---
title: IsPlayerUsingOfficialClient
sidebar_label: IsPlayerUsingOfficialClient
description: "Verifique se o jogador está usando o cliente oficial SA-MP."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador está usando o cliente oficial SA-MP.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

Retorna 1 se o jogador estiver usando o cliente oficial, caso contrário, 0.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerUsingOfficialClient(playerid) == 0)
    {
        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You doesn't seem to be using the official sa-mp client!");
        Kick(playerid);
    }

    return 1;
}
```
## Funções Relacionadas

- [IsPlayerUsingOmp](IsPlayerUsingOmp): Verifique se o jogador está usando o inicializador open.mp.
- [SendClientCheck](SendClientCheck): Execute uma verificação de memória no cliente.
