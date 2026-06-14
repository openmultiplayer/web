---
title: GetVehiclePaintjob
sidebar_label: GetVehiclePaintjob
description: "Obtém o ID da pintura do veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o ID da pintura do veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

Retorna o [id da pintura](../resources/paintjobs).

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    ChangeVehiclePaintjob(vehicleid, 2);

    new paintjob = GetVehiclePaintjob(vehicleid);
    // pintura = 2
    return 1;
}
```
## Funções Relacionadas

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Alterar a pintura de um veículo
