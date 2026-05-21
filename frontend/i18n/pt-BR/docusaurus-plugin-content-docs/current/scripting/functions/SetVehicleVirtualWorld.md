---
title: SetVehicleVirtualWorld
sidebar_label: SetVehicleVirtualWorld
description: "Define o 'mundo virtual' de um veículo."
tags: ["vehicle"]
---


## Descrição

Define o 'mundo virtual' de um veículo. Os jogadores só poderão ver os veículos em seu próprio mundo virtual.

| Nome | Descrição |
| ------------ | -------------------------------------------------- |
| vehicleid | O ID do veículo para definir o mundo virtual.     |
| virtualWorld | O ID do mundo virtual para colocar o veículo. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```
## Funções Relacionadas

- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): Verifique em que mundo virtual um veículo está.
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Defina o mundo virtual de um jogador.
