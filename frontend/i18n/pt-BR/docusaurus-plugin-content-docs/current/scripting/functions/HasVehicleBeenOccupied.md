---
title: HasVehicleBeenOccupied
sidebar_label: HasVehicleBeenOccupied
description: "Verifique se um veículo está ocupado."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se um veículo está ocupado.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

**true** - Veículo está ocupado.

**false** - Veículo não está ocupado.

## Exemplos

```c
if (HasVehicleBeenOccupied(vehicleid))
{
    // Veículo está ocupado
}
else
{
    // Veículo não está ocupado
}
```
## Funções Relacionadas

- [SetVehicleBeenOccupied](SetVehicleBeenOccupied): Define a ocupação do veículo.
