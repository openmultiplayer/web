---
title: SetVehicleParamsCarDoors
description: Permite abrir e fechar as portas de um veículo.
tags: ["vehicle"]
---

Esta função foi implementada no SA-MP 0.3.7 e não funcionará em versões anteriores.

## Descrição

Permite abrir e fechar as portas de um veículo.

| Nome      | Descrição                                                                         |
| --------- | --------------------------------------------------------------------------------- |
| vehicleid | O ID do veículo a definir o estado da porta.                                      |
| driver    | O estado da porta do motorista. 1 para abrir, 0 para fechar.                      |
| passenger | O estado da porta do passageiro. 1 para abrir, 0 para fechar.                     |
| backleft  | O estado da porta traseira esquerda (se disponível). 1 para abrir, 0 para fechar. |
| backright | O estado da porta traseira direita (se disponível). 1 para abrir, 0 para fechar.  |

## Retorno

[edit]

## Funções Relacionadas

- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors.md): Retorna o estado atual das portas de um veículo.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows.md): Permite abrir e fechar as janelas de um veículo.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows.md): Retorna o estado atual das janelas de um veículo.
