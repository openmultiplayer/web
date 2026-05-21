---
title: ShowVehicle
sidebar_label: ShowVehicle
description: "Mostra o veículo escondido."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Mostra o veículo escondido.

## Parâmetros

| Nome | Descrição |
| --------- | ------------------------------ |
| vehicleid | O ID do veículo a ser exibido. |

## Exemplos

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(g_Vehicle);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showvehicle", true))
    {
        if (IsVehicleHidden(g_Vehicle))
        {
            ShowVehicle(g_Vehicle);
        }
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [HideVehicle](HideVehicle): Oculta um veículo do jogo.
- [IsVehicleHidden](IsVehicleHidden): Verifica se um veículo está oculto.
