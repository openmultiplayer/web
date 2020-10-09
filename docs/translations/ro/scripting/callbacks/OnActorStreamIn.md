---
title: OnActorStreamIn
description: Acest apel invers este apelat atunci când un actor este transmis în flux de către clientul unui jucător.
---

import Warning from '../../meta/templates/\_version-warning-0.3.7.md'

<Warning/>

## Descriere

Acest apel invers este apelat atunci când un actor este transmis în flux de către clientul unui jucător.

| Nume        | Descriere                                                    |
| ----------- | ------------------------------------------------------------ |
| actorid     | ID-ul actorului care a fost transmis în flux pentru jucător. |
| forplayerid | ID-ul jucătorului în care s-a transmis actorul.              |

## Returnari

Este mereu primul in filterscripturi.

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

## Functii
