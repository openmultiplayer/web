---
title: GetPickupPos
sidebar_label: GetPickupPos
description: "Obtém as coordenadas de uma coleta."
tags: ["pickup"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as coordenadas de uma coleta.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------- |
| pickupid | O ID do captador para obter a posição.                              |
| &Float:x | Uma variável flutuante na qual armazenar a coordenada x, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a coordenada y, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a coordenada z, passada por referência. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. A retirada especificada não existe.

## Exemplos

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new
        Float:x,
        Float:y,
        Float:z;

    GetPickupPos(g_Pickup, x, y, z);
    // x = 1686.6160
    // y = 1455.4277
    // z = 10.7705
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
- [SetPickupModel](SetPickupModel): Define o modelo do captador.
- [GetPickupModel](GetPickupModel): Obtém o modelo ID de um captador.
- [SetPickupType](SetPickupType): Define o tipo de pickup.
- [GetPickupType](GetPickupType): Obtém o tipo de captador.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Define o mundo virtual ID de um captador.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Obtém o mundo virtual ID de uma picape.
- [ShowPickupForPlayer](ShowPickupForPlayer): Mostra uma pickup para um jogador específico.
- [HidePickupForPlayer](HidePickupForPlayer): Oculta um pickup para um jogador específico.
- [SetPickupForPlayer](SetPickupForPlayer): Ajusta o modelo, tipo e posição do captador para um jogador específico.
