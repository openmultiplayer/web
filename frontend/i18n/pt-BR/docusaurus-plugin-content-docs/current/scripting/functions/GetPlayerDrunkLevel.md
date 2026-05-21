---
title: GetPlayerDrunkLevel
sidebar_label: GetPlayerDrunkLevel
description: "Verifica o nível de embriaguez do jogador."
tags: ["player"]
---


## Descrição

Verifica o nível de embriaguez do jogador. Se o nível for inferior a 2.000, o jogador está sóbrio. O nível de embriaguez do jogador diminui lentamente e automaticamente (26 níveis por segundo), mas sempre chegará a 2.000 no final. Os níveis mais elevados de embriaguez afetam a câmera do jogador e o manuseio do carro. O nível de embriaguez aumenta quando o jogador bebe de uma garrafa (você pode usar SetPlayerSpecialAction para dar garrafas).

| Nome | Descrição |
| -------- | ------------------------------------------------------ |
| playerid | O jogador cujo nível de embriaguez você deseja verificar. |

## Retornos

Um número inteiro com o nível de embriaguez do jogador.

## Exemplos

```c
public OnPlayerStateChange(playerid, oldstate, newstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Don't drink and drive!");
        RemovePlayerFromVehicle(playerid);
    }
}
```
## Funções Relacionadas

- [SetPlayerDrunkLevel](SetPlayerDrunkLevel): Define o nível de embriaguez de um jogador.
