---
title: GetPickupVirtualWorld
sidebar_label: GetPickupVirtualWorld
description: "Obtém o mundo virtual ID de uma picape."
tags: ["pickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o mundo virtual ID de uma picape.

| Nome | Descrição |
| -------- | ---------------------------------------------------- |
| pickupid | O ID da picape para obter o mundo virtual ID. |

## Retornos

Retorna o mundo virtual ID do captador.

## Exemplos

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, 20);

    new worldid = GetPickupVirtualWorld(g_Pickup);
    // id do mundo = 20
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
- [ShowPickupForPlayer](ShowPickupForPlayer): Mostra uma pickup para um jogador específico.
- [HidePickupForPlayer](HidePickupForPlayer): Oculta um pickup para um jogador específico.
- [SetPickupForPlayer](SetPickupForPlayer): Ajusta o modelo, tipo e posição do captador para um jogador específico.
