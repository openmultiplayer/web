---
title: ResetPlayerWeapons
sidebar_label: ResetPlayerWeapons
description: "Remove todas as armas de um jogador."
tags: ["player"]
---


## Descrição

Remove todas as armas de um jogador.

| Nome | Descrição |
| -------- | --------------------------------------------- |
| playerid | O ID do jogador cujas armas devem ser removidas. |

## Retornos

**1** - A função foi executada com sucesso.

**0** - A função não foi executada. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Remova as armas do assassino
    ResetPlayerWeapons(killerid);
    return 1;
}
```
## Notas

:::tip

Para remover armas individuais de um jogador, defina sua munição para 0 usando [SetPlayerAmmo](SetPlayerAmmo).

:::

## Funções Relacionadas

- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.
- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.
- [RemovePlayerWeapon](RemovePlayerWeapon): Remove uma arma específica de um jogador.
