---
title: OnPlayerGiveDamage
description: Esta callback é chamada quando um jogador causa danos a algum jogador.
tags: ["player"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3.d' />

## Descrição

Esta callback é chamada quando um jogador causa danos a algum jogador.

| Nome                               | Descrição                           |
|------------------------------------|-------------------------------------|
| playerid                           | O ID do jogador que causou o dano.  |
| damagedid                          | O ID do jogador que recebeu o dano. |
| Float:amount                       | A quantidade de dano causado.       |
| WEAPON:weaponid                    | O motivo que causou o dano.         |
| [bodypart](../resources/bodyparts) | A parte do corpo que foi atingida.  |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s causou %.0f de dano em %s, arma: %s, corpo: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Mantenha em mente que esta função pode ser imprecisa em alguns casos, Se deseja impedir que um determinado player cause dano a outro use SetPlayerTeam. O weaponid irá retornar 37 (flame thrower) para qualquer fonte que utilize fogo (EX: Molotov). Irá retornar 51 para qualquer fonte que utilize explosões (EX: RPG, granada). A arma sempre irá causar o máximo dano que ele suporta, por exemplo uma Desert Eagle que causa 46.2 de dano, em um pessoa com 100 de vida bastaria 3 tiros para mata-la, porém apesar de após de 2 tiros faltarem apenas 7.6 para mata-lo, a arma ainda causará 46.2 de dano.

:::
