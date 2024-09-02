---
title: OnPlayerGiveDamageActor
description: Ова повратна функција се активира када играч нанесе штету акотру.
tags: ["player", "actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Опис

Ова повратна функција се активира када играч нанесе штету акотру.

| Име             | Опис                                                     |
|-----------------|----------------------------------------------------------|
| playerid        | ID играча који је нанео штету.                           |
| damaged_actorid | ID актора који је примио штету.                          |
| Float:amount    | Количина здравља/армора коју је damaged_actorid изгубио. |
| WEAPON:weaponid | Разлог који је проузроковао штету.                       |
| bodypart        | [Део тела](../resources/bodyparts) који је погођен.      |

## Враћа

**1** - Функција неће бити позвана у другим филтерскриптама.

**0** - Омогућава да ова функција буде позвана у другим филтерскриптама.

Увек се прво позива у филтерскриптама, тако да враћање 1 блокира остале филтерскрипте од њеног извршавања.

## Пример

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128];
    new attackerName[MAX_PLAYER_NAME];
    new weaponName[24];

    GetPlayerName(playerid, attackerName, sizeof (attackerName));
    GetWeaponName(weaponid, weaponName, sizeof (weaponName));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attackerName, amount, damaged_actorid, weaponName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

:::tip

Ова функција се не позива ако је актер подешен као невидљив (**ШТО ЈЕ ПОДРАЗУМЕВАНО**)**. Погледајте [SetActorInvulnerable](../functions/SetActorInvulnerable).


:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnActorStreamOut](OnActorStreamOut): Ова повратна функција се позива када се актер избаци из стримовања клијента играча.
- [OnActorStreamIn](OnActorStreamOut): Ова повратна функција се позива када се актер учита у стримовање клијента играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreateActor](../functions/CreateActor): Креирајте актора (статички NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Поставите актора као невидљивог.
- [SetActorHealth](../functions/SetActorHealth): Поставите здравље актора.
- [GetActorHealth](../functions/GetActorHealth): Добијте здравље актора.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Проверите да ли је актор невидљив.
- [IsValidActor](../functions/IsValidActor): Проверите да ли је ID актора валидан.

## Повезани ресурси

- [Делови тела](../resources/bodyparts)
