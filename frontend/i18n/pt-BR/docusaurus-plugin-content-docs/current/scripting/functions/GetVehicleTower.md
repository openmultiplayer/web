---
title: GetVehicleTower
sidebar_label: GetVehicleTower
description: "Obtenha o ID da cabine acoplada a um veículo."
tags: ["vehicle"]
---


:::warning

Esta função está obsoleta. Consulte [GetVehicleCab](GetVehicleCab).

:::

## Descrição

Obtenha o ID da cabine acoplada a um veículo.

| Nome | Descrição |
| --------- | ---------------------------------------- |
| vehicleid | O ID do veículo para o qual obter a cabine. |

## Retornos

O veículo ID da cabine ou **0** se nenhuma cabine estiver anexada.

## Exemplos

```c
new cabId = GetVehicleTower(vehicleid);
```
## Funções Relacionadas

- [GetVehicleTrailer](GetVehicleTrailer): Obtenha o ID do trailer acoplado a um veículo.
