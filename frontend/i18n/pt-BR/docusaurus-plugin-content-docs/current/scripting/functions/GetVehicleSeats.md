---
title: GetVehicleSeats
sidebar_label: GetVehicleSeats
description: Obtém o número de assentos no veículo.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o número de assentos no veículo.

| Nome    | Descrição                 |
| ------- | ------------------------- |
| modelid | ID do modelo do veículo.  |

## Valores de Retorno

Retorna o número de assentos.

**255** se o modelo for inválido.

## Exemplos

```c
new vehicleid = GetPlayerVehicleID(playerid);
new modelid = GetVehicleModel(vehicleid);
new seats = GetVehicleSeats(modelid);

new string[64];
format(string, sizeof(string), "Número de assentos neste veículo: %d", seats);
SendClientMessage(playerid, -1, string);
```

## Funções Relacionadas

- [PutPlayerInVehicle](PutPlayerInVehicle): Coloca um jogador em um veículo.
