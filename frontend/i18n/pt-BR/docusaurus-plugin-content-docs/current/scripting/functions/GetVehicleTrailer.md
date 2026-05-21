---
title: GetVehicleTrailer
sidebar_label: GetVehicleTrailer
description: "Obtenha o ID do trailer acoplado a um veículo."
tags: ["vehicle"]
---


## Descrição

Obtenha o ID do trailer acoplado a um veículo.

| Nome | Descrição |
| --------- | -------------------------------------------- |
| vehicleid | O ID do veículo para o qual obter o trailer. |

## Retornos

O veículo ID do reboque ou 0 se nenhum reboque estiver acoplado.

## Exemplos

```c
new
	trailerId = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerId);
```
## Notas

:::warning

Esta função não funciona para trens.

:::

## Funções Relacionadas

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Anexe um trailer a um veículo.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Solte um trailer de um veículo.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Verifique se um trailer está acoplado a um veículo.
