---
title: GetRandomVehicleColourPair
sidebar_label: GetRandomVehicleColourPair
description: "Obtenha índices de cores aleatórios válidos para um determinado modelo de veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha índices de cores aleatórios válidos para um determinado modelo de veículo.

## Parâmetros

| Nome | Descrição |
| ------------ | -------------------------------------------------------------------- |
| modelid | O ID do [modelo do veículo](../resources/vehicleid).               |
| &colour1 | Uma variável na qual armazenar o valor color1, passado por referência. |
| &colour2 | Uma variável na qual armazenar o valor color2, passado por referência. |
| &colour3 = 0 | Uma variável na qual armazenar o valor color3, passado por referência. |
| &colour4 = 0 | Uma variável na qual armazenar o valor color4, passado por referência. |

## Exemplos

```c
new
	colour1,
	colour2;

GetRandomVehicleColourPair(560, colour1, colour2);
```
## Funções Relacionadas

- [VehicleColourIndexToColour](VehicleColourIndexToColour): Converta um índice de cores de carro em uma cor HEX (RGBA).
- [GetVehicleColours](GetVehicleColours): Obtém as cores do veículo.
