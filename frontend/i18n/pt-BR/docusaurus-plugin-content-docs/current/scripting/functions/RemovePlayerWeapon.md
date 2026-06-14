---
title: RemovePlayerWeapon
sidebar_label: RemovePlayerWeapon
description: "Remova uma arma específica de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Remova uma arma específica de um jogador.

| Nome | Descrição |
| --------------- | --------------------------------------------------------- |
| playerid | O ID do jogador cuja arma deve ser removida.              |
| WEAPON:weaponid | O [ID da arma](../resources/weaponids) a ser removido. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // Remova a Desert-Eagle do jogador
```
## Funções Relacionadas

- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.
- [ResetPlayerWeapons](ResetPlayerWeapons): Remove todas as armas de um jogador.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Define a arma armada de um jogador.
- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.

## Recursos relacionados

- [Arma IDs](../resources/weaponids)
