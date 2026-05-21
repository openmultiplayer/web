---
title: GetVehicleInterior
sidebar_label: GetVehicleInterior
description: "Obtenha a identificação do interior de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a identificação do interior de um veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

Retorna o ID do interior do veículo.

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    LinkVehicleToInterior(vehicleid, 15);

    new interiorid = GetVehicleInterior(vehicleid);
    // interiorid = 15
    return 1;
}
```
## Funções Relacionadas

- [LinkVehicleToInterior](LinkVehicleToInterior): Vincula um veículo a um interior.
