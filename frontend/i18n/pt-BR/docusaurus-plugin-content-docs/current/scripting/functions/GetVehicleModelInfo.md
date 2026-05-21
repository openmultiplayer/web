---
title: GetVehicleModelInfo
sidebar_label: GetVehicleModelInfo
description: "Recuperar informações sobre um modelo de veículo específico, como tamanho ou posição dos assentos."
tags: ["vehicle"]
---


## Descrição

Recuperar informações sobre um modelo de veículo específico, como tamanho ou posição dos assentos

| Nome | Descrição |
| --------------------------- | ---------------------------------------------------------------------------- |
| vehiclemodel | O modelo do veículo do qual obter informações.                                            |
| VEHICLE_MODEL_INFO:infotype | O [tipo de informação](../resources/vehicleinformationtypes) a ser recuperado. |
| &Float:x | Um float para armazenar o valor X.                                                |
| &Float:y | Um float para armazenar o valor Y.                                                |
| &Float:z | Um float para armazenar o valor Z.                                                |

## Retornos

As informações do veículo são armazenadas nas variáveis especificadas.

## Exemplos

```c
new
	Float: x, Float: y, Float: z;
// Obtenha o tamanho do veículo de modelo 411 (Infernus)
GetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);
// Imprime "O Infernus tem 2,3 m de largura, 5,7 m de comprimento e 1,3 m de altura" no console
printf("The infernus is %.1fm wide, %.1fm long and %.1fm high", X, Y, Z);
```
## Funções Relacionadas

- [GetVehicleModel](GetVehicleModel): Obtenha o ID do modelo de um veículo.

## Recursos relacionados

- [Tipos de informações do veículo](../resources/vehicleinformationtypes)
