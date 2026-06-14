---
title: IsPlayerTeleportAllowed
sidebar_label: IsPlayerTeleportAllowed
description: "Este jogador pode se teletransportar clicando com o botão direito no mapa?"
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Este jogador pode se teletransportar clicando com o botão direito no mapa?

| Nome | Descrição |
| -------- | --------------------------------------- |
| playerid | O ID do jogador para permitir o teletransporte. |

## Retornos

**true** - Jogador é permitido.

**false** - Jogador não é permitido.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerTeleport(playerid, true);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsPlayerTeleportAllowed(playerid))
    {
        // Faça alguma coisa
    }
    return 1;
}
```
## Funções Relacionadas

- [AllowPlayerTeleport](AllowPlayerTeleport): Define o jogador como administrador RCON.
