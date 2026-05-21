---
title: SetPickupForPlayer
sidebar_label: SetPickupForPlayer
description: "Ajusta o modelo, tipo e posição do captador para um jogador específico."
tags: ["player", "pickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Ajusta o modelo, tipo e posição do captador para um jogador específico.

| Nome | Descrição |
| -------- | --------------------------------------------------- |
| playerid | O ID do jogador.                               |
| pickupid | O ID da picape.                               |
| model | O [modelo](../resources/pickupids) a ser definido.         |
| tipo | O [tipo de captação](../resources/pickuptypes) a ser definido. |
| Float:x | A coordenada x para definir o pickup.              |
| Float:y | A coordenada y para definir a captação.              |
| Float:z | A coordenada z para definir o pickup.              |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);
    SetPickupForPlayer(playerid, g_Pickup, 1210, 2, x + 2.0, y + 2.0, z);
    return 1;
}
```
## Funções Relacionadas

- [CreatePickup](CreatePickup): Crie um pickup.
- [AddStaticPickup](AddStaticPickup): Adicione um captador estático.
- [DestroyPickup](DestroyPickup): Destrua um captador.
- [IsValidPickup](IsValidPickup): Verifica se um pickup é válido.
- [IsPickupStreamedIn](IsPickupStreamedIn): Verifica se uma captura foi transmitida para um jogador específico.
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
