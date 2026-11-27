---
title: "IsActorStreamedIn | open.mp"
description: "Checks if an actor is streamed in for a player."
canonical: https://open.mp/docs/scripting/functions/IsActorStreamedIn
language: en
---

# IsActorStreamedIn

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Checks if an actor is streamed in for a player.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor. |
| playerid | The ID of the player. |

## Returns

This function returns **1** if the actor is streamed in for the player, or **0** if it is not.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(gMyActor, playerid))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [IsPlayerStreamedIn](https://open.mp/docs/scripting/functions/IsPlayerStreamedIn): Checks if a player is streamed in for another player.
