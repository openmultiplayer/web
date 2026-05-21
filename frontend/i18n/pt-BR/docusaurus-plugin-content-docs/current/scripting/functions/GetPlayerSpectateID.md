---
title: GetPlayerSpectateID
sidebar_label: GetPlayerSpectateID
description: "Obtém o ID do jogador ou veículo que o jogador está assistindo (assistindo)."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o ID do jogador ou veículo que o jogador está assistindo (assistindo).

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |

## Retornos

Retorna o ID do jogador ou veículo.

## Exemplos

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    new spectateVehicleId = GetPlayerSpectateID(playerid);
}
else if (spectateType == 2)
{
    new spectatePlayerId = GetPlayerSpectateID(playerid);
}
```
## Notas

:::info

Consulte [tipos de espectadores](../resources/spectatetypes).

:::

## Funções Relacionadas

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Espectar um jogador.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): Visualize um veículo.
- [TogglePlayerSpectating](TogglePlayerSpectating): Iniciar ou parar de assistir.
- [GetPlayerSpectateType](GetPlayerSpectateType): Obtém o tipo de espectador do jogador.

## Recursos relacionados

- [Tipos de espectadores](../resources/spectatetypes).
