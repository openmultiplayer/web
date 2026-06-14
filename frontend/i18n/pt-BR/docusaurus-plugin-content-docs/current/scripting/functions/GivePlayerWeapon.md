---
title: GivePlayerWeapon
sidebar_label: GivePlayerWeapon
description: "Dê ao jogador uma arma com uma quantidade específica de munição."
tags: ["player"]
---


## Descrição

Dê ao jogador uma arma com uma quantidade específica de munição.

| Nome | Descrição |
| --------------- | --------------------------------------------------------------------- |
| playerid | O ID do jogador para quem dar uma arma.                             |
| WEAPON:weaponid | O [ID da arma](../resources/weaponids) para dar ao jogador. |
| ammo | A quantidade de munição a ser dada ao jogador.                             |

## Retornos

**1** - A função foi executada com sucesso.

**0** - A função não foi executada. Isso significa que o jogador não está conectado.

## Exemplos

```c
GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // Dê ao playerid uma espingarda serrada com 64 munições
```
## Funções Relacionadas

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Define a arma armada de um jogador.
- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.
- [ResetPlayerWeapons](ResetPlayerWeapons): Remove todas as armas de um jogador.
- [RemovePlayerWeapon](RemovePlayerWeapon): Remove uma arma específica de um jogador.

## Recursos relacionados

- [Arma IDs](../resources/weaponids)
