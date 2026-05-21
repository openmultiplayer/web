---
title: GetPlayerSirenState
sidebar_label: GetPlayerSirenState
description: "Obtém o estado da sirene do veículo do jogador."
tags: ["player", "vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o estado da sirene do veículo do jogador.

## Parâmetros

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |

## Valores de retorno

Retorna o estado da sirene do veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/siren", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new bool:sirenState = GetPlayerSirenState(playerid);

        SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Liga ou desliga a sirene de um veículo.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): Liga ou desliga a sirene de um veículo.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): Verifica se a sirene do veículo está ligada ou desligada.
- [GetVehicleSirenState](GetVehicleSirenState): Obtém o estado da sirene do veículo.
