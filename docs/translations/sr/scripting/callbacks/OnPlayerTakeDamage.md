---
title: OnPlayerTakeDamage
description: Овај повратни позив се позива када играч претрпи штету.
tags: ["player"]
---

## Опис

Овај повратни позив се позива када играч претрпи штету.

| Име             | Опис                                                                              |
|-----------------|-----------------------------------------------------------------------------------|
| playerid        | ID играча који је претрпео штету.                                                 |
| issuerid        | ID играча који је нанео штету. INVALID_PLAYER_ID ако је самонанета.               |
| Float:amount    | Количина штете коју је играч претрпео (здравље и оклоп заједно).                  |
| WEAPON:weaponid | ID оружја/разлог штете.                                                           |
| bodypart        | [Део тела](../resources/bodyparts) који је погођен.                               |

## Враћа

**1** - Повратни позив неће бити позван у другим filterscripts.

**0** - Омогућава да се овај повратни позив позове у другим filterscripts.

Увек се прво позива у filterscripts, па враћањем 1 блокирате остале filterscripts да га виде.

## Примери

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Ако није самонанета.
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

<br />

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // Убија одмах снајпером уколико се погоди у главу
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Белешке

:::tip

- weaponid ће враћати 37 (бацач пламена) за све изворе ватре (нпр. молотов, 18).
- weaponid ће враћати 51 за било које оружје које прави експлозију (нпр. RPG, граната).
- **playerid** је једини који може позвати повратни позив.
- Количина је увек максимална штета коју weaponid може нанети, чак и када здравље преостало је мање од те максималне штете. Дакле, када играч има 100.0 здравља и буде погођен Desert Eagle-ом који има вредност штете од 46.2, потребна су 3 пуцња да би се убила тај играч. Сва три пуцња ће приказати количину од 46.2, иако када последњи пуцац погоди, играч има само 7.6 здравља преосталог.

:::

:::warning

- [GetPlayerHealth](../functions/GetPlayerHealth) и [GetPlayerArmour](../functions/GetPlayerArmour) ће враћати старе количине здравља и оклопа играча пре овог повратног позива.
- Увек проверите да ли је issuerid важећи пре него што га користите као индекс у низу.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerGiveDamage](OnPlayerGiveDamage): Позива се када играч нанесе штету.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Позива се када играч искористи оружје(удари њиме, пуца..).

## Повезане ресурси

- [Делови тела](../resources/bodyparts)
