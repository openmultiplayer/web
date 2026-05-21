---
title: GetVehicleSirenState
sidebar_label: GetVehicleSirenState
description: "Obtém o estado da sirene do veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o estado da sirene do veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

Retorna o estado da sirene do veículo.

## Exemplos

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new bool:sirenState = GetVehicleSirenState(vehicleid);

    SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");
    return 1;
}
```
## Funções Relacionadas

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Liga ou desliga a sirene de um veículo.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): Liga ou desliga a sirene de um veículo.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): Verifica se a sirene do veículo está ligada ou desligada.
- [GetPlayerSirenState](GetPlayerSirenState): Obtém o estado da sirene do veículo do jogador.
