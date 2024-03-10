---
title: OnPlayerStateChange
description: Esta callback é chamada quando o estado de um jogador muda.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando o estado de um jogador muda. Por exemplo, quando um jogador deixa de ser o piloto de um veículo e fica a pé.

| Nome     | Desrição                              |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador que teve o estado alterado. |
| newstate | O novo estado do jogador.                  |
| oldstate | O antigo estado do jogador.             |

Verifique em [Player States](../resources/playerstates) a lista de todos os estados disponíveis.

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplo

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Jogador entrou no veículo como piloto
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Adiciona nitro ao veículo
    }
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas

- [GetPlayerState](../functions/GetPlayerState): Obtém o estado atual do jogador.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Obtém a ação especial atual do jogador.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Define uma ação especial a um jogador.
