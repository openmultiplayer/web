---
title: AttachTrailerToVehicle
sidebar_label: AttachTrailerToVehicle
description: Anexa um veículo a outro veículo como reboque.
tags: ["vehicle"]
---

## Descrição

Anexa um veículo a outro veículo como reboque.

| Nome      | Descrição                                         |
| --------- | ------------------------------------------------- |
| trailerid | O ID do veículo que será puxado.                 |
| vehicleid | O ID do veículo que puxará o reboque.            |

## Retorno

Esta função sempre retorna **true**, mesmo que nenhum dos IDs de veículo passados seja válido.

## Exemplos

```c
new vehicleId = CreateVehicle(403, 657.8788, 1721.9125, 7.7199, 41.0000, -1, -1, 100);
new trailerId = CreateVehicle(435, 651.8154, 1716.3301, 7.7700, 41.0000, -1, -1, 100);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## Notas

:::warning

Isso só funcionará se ambos os veículos estiverem transmitidos para um jogador (verifique [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## Funções Relacionadas

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Desanexa um reboque de um veículo.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Verifica se um reboque está anexado a um veículo.
- [GetVehicleTrailer](GetVehicleTrailer): Verifica qual reboque um veículo está puxando.