---
title: PutPlayerInVehicle
sidebar_label: PutPlayerInVehicle
description: Coloca um jogador em um veículo.
tags: ["player", "vehicle"]
---

## Descrição

Coloca um jogador em um veículo.

| Nome       | Descrição                                 |
| ---------- | ----------------------------------------- |
| playerid   | O ID do jogador a ser colocado no veículo. |
| vehicleid  | O ID do veículo onde o jogador será colocado. |
| seatid     | O ID do assento onde o jogador será colocado. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - A função falhou ao ser executada. O jogador ou o veículo não existem.

## Exemplos

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)
{
    PutPlayerInVehicle(playerid, vehicleid, 0);
    return 1;
}
```

| ID  | Assento                      |
| --- | ---------------------------- |
| 0   | Motorista                    |
| 1   | Passageiro da frente         |
| 2   | Passageiro de trás à esquerda |
| 3   | Passageiro de trás à direita  |
| 4+  | Assentos de passageiros (ônibus, etc.) |

## Notas

:::tip

Você pode usar [GetPlayerVehicleSeat](GetPlayerVehicleSeat) em um loop para verificar se um assento está ocupado por algum jogador.

:::

:::warning

Se o assento for inválido ou estiver ocupado, causará um crash quando o jogador SAIR do veículo.

:::

## Funções Relacionadas

- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Expulsa um jogador de seu veículo.
- [GetPlayerVehicleID](GetPlayerVehicleID): Obtém o ID do veículo em que o jogador está.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Verifica em qual assento o jogador está.
- [GetVehicleSeats](GetVehicleSeats): Obtém o número de assentos no veículo.

## Callbacks Relacionados

- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): Chamado quando um jogador começa a entrar em um veículo.
