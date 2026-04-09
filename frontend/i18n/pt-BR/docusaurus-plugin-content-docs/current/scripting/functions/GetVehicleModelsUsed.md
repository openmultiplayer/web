---
title: GetVehicleModelsUsed
sidebar_label: GetVehicleModelsUsed
description: Obtém o número de modelos de veículo usados no servidor.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o número de modelos de veículo usados no servidor.

## Exemplos

```c
public OnGameModeInit()
{
    printf("Modelos de veículo usados: %d", GetVehicleModelsUsed());
}
```

## Funções Relacionadas

- [GetVehicleModelCount](GetVehicleModelCount): Obtém a contagem de um modelo de veículo.
