---
title: GetVehicleSpawnInfo
sidebar_label: GetVehicleSpawnInfo
description: "Obtém a localização e as cores do spawn do veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a localização e as cores do spawn do veículo.

## Parâmetros

| Nome | Descrição |
| ------------- | ------------------------------------------------------------------------------ |
| vehicleid | O ID do veículo.                                                         |
| &Float:spawnX | Uma variável float na qual armazenar a coordenada spawnX, passada por referência. |
| &Float:spawnY | Uma variável float na qual armazenar a coordenada spawnY, passada por referência. |
| &Float:spawnZ | Uma variável float na qual armazenar a coordenada spawnZ, passada por referência. |
| &Float:angle | Uma variável flutuante na qual armazenar a coordenada do ângulo, passada por referência.  |
| &colour1 | Uma variável na qual armazenar o valor color1, passado por referência.           |
| &colour2 | Uma variável na qual armazenar o valor color2, passado por referência.           |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        colour1,
        colour2;

    GetVehicleSpawnInfo(vehicleid, spawnX, spawnY, spawnZ, angle, colour1, colour2);
    return 1;
}
```
## Funções Relacionadas

- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): Ajusta o modelo do veículo, localização de spawn, cores, atraso de reaparecimento e interior.
