---
title: OnPlayerGiveDamageActor
description: Acest callback este apelat atunci când un jucător dă daune unui actor.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Descriere

Acest callback este apelat atunci când un jucător dă daune unui actor.

| Nume            | Descriere                                              |
|-----------------|--------------------------------------------------------|
| playerid        | ID-ul jucătorului care a provocat daune.               |
| damaged_actorid | ID-ul actorului care a primit daune.                   |
| Float:amount    | Cantitatea de HP/armură pierduta de actor.             |
| WEAPON:weaponid | Motivul care a cauzat dauna.                           |
| bodypart        | [body part](../resources/bodyparts) care a fost lovită |

## Returnări

1 - Callback-ul nu va fi apelat în alte filterscript-uri.

0 - Permite apelarea acestui callback în alte filterscript-uri.

Este întotdeauna numit primul în filterscript-uri, astfel încât returnarea 1 acolo blochează alte filterscript-uri să-l vadă.

## Exemple

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s a facut %.0f daune actorului cu ID %d, arma: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Această funcție nu este apelată dacă actorul este setat invulnerabil (CARE ESTE IMPLICIT). Vezi [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Funcții similare

- [CreateActor](../functions/CreateActor): Creați un actor (NPC static).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Set actor invulnerabil.
- [SetActorHealth](../functions/SetActorHealth): Stabiliți HP-ul a unui actor.
- [GetActorHealth](../functions/GetActorHealth): Obține HP-ul unui actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Verificați dacă actorul este invulnerabil.
- [IsValidActor](../functions/IsValidActor): Verificați dacă ID-ul actorului este valid.

## Callbacks similare

- [OnActorStreamOut](OnActorStreamOut): Apelat atunci când un actor este transmis în flux de către un jucător.
- [OnPlayerStreamIn](OnPlayerStreamIn): Apelat atunci când un jucător transmite în flux pentru alt jucător.
