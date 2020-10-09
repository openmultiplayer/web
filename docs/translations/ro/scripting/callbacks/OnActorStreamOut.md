---
id: OnActorStreamOut
title: OnActorStreamOut
description: Acest apel invers este apelat atunci când un actor este transmis în flux de către clientul unui jucător.
tags: []
---

:::warning

Aceasta functie a fost adaugata in SA:MP 0.3.7 si nu merge in versiunile sale anterioare.

:::

## Descriere

Acest apel invers este apelat atunci când un actor este transmis în flux de către clientul unui jucător.

| Nume        | Descriere                                                      |
| ----------- | -------------------------------------------------------------- |
| actorid     | ID-ul actorului care a fost transmis în flux pentru jucător.   |
| forplayerid | ID-ul jucătorului care a transmis actorul în flux.             |

## Returnari

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

Acest apel invers poate fi apelat și de NPC.

:::

## Related Functions
