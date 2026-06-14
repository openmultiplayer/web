---
title: IsVehicleDead
sidebar_label: IsVehicleDead
description: "Verifique se um veículo está morto."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se um veículo está morto.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

**true** - Veículo morto.

**false** - O veículo não está morto.

## Exemplos

```c
if (IsVehicleDead(vehicleid))
{
    // Veículo está morto
}
else
{
    // Veículo não está morto
}
```
## Funções Relacionadas

- [SetVehicleDead](SetVehicleDead): Define o veículo para morto.
