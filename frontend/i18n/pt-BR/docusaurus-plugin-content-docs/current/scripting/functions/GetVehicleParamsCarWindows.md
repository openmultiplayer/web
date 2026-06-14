---
title: GetVehicleParamsCarWindows
sidebar_label: GetVehicleParamsCarWindows
description: "Permite recuperar o estado atual das janelas de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite recuperar o estado atual das janelas de um veículo

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------- |
| vehicleid | O ID do veículo |
| &frontLeft | O número inteiro no qual salvar o estado da janela dos drivers.                   |
| &frontRight | O número inteiro no qual salvar o estado da janela dos passageiros.                |
| &rearLeft | O número inteiro no qual salvar o estado da janela traseira esquerda (se disponível).  |
| &rearRight | O número inteiro no qual salvar o estado da janela traseira direita (se disponível). |

## Retornos

O estado das janelas do veículo é armazenado nas variáveis especificadas.

## Notas

:::tip

Os valores retornados em cada variável são os seguintes:

**-1**: Estado da janela não definido (geralmente fechado, a menos que definido explicitamente como -1)

**0**: Aberto

**1**: Fechado

:::

## Funções Relacionadas

- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Abra e feche os vidros de um veículo.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): Recupera o estado atual das portas de um veículo.
- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Abra e feche as portas de um veículo.
