---
id: OnActorStreamOut
title: OnActorStreamOut
description: This callback is called when an actor is streamed out by a player's client.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

This callback is called when an actor is streamed out by a player's client.

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | The ID of the actor that has been streamed out for the player. |
| forplayerid | The ID of the player that streamed the actor out.              |

## Returns

It is always called first in filterscripts.

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

This callback can also be called by NPC.

:::

## Related Functions
