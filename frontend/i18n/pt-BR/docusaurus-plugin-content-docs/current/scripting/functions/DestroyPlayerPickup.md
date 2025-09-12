---

title: DestroyPlayerPickup
sidebar_label: DestroyPlayerPickup
description: Destrói um player-pickup criado com CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Destrói um player-pickup criado com [CreatePlayerPickup](CreatePlayerPickup).

| Nome     | Descrição                                                                 |
| -------- | ------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                          |
| pickupid | O ID do player-pickup a ser destruído (retornado por CreatePlayerPickup). |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerPickupArmour[MAX_PLAYERS]; // Cria uma variável para armazenar o ID do player-pickup

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Cria um pickup de armadura e armazena o ID em 'PlayerPickupArmour[playerid]'
    return 1;
}

// Algum tempo depois...
DestroyPlayerPickup(playerid, PlayerPickupArmour[playerid]);
```

## Funções Relacionadas

* [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup visível apenas para um jogador.
* [IsValidPlayerPickup](IsValidPlayerPickup): Verifica se um player-pickup é válido.

## Callbacks Relacionados

* [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): Chamado quando um jogador pega um player-pickup.
