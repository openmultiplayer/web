---
title: LinkVehicleToInterior
sidebar_label: LinkVehicleToInterior
description: "Vincula um veículo a um interior."
tags: ["vehicle"]
---


## Descrição

Vincula um veículo a um interior. Os veículos só podem ser vistos pelos jogadores no mesmo interior (SetPlayerInterior).

| Nome | Descrição |
| ---------- | ---------------------------------------------------------- |
| vehicleid | O ID do veículo para vincular a um interior.              |
| interiorid | O [Interior ID](../resources/interiorids) ao qual vinculá-lo. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo não existe.

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);
    LinkVehicleToInterior(vehicleId, 6);
}
```
## Funções Relacionadas

- [GetVehicleInterior](GetVehicleInterior): Obtenha a identificação do interior de um veículo.
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Defina o mundo virtual de um veículo.
- [SetPlayerInterior](SetPlayerInterior): Defina o interior de um jogador.

## Recursos relacionados

- [Interior IDs](../resources/interiorids)
