---
title: IsVehicleHidden
sidebar_label: IsVehicleHidden
description: "Verifica se um veículo está oculto."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Verifica se um veículo está oculto.

## Parâmetros

| Nome | Descrição |
| --------- | ------------------------------- |
| vehicleid | O ID do veículo a ser verificado. |

## Valores de retorno

**true** – O veículo está oculto.

**false** - O veículo não está oculto.

## Exemplos

```c
if (IsVehicleHidden(vehicleid))
{
    // O veículo está oculto
}
else
{
    // Veículo não está escondido
}
```
## Funções Relacionadas

- [HideVehicle](HideVehicle): Oculta um veículo do jogo.
- [ShowVehicle](ShowVehicle): Mostra o veículo escondido.
