---
title: IsVehicleSirenEnabled
sidebar_label: IsVehicleSirenEnabled
description: "Verifica se a sirene do veículo está ligada ou desligada."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se a sirene do veículo está ligada ou desligada.

## Parâmetros

| Nome | Descrição |
| --------- | ------------------------------- |
| vehicleid | O ID do veículo a ser verificado. |

## Valores de retorno

**true** - A sirene do veículo está ligada.

**false** - A sirene do veículo está desligada.

## Exemplos

```c
if (IsVehicleSirenEnabled(vehicleid))
{
    // A sirene do veículo está ligada
}
else
{
    // A sirene do veículo está desligada
}
```
## Funções Relacionadas

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Liga ou desliga a sirene de um veículo.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): Liga ou desliga a sirene de um veículo.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): Verifica se a sirene do veículo está ligada ou desligada.
