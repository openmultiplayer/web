---
title: SetVehicleSpawnInfo
sidebar_label: SetVehicleSpawnInfo
description: "Ajusta o modelo do veículo, localização de spawn, cores, atraso de reaparecimento e interior."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Ajusta o modelo do veículo, localização de spawn, cores, atraso de reaparecimento e interior.

## Parâmetros

| Nome | Descrição |
| ----------------- | ----------------------------------------------------------- |
| vehicleid | O ID do veículo.                                      |
| modelid | [Modelo do veículo](../resources/vehicleid) ID a ser definido.          |
| Float:spawnX | A coordenada X a ser definida.                                    |
| Float:spawnY | A coordenada Y a ser definida.                                    |
| Float:spawnZ | A coordenada Z a ser definida.                                    |
| Float:angle | O ângulo a ser definido.                                           |
| colour1 | A [cor do veículo](../resources/vehiclecolorid) 1 para definir. |
| colour2 | A [cor do veículo](../resources/vehiclecolorid) 2 a ser definida. |
| respawnDelay = -2 | O atraso de reaparecimento do veículo será definido.                           |
| interior = -2 | O ID interno a ser definido.                                     |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    SetVehicleSpawnInfo(vehicleid, 522, 2096.0417, -1314.1062, 24.0078, 0.0000, 1, 7);
    return 1;
}
```
## Funções Relacionadas

- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): Obtém a localização e as cores do spawn do veículo.
