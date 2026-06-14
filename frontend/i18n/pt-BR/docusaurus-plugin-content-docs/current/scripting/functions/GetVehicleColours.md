---
title: GetVehicleColours
sidebar_label: GetVehicleColours
description: "Obtém as cores do veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as cores do veículo.

## Parâmetros

| Nome | Descrição |
| --------- | -------------------------------------------------------------------- |
| vehicleid | O ID do veículo.                                               |
| &colour1 | Uma variável na qual armazenar o valor color1, passado por referência. |
| &colour2 | Uma variável na qual armazenar o valor color2, passado por referência. |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new
        colour1,
        colour2;

    GetVehicleColours(vehicleid, colour1, colour2);
    // cor1 = 6
    // cor2 = 0
    return 1;
}
```
## Funções Relacionadas

- [ChangeVehicleColours](ChangeVehicleColours): Altere as cores primárias e secundárias de um veículo.

## Recursos relacionados

- [Cor do veículo IDs](../resources/vehiclecolorid)
