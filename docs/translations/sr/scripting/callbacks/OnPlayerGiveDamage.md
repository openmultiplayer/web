---
title: OnPlayerGiveDamage
description: Ова функција се позива када играч нанесе штету другом играчу.
tags: ["player"]
---

## Опис

Ова функција се позива када играч нанесе штету другом играчу.

| Име             | Опис                                                           |
|-----------------|----------------------------------------------------------------|
| playerid        | ID играћа који наноси штету.                                   |
| damagedid       | ID играча који прима штету.                                    |
| Float:amount    | Количина хелта/армора коју је damagedid изгубио (комбиновано). |
| WEAPON:weaponid | Разлог који је проузроковао штету.                             |
| bodypart        | [Део тела](../resources/bodyparts) који је погођен.            |

## Враћа

**1** - Функција неће бити позвана у другим филтерскриптама.

**0** - Омогућава да ова функција буде позвана у другим филтерскриптама.

Увек се прво позива у филтерскриптама, тако да враћање 1 блокира остале филтерскрипте од њеног извршавања.

## Пример

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

:::tip

- Имајте на уму да ова функција може бити нетачна у неким случајевима.
- Ако желите да спречите одређене играче да наносе штету једни другима, користите [SetPlayerTeam](../functions/SetPlayerTeam).
- weaponid ће вратити 37 (бацач пламена) од било ког извора ватре (нпр. молотовљев коктел, 18).
- weaponid ће вратити 51 за било које оружје које ствара експлозију (нпр. РПГ, граната).
- **playerid** је једини који може позвати ову функцију.
- amount увек представља максималну штету коју weaponid може нанети, чак и када је преостало здравље мање од те максималне штете. Дакле, када играч има 100.0 здравља и бива погођен са Desert Eagle-ом који има вредност штете од 46.2, потребна су 3 хица да би се тај играч убио. Сва три хица ће показати вредност од 46.2, иако, када последњи хитац погоди, играч има само 7.6 здравља.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerTakeDamage](OnPlayerTakeDamage): Ова функција се позива када играч прими штету.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Ова функција се позива када играч испали оружје.

## Повезани ресурси

- [Делови тела](../resources/bodyparts)
