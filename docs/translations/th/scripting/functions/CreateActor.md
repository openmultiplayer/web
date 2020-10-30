---
title: CreateActor
description: Create a static 'actor' in the world.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Create a static 'actor' in the world. These 'actors' are like NPCs, however they have limited functionality. They do not take up server player slots.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| modelid  | The model ID (skin ID) the actor should have.      |
| x        | The X coordinate to create the actor at.           |
| y        | The Y coordinate to create the actor at.           |
| z        | The Z coordinate to create the actor at.           |
| Rotation | The facing angle (rotation) for the actor to have. |

## ส่งคืน

The created Actor ID (start at 0).

INVALID_ACTOR_ID (65535) If the actor limit (1000) is reached.

## ตัวอย่าง

```c
new ActorCJ;

public OnGameModeInit()
{
    // Create an actor (CJ) at Blueberry Acres (Center of SA map)
    ActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}
```

## บันทึก

:::tip

Actors are designed to just stand somewhere, for example cashiers and bartenders. They can perform animations (once or looping) using ApplyActorAnimation.

:::

:::warning

Actors are completely separate from NPCs. They do NOT use player IDs/slots on the server and CANNOT be handled like NPCs. Actors are limited to 1000 (MAX_ACTORS). Actors can be pushed by vehicles, use a timer to put them back at their positions. As of 0.3.7 R2 actors default to being invulnerable.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [DestroyActor](../../scripting/functions/DestroyActor.md): Destroy an actor.
- [SetActorPos](../../scripting/functions/SetActorPos.md): Set the position of an actor.
- [GetActorPos](../../scripting/functions/GetActorPos.md): Get the position of an actor.
- [SetActorFacingAngle](../../scripting/functions/SetActorFacingAngle.md): Set the facing angle of an actor.
- [GetActorFacingAngle](../../scripting/functions/GetActorFacingAngle.md): Get the facing angle of an actor.
- [SetActorVirtualWorld](../../scripting/functions/SetActorVirtualWorld.md): Set the virtual world of an actor.
- [GetActorVirtualWorld](../../scripting/functions/GetActorVirtualWorld.md): Get the virtual world of an actor.
- [ApplyActorAnimation](../../scripting/functions/ApplyActorAnimation.md): Apply an animation to an actor.
- [ClearActorAnimations](../../scripting/functions/ClearActorAnimations.md): Clear any animations that are applied to an actor.
- [GetPlayerCameraTargetActor](../../scripting/functions/GetPlayerCameraTargetActor.md): Get the ID of the actor (if any) a player is looking at.
- [IsActorStreamedIn](../../scripting/functions/IsActorStreamedIn.md): Checks if an actor is streamed in for a player.
- [SetActorHealth](../../scripting/functions/SetActorHealth.md): Set the health of an actor.
- [GetActorHealth](../../scripting/functions/GetActorHealth.md): Gets the health of an actor.
- [SetActorInvulnerable](../../scripting/functions/SetActorInvulnerable.md): Set actor invulnerable.
- [IsActorInvulnerable](../../scripting/functions/IsActorInvulnerable.md): Check if actor is invulnerable.
- [IsValidActor](../../scripting/functions/IsValidActor.md): Check if actor id is valid.
- [GetActorPoolSize](../../scripting/functions/GetActorPoolSize.md): Gets the highest actorid created on the server.
- [GetPlayerTargetActor](../../scripting/functions/GetPlayerTargetActor.md): Gets id of an actor which is aimed by certain player.
- [OnActorStreamIn](../../scripting/callbacks/OnActorStreamIn.md): Called when an actor is streamed in by a player.
- [OnActorStreamOut](../../scripting/callbacks/OnActorStreamOut.md): Called when an actor is streamed out by a player.
- [OnPlayerGiveDamageActor](../../scripting/callbacks/OnPlayerGiveDamageActor.md): This callback is called when a player gives damage to an actor.
