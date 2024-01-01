---
title: OnPlayerEnterRaceCheckpoint
description: Esta callback é chamada quando um jogador entra em um checkpoint de corrida.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descrição

Esta callback é chamada quando um jogador entra em um checkpoint de corrida.

| Nome     | Descrição                                          |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador que entrou no chekpoint de corrida |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Jogador %d entrou em um checkpoint de corrida!", playerid);
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Cria o checkpoint para um jogador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desativa o atual checkpoint do jogador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Verifica se o jogador está em checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Cria um checkpoint de corrida.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desativa o atual checkpoint de corrida do jogador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verifica se o jogador está em um checkpoint de corrida.
