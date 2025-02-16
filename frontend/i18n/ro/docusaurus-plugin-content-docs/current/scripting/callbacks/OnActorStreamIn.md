---
title: OnActorStreamIn
description: Acest callback este apelat atunci când un actor este transmis în flux (streamed in) de către clientul unui jucător.
---

:::warning

Această funcție a fost adăugată în SA-MP 0.3.7 și nu va funcționa în versiunile anterioare!

:::

## Descriere

Acest callback este apelat atunci când un actor este transmis în flux (streamed in) de către clientul unui jucător.

| Nume        | Descriere                                                    |
| ----------- | ------------------------------------------------------------ |
| actorid     | ID-ul actorului care a fost transmis în flux pentru jucător. |
| forplayerid | ID-ul jucătorului în care s-a transmis actorul.              |

## Returnări

Mereu este apelat primul în filterscript-uri.

## Exemple

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actorul %d este acum transmis în flux pentru dvs.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Acest apel invers poate fi apelat și de NPC.

:::

## Funcții asociate
