---
title: "CreateActor | open.mp"
description: "Create a static 'actor' in the world."
canonical: https://open.mp/docs/scripting/functions/CreateActor
language: en
---

# CreateActor

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Create a static 'actor' in the world. These 'actors' are like NPCs, however they have limited functionality. They do not take up server player slots.

| Name | Description |
| --- | --- |
| skin | The [model ID](https://open.mp/docs/scripting/resources/skins) the actor should have. |
| Float:x | The X coordinate to create the actor at. |
| Float:y | The Y coordinate to create the actor at. |
| Float:z | The Z coordinate to create the actor at. |
| Float:angle | The facing angle (rotation) for the actor to have. |

## Returns

The created Actor ID (start at 0).

INVALID\_ACTOR\_ID (65535) If the actor limit (1000) is reached.

## Examples

```c
new gActorCJ;

public OnGameModeInit()
{
    // Create an actor (CJ) at Blueberry Acres (Center of SA map)
    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}

public OnGameModeExit()
{
    // Destroy our lovely actor (CJ)
    DestroyActor(gActorCJ);
}
```

## Notes

note

-   Actors are designed to just stand somewhere, for example cashiers and bartenders. They can perform animations (once or looping) using [ApplyActorAnimation](https://open.mp/docs/scripting/functions/ApplyActorAnimation).
-   Actors default to being [invulnerable](https://open.mp/docs/scripting/functions/SetActorInvulnerable).

warning

-   Actors are completely separate from NPCs. They do NOT use player IDs/slots on the server and CANNOT be handled like NPCs.
-   Actors are limited to 1000 (MAX\_ACTORS).
-   Actors can be pushed by vehicles, use a timer to put them back at their positions.

## Related Functions

-   [DestroyActor](https://open.mp/docs/scripting/functions/DestroyActor): Destroy an actor.
-   [SetActorPos](https://open.mp/docs/scripting/functions/SetActorPos): Set the position of an actor.
-   [GetActorPos](https://open.mp/docs/scripting/functions/GetActorPos): Get the position of an actor.
-   [GetActorSpawnInfo](https://open.mp/docs/scripting/functions/GetActorSpawnInfo): Get the initial spawn point of the actor.
-   [SetActorFacingAngle](https://open.mp/docs/scripting/functions/SetActorFacingAngle): Set the facing angle of an actor.
-   [GetActorFacingAngle](https://open.mp/docs/scripting/functions/GetActorFacingAngle): Get the facing angle of an actor.
-   [SetActorVirtualWorld](https://open.mp/docs/scripting/functions/SetActorVirtualWorld): Set the virtual world of an actor.
-   [GetActorVirtualWorld](https://open.mp/docs/scripting/functions/GetActorVirtualWorld): Get the virtual world of an actor.
-   [ApplyActorAnimation](https://open.mp/docs/scripting/functions/ApplyActorAnimation): Apply an animation to an actor.
-   [ClearActorAnimations](https://open.mp/docs/scripting/functions/ClearActorAnimations): Clear any animations that are applied to an actor.
-   [GetActorAnimation](https://open.mp/docs/scripting/functions/GetActorAnimation): Get the animation the actor is currently performing.
-   [GetPlayerCameraTargetActor](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetActor): Get the ID of the actor (if any) a player is looking at.
-   [IsActorStreamedIn](https://open.mp/docs/scripting/functions/IsActorStreamedIn): Checks if an actor is streamed in for a player.
-   [SetActorSkin](https://open.mp/docs/scripting/functions/SetActorSkin): Set the skin of the actor.
-   [GetActorSkin](https://open.mp/docs/scripting/functions/GetActorSkin): Get the skin of the actor.
-   [SetActorHealth](https://open.mp/docs/scripting/functions/SetActorHealth): Set the health of an actor.
-   [GetActorHealth](https://open.mp/docs/scripting/functions/GetActorHealth): Gets the health of an actor.
-   [SetActorInvulnerable](https://open.mp/docs/scripting/functions/SetActorInvulnerable): Set actor invulnerable.
-   [IsActorInvulnerable](https://open.mp/docs/scripting/functions/IsActorInvulnerable): Check if actor is invulnerable.
-   [IsValidActor](https://open.mp/docs/scripting/functions/IsValidActor): Check if actor id is valid.
-   [GetActorPoolSize](https://open.mp/docs/scripting/functions/GetActorPoolSize): Gets the highest actorid created on the server.
-   [GetPlayerTargetActor](https://open.mp/docs/scripting/functions/GetPlayerTargetActor): Gets id of an actor which is aimed by certain player.

## Related Callbacks

-   [OnActorStreamIn](https://open.mp/docs/scripting/callbacks/OnActorStreamIn): Called when an actor streams in by a player.
-   [OnActorStreamOut](https://open.mp/docs/scripting/callbacks/OnActorStreamOut): Called when an actor streams out by a player.
-   [OnPlayerGiveDamageActor](https://open.mp/docs/scripting/callbacks/OnPlayerGiveDamageActor): This callback is called when a player gives damage to an actor.
