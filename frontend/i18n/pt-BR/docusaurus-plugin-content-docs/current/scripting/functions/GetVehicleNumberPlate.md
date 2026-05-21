---
title: GetVehicleNumberPlate
sidebar_label: GetVehicleNumberPlate
description: "Obtenha a placa de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a placa de um veículo.

## Parâmetros

| Nome | Descrição |
| -------------------- | ----------------------------------------------------------- |
| vehicleid | O ID do veículo.                                      |
| plate[] | Uma matriz na qual armazenar o nome, passado por referência. |
| len = sizeof (plate) | O comprimento da placa que deve ser armazenada.              |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    SetVehicleNumberPlate(vehicleid, "ABCD 123");

    new numberPlate[16];
    GetVehicleNumberPlate(vehicleid, numberPlate);
    // placa de número = "ABCD 123"
    return 1;
}
```
## Funções Relacionadas

- [SetVehicleNumberPlate](SetVehicleNumberPlate): Defina a placa do veículo.
