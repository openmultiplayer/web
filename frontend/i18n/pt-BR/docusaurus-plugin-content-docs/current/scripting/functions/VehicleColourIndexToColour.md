---
title: VehicleColourIndexToColour
sidebar_label: VehicleColourIndexToColour
description: "Converta um índice de cores de carro em uma cor HEX (RGBA)."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Converta um índice de cores de carro em uma cor HEX (RGBA).

## Parâmetros

| Nome | Descrição |
| ------------ | ---------------------------------------------- |
| index | [Cor do veículo](../resources/vehiclecolorid). |
| alpha = 0xFF | Canal alfa.                                 |

## Exemplos

```c
new colour = VehicleColourIndexToColour(3, 0xFF);
```
## Funções Relacionadas

- [GetRandomVehicleColourPair](GetRandomVehicleColourPair): Obtenha índices de cores aleatórios válidos para um determinado modelo de veículo.
- [GetVehicleColours](GetVehicleColours): Obtém as cores do veículo.
