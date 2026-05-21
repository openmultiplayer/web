---
title: SetPlayerArmedWeapon
sidebar_label: SetPlayerArmedWeapon
description: "Define qual arma (que o jogador já possui) o jogador está segurando."
tags: ["player"]
---


## Descrição

Define qual arma (que o jogador já possui) o jogador está segurando.

| Nome | Descrição |
| --------------- | ------------------------------------------------------------------------------------ |
| playerid | O ID do jogador para se armar com uma arma.                                           |
| WEAPON:weaponid | O ID da [arma](../resources/weaponids) com a qual o jogador deve estar armado. |

## Retornos

**1** - A função foi executada com sucesso. O sucesso é retornado mesmo quando a função falha na execução (o jogador não tem a arma especificada ou é uma arma inválida).

**0** - A função não foi executada. O jogador não está conectado.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    SetPlayerArmedWeapon(playerid, WEAPON_FIST); // desativa as armas
    return 1;
}

// Drive-by com SMG por [03]Garsino
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER || newstate == PLAYER_STATE_PASSENGER)
    {
        new
            weapon,
            ammo;

        GetPlayerWeaponData(playerid, WEAPON_SLOT_MACHINE_GUN, weapon, ammo); // Obtenha a arma SMG dos jogadores no slot 4 (WEAPON_SLOT_MACHINE_GUN)
        SetPlayerArmedWeapon(playerid, weapon); // Defina o jogador para drive-by com SMG
    }
    return 1;
}
```
## Notas

:::tip

Esta função equipa o jogador com uma arma que ele já possui; não lhes dá uma nova arma. Consulte GivePlayerWeapon.

:::

## Funções Relacionadas

- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.
- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.

## Funções Relacionadas

- [Arma IDs](../resources/weaponids)
- [Slots para armas](../resources/weaponslots)
