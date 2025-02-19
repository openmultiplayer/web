---
title: OnPlayerEnterVehicle
sidebar_label: OnPlayerEnterVehicle
description: Esta callback é chamada quando um jogador começa a entrar em um veículo, isso significa que o jogador não está no veículo ainda quando esta callback é chamada.
tags: ["player", "vehicle"]
---

## Descrição

Esta callback é chamada quando um jogador começa a entrar em um veículo, isso significa que o jogador não está no veículo ainda quando esta callback é chamada.

| Nome        | Descrição                                             |
| ----------- | ----------------------------------------------------- |
| playerid    | O ID do jogador que está tentando entra no veículo.   |
| vehicleid   | O ID do veículo que o jogador está tentando entrar.   |
| ispassenger | 0 se entrar como piloto. 1 se entrar como passageiro. |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplo

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Você está entrando no veículo de id %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Esta callback é chamada quando um jogador começa a entrar em um veículo, não quando ele entram nele. Veja OnPlayerStateChange. Esta callback ainda é chamada se o jogador for impedido de entrar no veículo.

:::

## Funções Relacionadas

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle.md): Coloca um jogador em um veículo.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat.md): Verifica qual assento o jogador está.
