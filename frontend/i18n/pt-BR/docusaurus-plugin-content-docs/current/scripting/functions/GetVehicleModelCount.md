---
title: GetVehicleModelCount
sidebar_label: GetVehicleModelCount
description: "Obtém a contagem de modelos de um modelo de veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a contagem de modelos de um modelo de veículo.

## Parâmetros

| Nome | Descrição |
| ------- | ------------------------------------------------------ |
| modelid | O ID do [modelo do veículo](../resources/vehicleid). |

## Exemplos

```c
public OnGameModeInit()
{
    CreateVehicle(560, 2112.7607, -1308.3751, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2104.5730, -1308.3313, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2120.3616, -1308.4973, 23.6797, 90.0000, -1, -1, 100);

    new modelid = 560;
    printf("Vehicle model: %d - model count: %d", modelid, GetVehicleModelCount(modelid)); // Modelo do veículo: 560 - contagem de modelos: 3
}
```
## Funções Relacionadas

- [CreateVehicle](CreateVehicle): Crie um veículo.
- [GetVehicleModelsUsed](GetVehicleModelsUsed): Obtenha a quantidade de modelos de veículos usados ​​no servidor.
