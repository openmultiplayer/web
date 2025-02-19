---
title: OnPickupStreamIn
sidebar_label: OnPickupStreamIn
description: Este callback é chamado quando um pickup entra no campo visual de um jogador.
tags: ["player"]
---

<VersionWarnPT name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um pickup entra no campo visual de um jogador.

| Nome     | Descrição                                                                |
|----------|--------------------------------------------------------------------------|
| pickupid | O ID do pickup, retornado por [CreatePickup](../functions/CreatePickup). |
| playerid | O ID do jogador cujo pickup entrou no campo visual.                      |

## Retornos

Este callback é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth entrou no campo visual do jogador id %d", playerid);
    }
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma.

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Chamado quando um jogador pega um pickup.
- [OnPickupStreamOut](OnPickupStreamOut): Chamado quando um pickup sai do campo visual de um jogador.

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma.

- [CreatePickup](../functions/CreatePickup): Criar um pickup.
- [DestroyPickup](../functions/DestroyPickup): Destruir um pickup.