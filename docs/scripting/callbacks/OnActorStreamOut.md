---
title: "OnActorStreamOut | open.mp"
description: "This callback is called when an actor streams out by a player's client."
canonical: https://open.mp/docs/scripting/callbacks/OnActorStreamOut
language: en
---

# OnActorStreamOut

warning

This callback was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

This callback is called when an actor streams out by a player's client.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor that has been streamed out for the player. |
| forplayerid | The ID of the player that streamed the actor out. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnActorStreamIn](https://open.mp/docs/scripting/callbacks/OnActorStreamIn): This callback is called when an actor streams in by a player's client.
-   [OnPlayerStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerStreamOut): This callback is called when a player streams out for another player.
