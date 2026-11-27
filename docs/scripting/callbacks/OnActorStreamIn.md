---
title: "OnActorStreamIn | open.mp"
description: "This callback is called when an actor streams in by a player's client."
canonical: https://open.mp/docs/scripting/callbacks/OnActorStreamIn
language: en
---

# OnActorStreamIn

warning

This callback was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

This callback is called when an actor streams in by a player's client.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor that has been streamed in for the player. |
| forplayerid | The ID of the player that streamed the actor in. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnActorStreamOut](https://open.mp/docs/scripting/callbacks/OnActorStreamOut): This callback is called when an actor streams out by a player's client.
-   [OnPlayerStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerStreamIn): This callback is called when a player streams in for another player.
