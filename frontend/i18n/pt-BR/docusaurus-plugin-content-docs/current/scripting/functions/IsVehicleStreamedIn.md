---
title: IsVehicleStreamedIn
sidebar_label: IsVehicleStreamedIn
description: "Verifica se um veículo foi transmitido para um jogador."
tags: ["vehicle"]
---


## Descrição

Verifica se um veículo foi transmitido para um jogador. Apenas veículos próximos são transmitidos (visíveis) para um jogador.

| Nome | Descrição |
| --------- | ------------------------------- |
| vehicleid | O ID do veículo a ser verificado. |
| playerid | O ID do jogador a ser verificado.  |

## Retornos

**true** – O veículo é transmitido para o jogador.

**false** - O veículo não foi transmitido para o jogador ou a função não foi executada (o jogador e/ou o veículo não existem).

## Exemplos

```c
new streamedVehicleCount;

for(new i = 1; i < MAX_VEHICLES; i++)
{
    if (IsVehicleStreamedIn(i, playerid))
    {
        streamedVehicleCount ++;
    }
}

new string[144];
format(string, sizeof(string), "You currently have %i vehicles streamed in to your game.", streamedVehicleCount);
SendClientMessage(playerid, -1, string);
```
## Funções Relacionadas

- [IsPlayerStreamedIn](IsPlayerStreamedIn): Verifica se um jogador está transmitindo para outro player.

## Callbacks Relacionadas

- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): Chamado quando um veículo chega para um jogador.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): Chamado quando um veículo sai para um jogador.
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): Chamado quando um jogador faz streaming para outro jogador.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): Chamado quando um jogador faz streaming para outro jogador.
