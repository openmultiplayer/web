---
title: GetPickupType
sidebar_label: GetPickupType
description: "Obtém o tipo de pickup."
tags: ["pickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o tipo de pickup.

| Nome | Descrição |
| -------- | ---------------------------------------- |
| pickupid | O ID do captador para obter o tipo. |

## Retornos

Retorna o tipo de pickup.

**-1** se a retirada não for válida.

## Exemplos

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new type = GetPickupType(g_Pickup);
    // tipo = 1
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
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Define o mundo virtual ID de um captador.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Obtém o mundo virtual ID de uma picape.
- [ShowPickupForPlayer](ShowPickupForPlayer): Mostra uma pickup para um jogador específico.
- [HidePickupForPlayer](HidePickupForPlayer): Oculta um pickup para um jogador específico.
- [SetPickupForPlayer](SetPickupForPlayer): Ajusta o modelo, tipo e posição do captador para um jogador específico.
