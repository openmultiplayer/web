---
title: GetVehicleParamsCarDoors
sidebar_label: GetVehicleParamsCarDoors
description: "Permite recuperar o estado atual das portas de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite recuperar o estado atual das portas de um veículo

| Nome | Descrição |
| ----------- | ----------------------------------------------------------------------- |
| vehicleid | O ID do veículo |
| &frontLeft | O número inteiro no qual salvar o estado da porta do motorista.                  |
| &frontRight | O número inteiro no qual salvar o estado da porta do passageiro.               |
| &rearLeft | O número inteiro no qual salvar o estado da porta traseira esquerda (se disponível).  |
| &rearRight | O número inteiro no qual salvar o estado da porta traseira direita (se disponível). |

## Retornos

O estado das portas do veículo é armazenado nas variáveis especificadas.

## Notas

:::tip

Os valores retornados em cada variável são os seguintes:

**-1**: Estado da porta não definido

**1**: Aberto

**0**: Fechado

:::

## Funções Relacionadas

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Abra e feche as portas de um veículo.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Abrir e fechar os vidros de um veículo.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): recupera o estado atual das janelas de um veículo
