---
title: DetachTrailerFromVehicle
sidebar_label: DetachTrailerFromVehicle
description: Remove a conexão entre um veículo e seu reboque, se houver.
tags: ["vehicle"]
---

## Descrição

Remove a conexão entre um veículo e seu reboque, se houver.

| Nome      | Descrição                |
| --------- | -------------------------- |
| vehicleid | ID do veículo que está puxando o reboque. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
DetachTrailerFromVehicle(vehicleid);
```

## Funções Relacionadas

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Conecta um reboque a um veículo.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Verifica se um reboque está conectado a um veículo.
- [GetVehicleTrailer](GetVehicleTrailer): Verifica qual reboque um veículo está puxando.