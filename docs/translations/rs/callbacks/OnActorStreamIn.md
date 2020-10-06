---
id: OnActorStreamIn
title: OnActorStreamIn
description: Овај колбек је позван када се актор појави у играчевом клијенту.
tags: []
---

:::warning

Овај колбек је додан у верзији SA-MP 0.3.7 и неће радити у ранијим верзијама!

:::

## Description

Овај колбек се позове када се актор појави у играчевом клијенту.

| Име        | Опис                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | ID актора који се појавио играчу. |
| forplayerid | ID играћа коме се актор појавио.              |

## Returns

Увек се позива први у филтерскриптама.

## Examples

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

Овај колбек такође може бити позвад и од стране NPC-а.

:::

## Related Functions
