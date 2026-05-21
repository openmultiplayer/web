---
title: SetVehiclePos
sidebar_label: SetVehiclePos
description: "Defina a posição de um veículo."
tags: ["vehicle"]
---


## Descrição

Definir a posição de um veículo

| Nome | Descrição |
| --------- | -------------------------------------------- |
| vehicleid | Veículo ID que você deseja definir nova posição.   |
| Float:x | A coordenada X para posicionar o veículo. |
| Float:y | A coordenada Y para posicionar o veículo. |
| Float:z | A coordenada Z para posicionar o veículo. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O veículo especificado não existe.

## Exemplos

```c
// Coloque o veículo do jogador nas coordenadas 0.0, 0.0, 3.0 (centro de SA)
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0.0, 0.0, 3.0);
```
## Notas

:::warning

Erros conhecidos:

- Um veículo vazio não cairá após ser teletransportado para o ar!

:::

## Funções Relacionadas

- [SetPlayerPos](SetPlayerPos): Defina a posição de um jogador.
- [GetVehiclePos](GetVehiclePos): Obtenha a posição de um veículo.
- [SetVehicleZAngle](SetVehicleZAngle): Define a direção de um veículo.
