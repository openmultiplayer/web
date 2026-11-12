---
title: SetVehicleParamsCarWindows
sidebar_label: SetVehicleParamsCarWindows
description: Permite abrir e fechar as janelas de um veículo.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite abrir e fechar as janelas de um veículo.

| Nome      | Descrição                                                                                  |
| --------- | ------------------------------------------------------------------------------------------ |
| vehicleid | O ID do veículo a definir o estado da janela.                                              |
| driver    | O estado da janela do motorista. **0** para abrir, **1** para fechar.                      |
| passenger | O estado da janela do passageiro. **0** para abrir, **1** para fechar.                     |
| backleft  | O estado da janela traseira esquerda (se disponível). **0** para abrir, **1** para fechar. |
| backright | O estado da janela traseira direita (se disponível). **0** para abrir, **1** para fechar.  |

## Retorno

[edit]

## Funções Relacionadas

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Permite abrir e fechar as portas de um veículo.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): Retorna o estado atual das portas de um veículo.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): Retorna o estado atual das janelas de um veículo.
