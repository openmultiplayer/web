---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Esta callback é chamada quando um jogador entre em um checkpoint colocado para aquele jogador.
tags: ["player", "checkpoint"]
---

## Descrição

Esta callback é chamada quando um jogador entre em um checkpoint colocado para aquele jogador.

| Nome     | Descrição                           |
| -------- | ----------------------------------- |
| playerid | O jogador que entrou no checkpoint. |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
//Neste exemplo o checkpoint é criado para o jogador quando spawna,
//o qual cria um veículo e desativa o checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
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
