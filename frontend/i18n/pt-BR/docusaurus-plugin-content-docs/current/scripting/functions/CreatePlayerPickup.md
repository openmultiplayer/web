---
title: CreatePlayerPickup
sidebar_label: CreatePlayerPickup
description: Cria um pickup que será visível apenas para um jogador.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Cria um pickup que será visível apenas para um jogador.

| Nome                             | Descrição                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| playerid                         | O ID do jogador para criar o pickup.                                              |
| [model](../resources/pickupids)  | O modelo do pickup.                                                                |
| [type](../resources/pickuptypes) | O tipo do pickup. Determina como o pickup responde quando é coletado.             |
| Float:x                          | A coordenada X onde criar o pickup.                                               |
| Float:y                          | A coordenada Y onde criar o pickup.                                               |
| Float:z                          | A coordenada Z onde criar o pickup.                                               |
| virtualWorld                     | O ID do mundo virtual do pickup. Use -1 para fazer o pickup aparecer em todos os mundos. |

## Retorno

O ID do pickup de jogador criado, **-1** em caso de falha (limite máximo de pickup).

## Exemplos

```c
new PlayerPickupArmour[MAX_PLAYERS]; // Cria uma variável para armazenar o ID do pickup de jogador

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Cria um pickup de armadura e armazena o ID em 'PlayerPickupArmour[playerid]'
    return 1;
}
```

## Notas

:::tip

- O único tipo de pickup que pode ser coletado de dentro de um veículo é 14 (exceto para pickups especiais como propinas).
- Pickups são mostrados para, e podem ser coletados por todos os jogadores.
- É possível que se DestroyPlayerPickup() for usado quando um pickup é coletado, mais de um jogador pode coletar o pickup, devido ao lag. Isso pode ser evitado através do uso de variáveis.
- Certos tipos de pickup vêm com 'respostas automáticas', por exemplo usar um modelo M4 no pickup automaticamente dará ao jogador a arma e alguma munição.
- Para pickups totalmente programados, o tipo 1 deve ser usado.

:::

:::warning

Bug(s) Conhecido(s):

- Pickups que têm um X ou Y menor que -4096.0 ou maior que 4096.0 não aparecerão e não acionarão OnPlayerPickUpPlayerPickup também.

:::

## Funções Relacionadas

- [CreatePlayerPickup](CreatePlayerPickup): Cria um pickup que será visível apenas para um jogador.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destrói um pickup de jogador.
- [IsValidPlayerPickup](IsValidPlayerPickup): Verifica se um pickup de jogador é válido.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): Verifica se um pickup de jogador está transmitido para o jogador.
- [SetPlayerPickupPos](SetPlayerPickupPos): Define a posição de um pickup de jogador.
- [GetPlayerPickupPos](GetPlayerPickupPos): Obtém as coordenadas de um pickup de jogador.
- [SetPlayerPickupModel](SetPlayerPickupModel): Define o modelo de um pickup de jogador.
- [GetPlayerPickupModel](GetPlayerPickupModel): Obtém o ID do modelo de um pickup de jogador.
- [SetPlayerPickupType](SetPlayerPickupType): Define o tipo de um pickup de jogador.
- [GetPlayerPickupType](GetPlayerPickupType): Obtém o tipo de um pickup de jogador.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Define o ID do mundo virtual de um pickup de jogador.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Obtém o ID do mundo virtual de um pickup de jogador.

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a esta função.

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): Chamado quando um jogador coleta um pickup de jogador.
- [OnPlayerPickupStreamIn](../callbacks/OnPlayerPickupStreamIn): Chamado quando um pickup de jogador entra no alcance visual do jogador.
- [OnPlayerPickupStreamOut](../callbacks/OnPlayerPickupStreamOut): Chamado quando um pickup de jogador sai do alcance visual do jogador.

## Recursos Relacionados

- [Pickup IDs](../resources/pickupids)
- [Pickup Types](../resources/pickuptypes)