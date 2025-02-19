---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: Esta callback é chamada quando um jogador sai do veículo.
tags: ["player", "vehicle"]
---

## Descrição

Esta callback é chamada quando um jogador sai do veículo.

| Nome      | Descrição                                   |
| --------- | ------------------------------------------- |
| playerid  | O ID do jogador que esta saindo do veículo. |
| vehicleid | O ID do veículo que o jogador está saindo.  |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "INFO: Você está saindo do veículo %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::warning

Não é chamada quando o jogador cai de uma bicicleta ou é removido do veículo por outros meios como o uso do SetPlayerPos. Você deve usar OnPlayerStateChange e checar se o antigo estado é PLAYER_STATE_DRIVER ou PLAYER_STATE_PASSENGER e se o novo estado é PLAYER_STATE_ONFOOT.

:::

## Funções Relacionadas

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle.md): Tira o jogador do veículo.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat.md): Verifica que assento o jogador está.
