---
title: AllowPlayerTeleport
sidebar_label: AllowPlayerTeleport
description: Ativar/Desativar a habilidade de teletransporte para um jogador clicando com o botão direito no mapa.
tags: ["player"]
---

:::warning

Esta função, a partir da versão 0.3d, está depreciada. Veja [OnPlayerClickMap](../callbacks/OnPlayerClickMap).

:::

## Descrição

Ativar/Desativar a habilidade de teletransporte para um jogador clicando com o botão direito no mapa

| Nome       | Descrição                                    |
| ---------- | -------------------------------------------- |
| playerid   | O ID do jogador para permitir teletransporte. |
| bool:allow | 'false' para desativar e 'true' para ativar. |

## Retorno

Esta função não retorna valores específicos.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    // Permite que o jogador se teletransporte clicando com o botão direito no mapa
    // como isso está em OnPlayerConnect, será feito para CADA jogador
    AllowPlayerTeleport(playerid, true);
    return 1;
}
```
## Notas

:::warning

Esta função funcionará apenas se [AllowAdminTeleport](AllowAdminTeleport) estiver ativada, e você precisa ser um administrador.

:::

## Funções Relacionadas

- [IsPlayerTeleportAllowed](IsPlayerTeleportAllowed): Este jogador pode se teletransportar clicando com o botão direito no mapa?
- [AllowAdminTeleport](AllowAdminTeleport): Alterna o teletransporte por waypoint para administradores RCON.