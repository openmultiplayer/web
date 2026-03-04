---
title: GetVehicleCab
sidebar_label: GetVehicleCab
description: Obtém o ID do cavalo mecânico anexado a um veículo.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o ID do cavalo mecânico anexado a um veículo.

| Name      | Description                                |
| --------- | ------------------------------------------ |
| vehicleid | O ID do veículo do qual obter o cavalo mecânico. |

## Retorno

O ID do veículo do cavalo mecânico ou **0** se nenhum estiver anexado.

## Exemplos

```c
new cabId = GetVehicleCab(vehicleid);
```

## Funções Relacionadas

- [GetVehicleTrailer](GetVehicleTrailer): Obtém o ID do trailer anexado a um veículo.
