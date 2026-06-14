---
title: GetPlayerSpectateType
sidebar_label: GetPlayerSpectateType
description: "Retorna o tipo de espectador do jogador (veículo ou jogador)."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Retorna o tipo de espectador do jogador (veículo ou jogador).

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |

## Retornos

Retorna o [tipo de espectador](../resources/spectatetypes) do jogador.

## Exemplos

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    SendClientMessage(playerid, -1, "You are spectating a vehicle.");
}
else if (spectateType == 2)
{
    SendClientMessage(playerid, -1, "You are spectating a player.");
}
```
## Funções Relacionadas

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Espectar um jogador.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): Visualize um veículo.
- [TogglePlayerSpectating](TogglePlayerSpectating): Iniciar ou parar de assistir.
- [GetPlayerSpectateID](GetPlayerSpectateID): Obtém o ID do jogador ou veículo que o jogador está assistindo (assistindo).

## Recursos relacionados

- [Tipos de espectadores](../resources/spectatetypes).
