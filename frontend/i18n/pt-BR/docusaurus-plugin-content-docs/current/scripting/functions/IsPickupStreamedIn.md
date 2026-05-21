---
title: IsPickupStreamedIn
sidebar_label: IsPickupStreamedIn
description: "Verifica se uma captura foi transmitida para um jogador específico."
tags: ["player", "pickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se uma captura foi transmitida para um jogador específico.

| Nome | Descrição |
| -------- | --------------------- |
| playerid | O ID do jogador. |
| pickupid | O ID da picape. |

## Retornos

Esta função retorna **true** se a captação for transmitida para o jogador ou **false** se não for.

## Exemplos

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPickupStreamedIn(playerid, g_Pickup))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [CreatePickup](CreatePickup): Crie um pickup.
- [AddStaticPickup](AddStaticPickup): Adicione um captador estático.
- [DestroyPickup](DestroyPickup): Destrua um captador.
- [IsValidPickup](IsValidPickup): Verifica se um pickup é válido.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): Verifica se um pickup está oculto para um jogador específico.
- [SetPickupPos](SetPickupPos): Define a posição de um pickup.
- [GetPickupPos](GetPickupPos): Obtém as coordenadas de um pickup.
- [SetPickupModel](SetPickupModel): Define o modelo do captador.
- [GetPickupModel](GetPickupModel): Obtém o modelo ID de um captador.
- [SetPickupType](SetPickupType): Define o tipo de pickup.
- [GetPickupType](GetPickupType): Obtém o tipo de captador.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Define o mundo virtual ID de um captador.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Obtém o mundo virtual ID de uma picape.
- [ShowPickupForPlayer](ShowPickupForPlayer): Mostra uma pickup para um jogador específico.
- [HidePickupForPlayer](HidePickupForPlayer): Oculta um pickup para um jogador específico.
- [SetPickupForPlayer](SetPickupForPlayer): Ajusta o modelo, tipo e posição do captador para um jogador específico.
