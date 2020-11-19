---
title: SetVehicleParamsCarWindows
description: Permite abrir e fechar as janelas de um veículo.
tags: ["vehicle"]
---

Esta função foi implementada no SA-MP 0.3.7 e não funcionará em versões anteriores.

## Descrição

Permite abrir e fechar as janelas de um veículo.

| Nome      | Descrição                                                                          |
| --------- | ---------------------------------------------------------------------------------- |
| vehicleid | O ID do veículo a definir o estado da janela.                                      |
| driver    | O estado da janela do motorista. 1 para abrir, 0 para fechar.                      |
| passenger | O estado da janela do passageiro. 1 para abrir, 0 para fechar.                     |
| backleft  | O estado da janela traseira esquerda (se disponível). 1 para abrir, 0 para fechar. |
| backright | O estado da janela traseira direita (se disponível). 1 para abrir, 0 para fechar.  |

## Retorno

[edit]

## Funções Relacionadas

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors.md): Permite abrir e fechar as portas de um veículo.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors.md): Retorna o estado atual das portas de um veículo.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows.md): Retorna o estado atual das janelas de um veículo.
