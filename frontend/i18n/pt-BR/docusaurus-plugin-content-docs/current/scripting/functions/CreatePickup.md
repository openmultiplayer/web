---
title: CreatePickup
sidebar_label: CreatePickup
description: Esta função faz exatamente o mesmo que AddStaticPickup, exceto que retorna um ID de pickup que pode ser usado para destruí-lo posteriormente e ser rastreado usando OnPlayerPickUpPickup.
tags: ["pickup"]
---

## Descrição

Esta função faz exatamente o mesmo que AddStaticPickup, exceto que retorna um ID de pickup que pode ser usado para destruí-lo posteriormente e ser rastreado usando OnPlayerPickUpPickup.

| Nome                             | Descrição                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | O modelo do pickup.                                                                |
| [type](../resources/pickuptypes) | O tipo do pickup. Determina como o pickup responde quando é coletado.             |
| Float:x                          | A coordenada X onde criar o pickup.                                               |
| Float:y                          | A coordenada Y onde criar o pickup.                                               |
| Float:z                          | A coordenada Z onde criar o pickup.                                               |
| virtualWorld                     | O ID do mundo virtual do pickup. Use -1 para fazer o pickup aparecer em todos os mundos. |

## Retorno

O ID do pickup criado, -1 em caso de falha (limite máximo de pickup).

## Exemplos

```c
new pickup_Armour; // Cria uma variável para armazenar o ID do pickup

public OnGameModeInit()
{
    pickup_Armour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Cria um pickup de armadura e armazena o ID em 'pickup'
    return 1;
}

// Mais tarde..
DestroyPickup(pickup_Armour); // Exemplo de uso do ID do pickup
pickup_Armour = 0; // variável pickup precisa ser resetada para evitar conflitos futuros
```

## Notas

:::tip

- O único tipo de pickup que pode ser coletado de dentro de um veículo é 14 (exceto para pickups especiais como propinas).
- Pickups são mostrados para, e podem ser coletados por todos os jogadores.
- É possível que se DestroyPickup() for usado quando um pickup é coletado, mais de um jogador pode coletar o pickup, devido ao lag. Isso pode ser evitado através do uso de variáveis.
- Certos tipos de pickup vêm com 'respostas automáticas', por exemplo usar um modelo M4 no pickup automaticamente dará ao jogador a arma e alguma munição.
- Para pickups totalmente programados, o tipo 1 deve ser usado.

:::

:::warning

Bug(s) Conhecido(s):

- Pickups que têm um X ou Y menor que -4096.0 ou maior que 4096.0 não aparecerão e não acionarão OnPlayerPickUpPickup também.

:::

## Funções Relacionadas

- [AddStaticPickup](AddStaticPickup): Adiciona um pickup estático.
- [DestroyPickup](DestroyPickup): Destrói um pickup.
- [IsValidPickup](IsValidPickup): Verifica se um pickup é válido.
- [IsPickupStreamedIn](IsPickupStreamedIn): Verifica se um pickup está transmitido para um jogador específico.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): Verifica se um pickup está oculto para um jogador específico.
- [SetPickupPos](SetPickupPos): Define a posição de um pickup.
- [GetPickupPos](GetPickupPos): Obtém as coordenadas de um pickup.
- [SetPickupModel](SetPickupModel): Define o modelo de um pickup.
- [GetPickupModel](GetPickupModel): Obtém o ID do modelo de um pickup.
- [SetPickupType](SetPickupType): Define o tipo de um pickup.
- [GetPickupType](GetPickupType): Obtém o tipo de um pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Define o ID do mundo virtual de um pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Obtém o ID do mundo virtual de um pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Mostra um pickup para um jogador específico.
- [HidePickupForPlayer](HidePickupForPlayer): Oculta um pickup para um jogador específico.
- [SetPickupForPlayer](SetPickupForPlayer): Ajusta o modelo, tipo e posição do pickup para um jogador específico.
- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que será visível apenas para um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrói um pickup de jogador.

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a esta função.

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Chamado quando um jogador coleta um pickup.
- [OnPickupStreamIn](../callbacks/OnPickupStreamIn): Chamado quando um pickup entra no alcance visual de um jogador.
- [OnPickupStreamOut](../callbacks/OnPickupStreamOut): Chamado quando um pickup sai do alcance visual de um jogador.

## Recursos Relacionados

- [Pickup IDs](../resources/pickupids)
- [Pickup Types](../resources/pickuptypes)