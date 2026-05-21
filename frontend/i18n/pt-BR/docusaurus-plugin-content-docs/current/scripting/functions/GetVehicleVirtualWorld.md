---
title: GetVehicleVirtualWorld
sidebar_label: GetVehicleVirtualWorld
description: "Obtenha o mundo virtual de um veículo."
tags: ["vehicle"]
---


## Descrição

Obtenha o mundo virtual de um veículo.

| Nome | Descrição |
| --------- | -------------------------------------------------- |
| vehicleid | O ID do veículo para obter o mundo virtual. |

## Retornos

O mundo virtual em que o veículo está.

## Exemplos

```c
new
	vehicleWorld = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, vehicleWorld);
```
## Funções Relacionadas

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Defina o mundo virtual de um veículo.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Verifique em que mundo virtual um jogador está.
