---
title: GetPlayerVehicleID
sidebar_label: GetPlayerVehicleID
description: Esta função obtém o ID do veículo em que o jogador está atualmente.
tags: ["player", "vehicle"]
---

## Descrição

Esta função obtém o ID do veículo em que o jogador está atualmente.

**Nota:** NÃO é o ID do modelo do veículo. Veja [GetVehicleModel](GetVehicleModel) para isso.

| Nome      | Descrição                                                        |
| --------- | ---------------------------------------------------------------- |
| playerid  | O ID do jogador no veículo do qual você deseja obter o ID         |

## Retornos

ID do veículo ou **0** se não estiver em um veículo

## Exemplos

```c
// Adiciona 10x Nitro se o jogador estiver em um carro. Pode ser chamado em um comando.
new vehicleId = GetPlayerVehicleID(playerid);
if (vehicleId != 0)
{
    AddVehicleComponent(vehicleId, 1010);
}
```

## Funções Relacionadas

- [IsPlayerInVehicle](IsPlayerInVehicle): Verifica se um jogador está em um determinado veículo.
- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): Verifica se um jogador está em qualquer veículo.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Verifica em qual assento o jogador está.
- [GetVehicleModel](GetVehicleModel): Obtém o ID do modelo de um veículo.
