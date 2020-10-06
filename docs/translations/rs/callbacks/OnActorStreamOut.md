---
id: OnActorStreamOut
title: OnActorStreamOut
description: Овај колбек је позван када се актор престане приказивати у играчевом клијенту.
tags: []
---

:::warning

Овај колбек је додан у верзији SA-MP 0.3.7 и неће радити у ранијим верзијама!

:::

## Description

Овај колбек је позван када се актор престане приказивати у играчевом клијенту.

| Name        | Description                                   |
| ----------- | --------------------------------------------- |
| actorid     | ID актора који се престао приказивати играчу. |
| forplayerid | ID играча коме се актор престао приказивати.  |

## Returns

Увек се позива први у филтерскриптама.

## Examples

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

Овај колбек такође може бити позвад и од стране NPC-а.

:::

## Related Functions
