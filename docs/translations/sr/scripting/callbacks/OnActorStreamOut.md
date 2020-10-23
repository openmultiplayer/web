---
id: OnActorStreamOut
title: OnActorStreamOut
description: Овај колбек је позван када се актор престане приказивати у играчевом клијенту.
tags: []
---

:::warning

Овај колбек је додан у верзији SA-MP 0.3.7 и неће радити у ранијим верзијама!

:::

## Опис

Овај колбек је позван када се актор престане приказивати у играчевом клијенту.

| Name        | Description                                   |
| ----------- | --------------------------------------------- |
| actorid     | ID актора који се престао приказивати играчу. |
| forplayerid | ID играча коме се актор престао приказивати.  |

## Узвраћања

Увек се позива први у филтерскриптама.

## Примери

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

:::tip

Овај колбек такође може бити позван и од стране NPC-а.

:::

## Сродне функције
