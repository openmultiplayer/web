---
title: AllowPlayerTeleport
description: Habilita/Desabilita a habilidade de teletransporte para um jogador, clicando com o botão direito no mapa.
tags: ["player"]
---

:::warning

Esta função, a partir da 0.3d, está descontinuada. Verifique [OnPlayerClickMap](../callbacks/OnPlayerClickMap.md).

:::

## Descrição

Habilita/Desabilita a habilidade de teletransporte para um jogador, clicando com o botão direito no mapa.

| Nome     | Descrição                               	  |
| -------- | --------------------------------------- 	  |
| playerid | O ID do jogador a permitir o teletransporte. |
| allow    | 1-permite, 0-proíbe                          |

## Retorno

Esta função não retorna nenhuma valor específico.

## Exemplos

```c
public OnPlayerConnect( playerid )
{
    // Permite ao jogador se teletransportar clicando com o botão direito no mapa
    // uma vez que está dentro do OnPlayerConnect, isso será feito para CADA jogador.
    AllowPlayerTeleport( playerid, 1 );
}
```

## Notas

:::warning

Esta função só funciona se  [AllowAdminTeleport](AllowAdminTeleport.md) estiver habilitado, e você tem que ser um administrador.

:::

## Funções Relacionadas

- [AllowAdminTeleport](AllowAdminTeleport.md): Toggle waypoint teleporting for RCON admins.
