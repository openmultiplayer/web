---
title: AddStaticPickup
sidebar_label: AddStaticPickup
description: Esta função adiciona um pickup 'fixo' no jogo.
tags: []
---

## Descrição

Esta função adiciona um pickup 'fixo' no jogo. Esses pickups suportam armas, vida, colete, etc, com a capacidade de funcionar sem scripts (armas/vida/colete são definidos automaticamente).

| Nome                                | Descrição                                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------------------- |
| [model](../resources/pickupids.md)  | O modelo do pickup.                                                                           |
| [type](../resources/pickuptypes.md) | O tipo de pickup. Determina como o pickup reage quando é coletado.                            |
| Float:X                             | A coordenada-X para colocar o pickup.                                                         |
| Float:Y                             | A coordenada-Y para colocar o pickup.                                                         |
| Float:Z                             | A coordenada-Z para colocar o pickup.                                                         |
| virtualworld                        | O ID do mundo virtual para colocar o pickup. Use -1 para mostrar o pickup em todos os mundos. |

## Retorno

1 se o pickup é criado com sucesso.

0 se falhar ao criar.

## Exemplos

```c
public OnGameModeInit()
{
    // Cria um pickup para colete.
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Cria um pickup para alguma vida, bem ao lado do colete.
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Notas

:::tip

Esta função não retorna um pickup ID que você pode usar, por exemplo, em OnPlayerPickUpPickup. Use CreatePickup se desejar atribuir IDs.

:::

## Funções Relacionadas

- [CreatePickup](CreatePickup.md): Cria um pickup.
- [DestroyPickup](DestroyPickup.md): Destrói um pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup.md): É chamado quando um jogador pega num pickup.
